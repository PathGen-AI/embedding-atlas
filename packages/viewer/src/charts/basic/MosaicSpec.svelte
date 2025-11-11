<!-- Copyright (c) 2025 Apple Inc. Licensed under MIT License. -->
<script lang="ts">
  import { onMount } from "svelte";
  import type { Coordinator } from "@uwdata/mosaic-core";

  import type { ChartViewProps } from "../chart.js";
  import type { MosaicSpecType } from "./types.js";

  let {
    context,
    width,
    height,
    spec,
  }: ChartViewProps<MosaicSpecType, {}> = $props();

  let { coordinator } = context;

  let containerDiv: HTMLDivElement | undefined = $state();
  let mountedElement: HTMLElement | null = $state(null);

  async function renderVgplotSpec(coordinator: Coordinator, vgplotSpec: any, container: HTMLDivElement) {
    try {
      // Dynamically import vgplot
      const vgplot = await import("@uwdata/vgplot");
      
      // Clear any existing content
      container.innerHTML = "";
      
      // Create the plot with the coordinator
      const plotElement = vgplot.plot(vgplotSpec, { coordinator });
      
      // Mount the element
      if (plotElement) {
        container.appendChild(plotElement);
        mountedElement = plotElement;
      }
    } catch (error) {
      console.error("[MosaicSpec] Failed to render vgplot spec:", error);
      container.innerHTML = `<div style="padding: 1rem; color: #ef4444;">
        Failed to render chart: ${error instanceof Error ? error.message : String(error)}
      </div>`;
    }
  }

  onMount(() => {
    return () => {
      // Cleanup: remove the mounted element
      if (mountedElement && containerDiv) {
        containerDiv.innerHTML = "";
        mountedElement = null;
      }
    };
  });

  $effect(() => {
    if (containerDiv && spec.spec) {
      renderVgplotSpec(coordinator, spec.spec, containerDiv);
    }
  });
</script>

<div 
  class="p-2 flex flex-col" 
  style:width={width != null ? `${width}px` : '100%'}
  style:height={height != null ? `${height}px` : '100%'}
>
  <div bind:this={containerDiv} class="flex-1 overflow-auto"></div>
</div>
