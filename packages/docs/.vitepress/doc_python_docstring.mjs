// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { execSync } from "child_process";
import { resolve } from "path";

import { deindent } from "./utils.mjs";

function extract(entrypoint) {
  let [module, func] = entrypoint.split(":");
  let code = deindent(`
    import json
    import docutils.core
    from textwrap import dedent
    from ${module} import ${func.split(".")[0]}

    docstring = dedent(${func}.__doc__)

    settings_overrides = {
      "embed_stylesheet": False,
      "stylesheet": None,
      "xml_declaration": False,
      "output_encoding": "utf-8"
    }

    result = docutils.core.publish_string(docstring, writer="html5", settings_overrides=settings_overrides)

    print(result.decode("utf-8"))
  `);
  code = code.replaceAll('"', '\\"');
  // Determine minimal extra packages needed based on the module being imported.
  let extras = ["docutils"];
  if (module === "embedding_atlas.streamlit") {
    // Required by embedding_atlas/streamlit.py
    extras.push("streamlit");
  }
  if (module === "embedding_atlas.widget") {
    // Required by embedding_atlas/widget.py
    extras.push("duckdb", "anywidget", "traitlets");
  }
  let withFlags = extras.map((p) => `--with ${p}`).join(" ");
  let helpCommand = `uv run --no-project ${withFlags} python -c "${code}"`;
  let workDir = resolve("../../packages/backend");
  try {
    let result = execSync(helpCommand, { cwd: workDir, encoding: "utf-8" });
    return result;
  } catch (e) {
    return null;
  }
}

function generate(content) {
  // Remove the <main></main> wrapper
  let i1 = content.indexOf("<main>");
  let i2 = content.lastIndexOf("</main>");
  content = content.substring(i1 + 6, i2);
  // Replace span with special classes with <code>
  content = content.replaceAll(/<span class="pre">(.*?)<\/span>/gs, (_, m) => `${m}`);
  content = content.replaceAll(/<span class="docutils literal">(.*?)<\/span>/gs, (_, m) => `<code>${m}</code>`);
  // Wrap into our custom class for styling
  return '<div class="python-docstring" markdown=0>' + content + "</div>";
}

export function renderPythonDocstring(name) {
  // Graceful platform-specific fallback for Intel macOS
  if (process.platform === "darwin" && process.arch === "x64") {
    return '<div class="python-docstring" markdown=0><em>Python docstrings omitted on Intel macOS during docs build. Full docs render on other platforms.</em></div>';
  }
  let data = extract(name);
  if (data == null) {
    return '<div class="python-docstring" markdown=0><em>Python docstrings unavailable during docs build (dependency not present). Full docs render on supported platforms.</em></div>';
  }
  return generate(data);
}
