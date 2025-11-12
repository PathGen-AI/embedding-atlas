// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { execSync } from "child_process";
import { resolve } from "path";

import { deindent, prepareHTML } from "./utils.mjs";

function extract(entrypoint) {
  let [module, func] = entrypoint.split(":");
  let code = deindent(`
    import json
    from ${module} import ${func} as main
    print(json.dumps([p.to_info_dict() for p in main.params]))
  `);
  // Minimal dependencies to import embedding_atlas.cli and inspect params.
  let extras = ["click", "inquirer", "numpy", "pandas", "uvicorn"];
  let withFlags = extras.map((p) => `--with ${p}`).join(" ");
  let helpCommand = `uv run --no-project ${withFlags} python -c "${code}"`;
  let workDir = resolve("../../packages/backend");
  try {
    let json = execSync(helpCommand, { cwd: workDir, encoding: "utf-8" });
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}

function generate(args) {
  let lines = [];
  for (let arg of args) {
    if (arg.param_type_name != "option") {
      continue;
    }
    let id = arg.name;
    let opts = [...arg.opts, ...arg.secondary_opts].join(" / ");
    lines.push(
      prepareHTML`
        <h4 id=${id}>
          ${opts} <code>${arg.type.name}</code>
          <a class="header-anchor" href="#${id}" aria-label="option ${opts}">​</a>
        </h4>
      `,
    );
    lines.push(arg.help);
  }
  return lines.join("\n\n");
}

export function generatePythonCommandLineDocs(name) {
  // Graceful platform-specific fallback for Intel macOS
  if (process.platform === "darwin" && process.arch === "x64") {
    return "_Command-line options omitted on Intel macOS during docs build. Full docs render on other platforms._";
  }
  let data = extract(name);
  if (data == null) {
    return "_Command-line options unavailable during docs build (dependency not present). Full docs render on supported platforms._";
  }
  return generate(data);
}
