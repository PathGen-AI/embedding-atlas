<!-- Copyright (c) 2025 Apple Inc. Licensed under MIT License. -->
<script lang="ts">
  import { onMount } from "svelte";
  import { isSelection, type Coordinator } from "@uwdata/mosaic-core";
  import { astToDOM, parseSpec } from "@uwdata/mosaic-spec";
  import { createAPIContext } from "@uwdata/vgplot";

  import type { ChartViewProps } from "../chart.js";
  import type { MosaicSpecType } from "./types.js";

  let {
    context,
    width,
    height,
    spec,
  }: ChartViewProps<MosaicSpecType, {}> = $props();

  let { coordinator, colorScheme } = context;

  let containerDiv: HTMLDivElement | undefined = $state();
  let containerWidth = $state(width ?? 800);

  function isSourceSelf(container: HTMLElement | undefined, source: any): boolean {
    if (!container) return false;
    let plotElement = source.mark?.plot?.element;
    if (plotElement == null) {
      return false;
    }
    return container?.contains(plotElement) ?? false;
  }

  async function renderVgplotSpec(
    coordinator: Coordinator,
    vgplotSpec: any,
    container: HTMLDivElement,
    params: any = {}
  ) {
    try {
      // Parse the spec into AST
      const ast = parseSpec(vgplotSpec);
      
      // Create API context with coordinator
      const apiContext = createAPIContext({ coordinator });
      
      // Convert AST to DOM
      const result = await astToDOM(ast, { 
        params: new Map(Object.entries(params)),
        api: apiContext 
      } as any);
      
      // Clear existing content
      container.innerHTML = "";
      
      // Append the element
      if (result.element) {
        container.appendChild(result.element);
      }
      
      // Return cleanup function
      return () => {
        for (const key in params) {
          const selection = params[key];
          if (!isSelection(selection)) {
            continue;
          }
          for (const clause of selection.clauses) {
            if (isSourceSelf(container, clause.source)) {
              clause.source?.reset?.();
              selection.update({ ...clause, value: null, predicate: null });
            }
          }
        }
        result.element?.remove();
      };
    } catch (error) {
      console.error("[MosaicSpec] Failed to render vgplot spec:", error);
      container.innerHTML = `<div style="padding: 1rem; color: #ef4444;">
        Failed to render chart: ${error instanceof Error ? error.message : String(error)}
      </div>`;
      return () => {};
    }
  }

  onMount(() => {
    $effect.pre(() => {
      let destroyFunction: (() => void) | null = null;

      async function makePlot() {
        if (containerDiv && spec.spec) {
          destroyFunction = await renderVgplotSpec(
            coordinator,
            spec.spec,
            containerDiv,
            { filter: context.filter }
          );
        }
      }

      makePlot();

      return () => {
        destroyFunction?.();
      };
    });
  });

  $effect(() => {
    if (width != null) {
      containerWidth = width;
    }
  });
</script>

<div 
  class="p-2 w-full" 
  bind:this={containerDiv}
  bind:clientWidth={containerWidth}
  style:height={height != null ? `${height}px` : '100%'}
></div>
