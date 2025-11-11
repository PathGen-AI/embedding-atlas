import { Coordinator } from '@uwdata/mosaic-core';
import { CustomCell } from '@embedding-atlas/table';
import { EmbeddingViewConfig } from '@embedding-atlas/component';
import { Label } from '@embedding-atlas/component';

declare interface BoxPlotSpec {
    type: "box-plot";
    title?: string;
    data: {
        x: string;
        y: string;
    };
    xBinCount?: number;
    xScaleType?: ScaleType | null;
    yScaleType?: ScaleType | null;
}

declare type BuiltinChartSpec = BoxPlotSpec | HistogramSpec | Histogram2DSpec | HistogramStackSpec | CountPlotSpec | MosaicSpecType | LineplotSpec | PredicatesSpec | EmbeddingSpec | TableSpec;

declare interface Cache_2 {
    /** Gets an object from the cache with the given key. Returns `null` if the entry is not found. */
    get(key: string): Promise<any | null>;
    /** Sets an object to the cache with the given key */
    set(key: string, value: any): Promise<void>;
}
export { Cache_2 as Cache }

declare interface CountPlotSpec {
    type: "count-plot" | "count-plot-list";
    title?: string;
    data: {
        field: string;
    };
    expanded?: boolean;
    percentage?: boolean;
}

/** Returns a list of default charts for a given data table. */
export declare function defaultCharts(coordinator: Coordinator, table: string, id: string, options?: {
    exclude?: string[];
    projection?: {
        x: string;
        y: string;
        text?: string;
    };
}): Promise<BuiltinChartSpec[]>;

export declare class EmbeddingAtlas {
    private component;
    private container;
    private currentProps;
    constructor(target: HTMLElement, props: EmbeddingAtlasProps);
    update(props: Partial<EmbeddingAtlasProps>): void;
    destroy(): void;
}

export declare interface EmbeddingAtlasProps {
    /** The Mosaic coordinator. */
    coordinator: Coordinator;
    /** The data source. */
    data: {
        /** The name of the data table. */
        table: string;
        /** The column for unique row identifiers. */
        id: string;
        /** The X and Y columns for the embedding projection view. */
        projection?: {
            x: string;
            y: string;
        } | null;
        /** The column for pre-computed nearest neighbors.
         *  Each value in the column should be a dictionary with the format: `{ "ids": [id1, id2, ...], "distances": [distance1, distance2, ...] }`.
         *  `"ids"` should be an array of row ids (as given by the `idColumn`) of the neighbors, sorted by distance.
         *  `"distances"` should contain the corresponding distances to each neighbor.
         *  Note that if `searcher.nearestNeighbors` is specified, the UI will use the searcher instead.
         */
        neighbors?: string | null;
        /** The column for text. The text will be used as content for the tooltip and search features. */
        text?: string | null;
    };
    /** The color scheme. */
    colorScheme?: "light" | "dark" | null;
    /** The initial viewer state. */
    initialState?: EmbeddingAtlasState | null;
    /** Configuration for the embedding view. See docs for the EmbeddingView. */
    embeddingViewConfig?: EmbeddingViewConfig | null;
    /** Labels for the embedding view. */
    embeddingViewLabels?: Label[] | null;
    /** An object that provides search functionalities, including full text search, vector search, and nearest neighbor queries.
     *  If not specified (undefined), a default full-text search with the text column will be used.
     *  If set to null, search will be disabled. */
    searcher?: Searcher | null;
    /** Custom cell renderers for the table view. */
    tableCellRenderers?: Record<string, CustomCell | "markdown">;
    /** A callback to export the currently selected points. */
    onExportSelection?: ((predicate: string | null, format: "json" | "jsonl" | "csv" | "parquet") => Promise<void>) | null;
    /** A callback to download the application as archive. */
    onExportApplication?: (() => Promise<void>) | null;
    /** A callback when the state of the viewer changes. You may serialize the state to JSON and load it back. */
    onStateChange?: ((state: EmbeddingAtlasState) => void) | null;
    /** A cache to speed up initialization of the viewer. */
    cache?: Cache_2 | null;
}

export declare interface EmbeddingAtlasState {
    /** The version of Embedding Atlas that created this state. */
    version: string;
    /** UNIX timestamp when this was created. */
    timestamp: number;
    /** The list of charts. */
    charts?: Record<string, any>;
    /** The state of all charts, stored as a map of id to chart state. */
    chartStates?: Record<string, any>;
    /** The current layout */
    layout?: string;
    /** The state of all layouts. */
    layoutStates?: Record<string, any>;
    /** The selection predicate (SQL expression).
     *  This property is derived from chart states, changing this directly has no effect. */
    predicate?: string | null;
}

declare interface EmbeddingSpec {
    type: "embedding";
    title: string;
    data: {
        x: string;
        y: string;
        text?: string | null;
        category?: string | null;
    };
    mode?: "points" | "density";
    minimumDensity?: number;
    pointSize?: number;
    config?: EmbeddingViewConfig;
}

declare interface Histogram2DSpec {
    type: "histogram-2d";
    title?: string;
    data: {
        x: string;
        y: string;
    };
    xBinCount?: number;
    yBinCount?: number;
    xScaleType?: ScaleType | null;
    yScaleType?: ScaleType | null;
    normalization?: "x" | "y" | null;
}

declare interface HistogramSpec {
    type: "histogram";
    title?: string;
    data: {
        field: string;
    };
    binCount?: number;
    xScaleType?: ScaleType | null;
}

declare interface HistogramStackSpec {
    type: "histogram-stack";
    title?: string;
    data: {
        x: string;
        group: string;
    };
    xBinCount?: number;
    groupBinCount?: number;
    xScaleType?: ScaleType | null;
    normalization?: "x" | null;
}

declare interface LineplotSpec {
    type: "line-plot";
    title?: string;
    data: {
        table: string;
        x: string;
        group?: string | null;
    };
    xScaleType?: ScaleType | null;
}

declare interface MosaicSpecType {
    type: "mosaic-spec";
    title?: string;
    spec: any;
}

declare interface PredicatesSpec {
    type: "predicates";
    title?: string;
    items?: {
        name: string;
        predicate: string;
    }[];
}

declare type ScaleType = "linear" | "log" | "symlog" | "band";

export declare interface Searcher {
    /** Perform a full text search with the given query */
    fullTextSearch?(query: string, options?: {
        limit: number;
        predicate: string | null;
        onStatus: (status: string) => void;
    }): Promise<{
        id: any;
    }[]>;
    /** Perform a vector search with the given query */
    vectorSearch?(query: string, options?: {
        limit: number;
        predicate: string | null;
        onStatus: (status: string) => void;
    }): Promise<{
        id: any;
        distance?: number;
    }[]>;
    /** Find nearest neighbors of the row of the given id */
    nearestNeighbors?(id: any, options?: {
        limit: number;
        predicate: string | null;
        onStatus: (status: string) => void;
    }): Promise<{
        id: any;
        distance?: number;
    }[]>;
}

declare interface TableSpec {
    type: "table";
    title: string;
    columns: string[];
}

export { }
