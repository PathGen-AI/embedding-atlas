<!-- Copyright (c) 2025 Apple Inc. Licensed under MIT License. -->
<script lang="ts">
  import { makeClient, type Coordinator, type SelectionClause } from "@uwdata/mosaic-core";
  import * as SQL from "@uwdata/mosaic-sql";

  import Container from "../common/Container.svelte";
  import SizeReader from "../common/SizeReader.svelte";
  import XYFrame from "../common/XYFrame.svelte";
  import ScaleTypePicker from "../controls/ScaleTypePicker.svelte";

  import type { ChartViewProps } from "../chart.js";
  import { chartColors } from "../common/colors.js";
  import {
    distributionAggregate,
    distributionStats,
    type AggregateKey,
    type DistributionAggregate,
    type DistributionStats,
  } from "../common/distribution_helper.js";
  import type { ScaleType } from "../common/types.js";
  import type { LineplotSpec } from "./types.js";

  interface State {
    // Line plots typically don't have brush selection
  }

  interface Point {
    x: AggregateKey;
    count: number;
  }

  interface ChartData {
    xScale: any;
    points: Point[];
  }

  let {
    context,
    width,
    height,
    spec,
    state: chartState,
    onSpecChange,
    onStateChange,
  }: ChartViewProps<LineplotSpec, State> = $props();

  let { coordinator, colorScheme } = context;

  let colors = $derived(chartColors[$colorScheme]);

  let chartData: ChartData | null = $state.raw(null);
  let defaultScaleType = $state<ScaleType | null>(null);

  function initializeClient(coordinator: Coordinator, table: string, field: string) {
    let stats: DistributionStats | null = $state.raw(null);

    // Query the stats
    distributionStats(coordinator, table, field).then((r) => {
      stats = r;
    });

    // Infer binning from stats
    let aggregate: DistributionAggregate | null = $derived(
      stats ? distributionAggregate({ key: "x", stats: stats, scaleType: spec.xScaleType, binCount: 52 }) : null,
    );

    $effect.pre(() => {
      if (defaultScaleType == null && aggregate?.scales.x?.type != null) {
        defaultScaleType = aggregate?.scales.x?.type;
      }
    });

    function createClient(aggregate: DistributionAggregate, callback: (points: any[]) => void) {
      return makeClient({
        coordinator: coordinator,
        selection: context.filter,
        query: (predicate) => {
          return SQL.Query.from(table)
            .select({ ...aggregate.select, count: SQL.count() })
            .where(predicate)
            .groupby(aggregate.select.x)
            .orderby(aggregate.select.x);
        },
        queryResult: (data: any) => {
          callback(Array.from(data).map(aggregate.collect));
        },
      });
    }

    $effect.pre(() => {
      if (aggregate == null) {
        return;
      }
      let capturedAggregate = aggregate;

      let points: Point[] = $state([]);

      let client = createClient(capturedAggregate, (data) => {
        points = data;
      });

      $effect.pre(() => {
        if (points.length > 0) {
          chartData = {
            xScale: capturedAggregate.scales.x,
            points: points,
          };
        }
      });

      return () => {
        client.destroy();
      };
    });
  }

  $effect.pre(() => {
    initializeClient(coordinator, context.table, spec.data.x);
  });
</script>

<Container width={width} height={height} class="flex flex-col gap-2">
  <SizeReader flexHeight={height != null}>
    {#snippet children(width, height)}
      {#if chartData != null}
        {@const maxCount = chartData.points.reduce((a, b) => Math.max(a, b.count), 1)}
        <XYFrame
          width={width}
          height={height}
          xScale={chartData.xScale}
          yScale={{ type: "linear", domain: [0, maxCount] }}
          colorScheme={$colorScheme}
        >
          {#snippet children(proxy)}
            {@const xScale = proxy.xScale!}
            {@const yScale = proxy.yScale!}
            <!-- Draw line connecting points -->
            {#if chartData.points.length > 1}
              {@const pathData = chartData.points
                .map((point, i) => {
                  const x = xScale.apply(point.x);
                  const y = yScale.apply(point.count);
                  return `${i === 0 ? "M" : "L"} ${x} ${y}`;
                })
                .join(" ")}
              <path d={pathData} fill="none" stroke={colors.markColor} stroke-width="2" />
              
              <!-- Draw points on the line -->
              {#each chartData.points as point}
                {@const x = xScale.apply(point.x)}
                {@const y = yScale.apply(point.count)}
                <circle cx={x} cy={y} r="3" fill={colors.markColor} />
              {/each}
            {/if}
          {/snippet}
        </XYFrame>
      {/if}
    {/snippet}
  </SizeReader>
  {#if chartData?.xScale.type != "band"}
    <div class="flex gap items-center text-sm">
      <span class="flex-1"></span>
      <ScaleTypePicker
        label="X"
        value={spec.xScaleType ?? defaultScaleType ?? "linear"}
        onChange={(v) => {
          onSpecChange({ xScaleType: v });
        }}
      />
    </div>
  {/if}
</Container>
