import { Coordinator } from '@uwdata/mosaic-core';
import { Selection as Selection_2 } from '@uwdata/mosaic-core';

declare type AdditionalHeaderContentClass = new (node: HTMLElement, props: AdditionalHeaderContentProps) => {
    update?: (props: AdditionalHeaderContentProps) => void;
    destroy?: () => void;
};

declare interface AdditionalHeaderContentProps {
    column: string;
}

declare type AdditionalHeaderContentsConfig = {
    [col: string]: CustomHeader;
};

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

declare interface Cache_2_2 {
    get: (key: string) => Promise<any | null>;
    set: (key: string, value: any) => Promise<void>;
}

/** A resulting cluster from the find clusters function */
export declare interface Cluster {
    /** Cluster identifier */
    identifier: number;
    /** The total density */
    sumDensity: number;
    /** The mean x location (weighted by density) */
    meanX: number;
    /** The mean y location (weighted by density) */
    meanY: number;
    /** The maximum density */
    maxDensity: number;
    /** The location with the maximum density */
    maxDensityLocation: [number, number];
    /** The number of pixels in the cluster */
    pixelCount: number;
    /** The cluster's boundary represented as a list of polygons */
    boundary?: [number, number][][];
    /** The cluster's boundary approximated with a list of rectangles, each rectangle is given as an array `[x1, y1, x2, y2]` */
    boundaryRectApproximation?: [number, number, number, number][];
}

declare type ColumnConfig = {
    title?: string;
    width?: number;
    hidden?: boolean;
};

declare type ColumnConfigChangeCallback = (column: string, newConfigs: ColumnConfigs) => void;

declare type ColumnConfigs = {
    [column: string]: ColumnConfig;
};

declare interface CountPlotSpec {
    type: "count-plot" | "count-plot-list";
    title?: string;
    data: {
        field: string;
    };
    expanded?: boolean;
    percentage?: boolean;
}

export declare function createKNN(count: number, inputDim: number, data: Float32Array, options?: KNNOptions): Promise<KNN>;

/**
 * Initialize a UMAP instance.
 * @param count the number of data points
 * @param inputDim the input dimension
 * @param outputDim the output dimension
 * @param data the data array. Must be a Float32Array with count * inputDim elements.
 * @param options options
 */
export declare function createUMAP(
count: number,
inputDim: number,
outputDim: number,
data: Float32Array,
options?: UMAPOptions,
): Promise<UMAP>;

declare type CustomCell = {
    class: CustomCellClass;
    props?: CustomCellProps;
} | CustomCellClass;

declare type CustomCellClass = new (node: HTMLElement, props: CustomCellProps) => {
    update?: (props: CustomCellProps) => void;
    destroy?: () => void;
};

declare interface CustomCellProps {
    value: any;
    rowData: {
        [col: string]: any;
    };
}

declare type CustomCellsConfig = {
    [col: string]: CustomCell;
};

export declare type CustomComponent<N, P> = {
    class: CustomComponentClass<N, P & any>;
    props?: Record<string, any>;
} | CustomComponentClass<N, P>;

declare type CustomComponentClass<N, P> = new (node: N, props: P) => {
    update?: (props: P) => void;
    destroy?: () => void;
};

declare type CustomHeader = {
    class: AdditionalHeaderContentClass;
    props?: AdditionalHeaderContentProps;
} | AdditionalHeaderContentClass;

export declare type DataField = string | {
    sql: string;
};

export declare interface DataPoint {
    x: number;
    y: number;
    category?: number;
    text?: string;
    identifier?: DataPointID;
    fields?: Record<string, any>;
}

export declare type DataPointID = string | number | bigint;

export declare function defaultCategoryColors(count: number): string[];

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

export declare class EmbeddingView {
    private component;
    private currentProps;
    constructor(target: HTMLElement, props: EmbeddingViewProps);
    update(props: Partial<EmbeddingViewProps>): void;
    destroy(): void;
}

export declare interface EmbeddingViewConfig {
    /** Color scheme. */
    colorScheme?: "light" | "dark" | null;
    /** View mode. */
    mode?: "points" | "density" | null;
    /** Minimum average density for density contours to show up.
     * The density is measured as number of points per square points (aka., px in CSS units). */
    minimumDensity?: number | null;
    /** Override the automatically calculated point size.
     * If not specified, point size is calculated based on density. */
    pointSize?: number | null;
    /** Generate labels automatically.
     * By default labels are generated automatically if the `labels` prop is not specified,
     * and a `text` column is specified in the Mosaic view,
     * or a `queryClusterLabels` callback is specified in the non-Mosaic view.
     * Set this to `false` to disable automatic labels. */
    autoLabelEnabled?: boolean | null;
    /** The density threshold to filter the clusters before generating automatic labels.
     * The value is relative to the max density. */
    autoLabelDensityThreshold?: number | null;
    /** The stop words for automatic label generation. By default use NLTK stop words. */
    autoLabelStopWords?: string[] | null;
}

export declare class EmbeddingViewMosaic {
    private component;
    private currentProps;
    constructor(target: HTMLElement, props: EmbeddingViewMosaicProps);
    update(props: Partial<EmbeddingViewMosaicProps>): void;
    destroy(): void;
}

export declare interface EmbeddingViewMosaicProps {
    /** The Mosaic coordinator.
     *  If not specified, the default coordinator from Mosaic's `coordinator()` method will be used. */
    coordinator?: Coordinator;
    /** The data table name. */
    table: string;
    /** The x column name. */
    x: string;
    /** The y column name. */
    y: string;
    /** The name of the category column.
     *  The categories should be represented as integers starting from 0.
     *  If you have categories represented as strings, you should first convert them to 0-indexed integers. */
    category?: string | null;
    /** The name of the text column.
     *  If specified, the default tooltip shows the text content.
     *  The text content is also used to generate labels automatically. */
    text?: string | null;
    /** The name of the identifier (aka., id) column.
     *  If specified, the `selection` object will contain an `identifier` property that you can use to identify the point. */
    identifier?: string | null;
    /** Additional fields for the tooltip data element.
     *  Each field can be specified as a column name or a SQL expression. */
    additionalFields?: Record<string, DataField> | null;
    /** The colors for the categories.
     *  Category `i` will use the `i`-th color from this list.
     *  If not specified, default colors will be used. */
    categoryColors?: string[] | null;
    /** A Mosaic `Selection` object to filter the contents of this view. */
    filter?: Selection_2 | null;
    /** Labels to display on the embedding view.
     *  Each label must have `x`, `y`, and `text` properties,
     *  and optionally `level` and `priority`. */
    labels?: Label[] | null;
    /** The width of the view. */
    width?: number | null;
    /** The height of the view. */
    height?: number | null;
    /** The pixel ratio of the view. */
    pixelRatio?: number | null;
    /** Configure the theme of the view. */
    theme?: ThemeConfig | null;
    /** Configure the embedding view. */
    config?: EmbeddingViewConfig | null;
    /** The viewport state.
     *  You may use this to share viewport state across multiple views.
     *  If undefined or set to `null`, the view will use a default viewport state.
     *  To listen to viewport state change, use `onViewportState`. */
    viewportState?: ViewportState | null;
    /** The current tooltip.
     *  The tooltip is an object with the following fields: `x`, `y`, `category`,
     *  `text`, `identifier`.
     *
     *  You may pass the identifier for the data point (`DataPointID`), or a `DataPoint`
     *  object, or a Mosaic `Selection`. If an id or a `DataPoint` object is specified,
     *  you will need to use `onTooltip` to listen to tooltip changes; if a Mosaic
     *  `Selection` is used, the selection will be updated when tooltip is triggered.
     */
    tooltip?: Selection_2 | DataPoint | DataPointID | null;
    /** The current single or multiple point selection.
     *
     *  You may pass an array of `DataPointID` or `DataPoint` objects, or a Mosaic
     *  `Selection`. If `DataPointID[]` or `DataPoint[]` is specified, you will need
     *  to use `onSelection` to listen to selection changes; if a Mosaic `Selection`
     *  is used, the selection will be updated with the appropriate predicates. */
    selection?: Selection_2 | DataPoint[] | DataPointID[] | null;
    /** A Mosaic `Selection` object to capture the component's range selection. */
    rangeSelection?: Selection_2 | null;
    /** The rectangle or polygon that drives the range selection. Setting this
     *  changes the current range selection and also affects the selection passed
     *  in `rangeSelection`. Use `onRangeSelection` to listen for changes to this
     *  rectangle. */
    rangeSelectionValue?: Rectangle | Point[] | null;
    /** A callback for when `viewportState` changes. */
    onViewportState?: ((value: ViewportState) => void) | null;
    /** A callback for when `tooltip` changes. */
    onTooltip?: ((value: DataPoint | null) => void) | null;
    /** A callback for when `selection` changes. */
    onSelection?: ((value: DataPoint[] | null) => void) | null;
    /** A callback for when `rangeSelection` changes. */
    onRangeSelection?: ((value: Rectangle | Point[] | null) => void) | null;
    /** A custom renderer to draw the tooltip content. */
    customTooltip?: CustomComponent<HTMLDivElement, {
        tooltip: DataPoint;
    }> | null;
    /** A custom renderer to draw overlay on top of the embedding view. */
    customOverlay?: CustomComponent<HTMLDivElement, {
        proxy: OverlayProxy;
    }> | null;
    /** A cache for intermediate results. */
    cache?: Cache_2_2 | null;
}

export declare interface EmbeddingViewProps {
    /** The data. */
    data: {
        /** An array of X coordinates, must be a `Float32Array`. */
        x: Float32Array<ArrayBuffer>;
        /** An array of Y coordinates, must be a `Float32Array`. */
        y: Float32Array<ArrayBuffer>;
        /** An array of category indices, must be a `Uint8Array`. */
        category?: Uint8Array<ArrayBuffer> | null;
    };
    /** The colors for the categories.
     *  Category `i` will use the `i`-th color from this list.
     *  If not specified, default colors will be used. */
    categoryColors?: string[] | null;
    /** Labels to display on the embedding view.
     *  Each label must have `x`, `y`, and `text` properties,
     *  and optionally `level` and `priority`. */
    labels?: Label[] | null;
    /** The width of the view. */
    width?: number | null;
    /** The height of the view. */
    height?: number | null;
    /** The pixel ratio of the view. */
    pixelRatio?: number | null;
    /** Configure the theme of the view. */
    theme?: ThemeConfig | null;
    /** Configure the embedding view. */
    config?: EmbeddingViewConfig | null;
    /** The viewport state.
     *  You may use this to share viewport state across multiple views.
     *  If undefined or set to `null`, the view will use a default viewport state.
     *  To listen to viewport state change, use `onViewportState`. */
    viewportState?: ViewportState | null;
    /** The current tooltip.
     *  The tooltip is an object with the following fields: `x`, `y`, `category`, `text`, `identifier`.
     *  To listen for a tooltip change, use `onTooltip`. */
    tooltip?: DataPoint | null;
    /** The current single or multiple point selection.
     *  Selection is triggered by clicking on the points (shift/cmd+click will toggle points).
     *  The selection is an array of objects with the following fields: `x`, `y`, `category`, `text`, `identifier`.
     *  To listen to selection change, use `onSelection`. */
    selection?: DataPoint[] | null;
    /** A rectangle or a polygon (list of points) that represents the range selection.
     *  If the value is a list of points, it is interpreted as a lasso selection
     *  with a closed polygon with the list of points as vertices. */
    rangeSelection?: Rectangle | null;
    /** A callback for when `viewportState` changes. */
    onViewportState?: ((value: ViewportState) => void) | null;
    /** A callback for when `tooltip` changes. */
    onTooltip?: ((value: DataPoint | null) => void) | null;
    /** A callback for when `selection` changes. */
    onSelection?: ((value: DataPoint[] | null) => void) | null;
    /** A callback for when `rangeSelection` changes. */
    onRangeSelection?: ((value: Rectangle | Point[] | null) => void) | null;
    /** An async function that returns a data point near the given (x, y) location.
     *  The `unitDistance` parameter is the distance of a single pixel in data domain.
     *  You can use this to determine the distance threshold for selecting a point. */
    querySelection?: ((x: number, y: number, unitDistance: number) => Promise<DataPoint | null>) | null;
    /** An async function that returns labels for a list of clusters.
     *  Each cluster is given as a list of rectangles that approximately cover the region. */
    queryClusterLabels?: ((clusters: Rectangle[][]) => Promise<(string | null)[]>) | null;
    /** A custom renderer to draw the tooltip content. */
    customTooltip?: CustomComponent<HTMLDivElement, {
        tooltip: DataPoint;
    }> | null;
    /** A custom renderer to draw overlay on top of the embedding view. */
    customOverlay?: CustomComponent<HTMLDivElement, {
        proxy: OverlayProxy;
    }> | null;
    /** A cache for intermediate results. */
    cache?: Cache_2_2 | null;
}

export declare interface EmbeddingViewTheme {
    /** The font family for texts. */
    fontFamily: string;
    /** Color for cluster labels. */
    clusterLabelColor: string;
    /** Color for cluster labels' outline. */
    clusterLabelOutlineColor: string;
    /** Opacity for cluster labels. */
    clusterLabelOpacity: number;
    /** Whether to show the status bar at the bottom. */
    statusBar: boolean;
    /** Color for status bar text. */
    statusBarTextColor: string;
    /** Color for status bar background. */
    statusBarBackgroundColor: string;
    /** Branding link. */
    brandingLink: {
        text: string;
        href: string;
    } | null;
}

/**
 * Find clusters from a density map
 * @param density_map the density map, a `Float32Array` with `width * height` elements
 * @param width the width of the density map
 * @param height the height of the density map
 * @param options algorithm options
 * @returns
 */
export declare function findClusters(
densityMap: Float32Array,
width: number,
height: number,
options?: Partial<FindClustersOptions>,
): Promise<Cluster[]>;

/** Options of the find clusters function */
export declare interface FindClustersOptions {
    /** The threshold for unioning two clusters */
    unionThreshold: number;
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

export declare interface KNN {
    queryByIndex(index: number, k: number): KNNQueryResult;
    queryByVector(data: Float32Array, k: number): KNNQueryResult;
    destroy(): void;
}

/** KNN options */
export declare interface KNNOptions {
    /** The distance metric */
    metric?: "euclidean" | "cosine";

    /** The nearest neighbor method. By default we use HNSW with its default parameters. */
    method?: "hnsw" | "nndescent" | "vptree";
}

export declare interface KNNQueryResult {
    indices: Int32Array;
    distances: Float32Array;
}

export declare interface Label {
    /** X coordinate. */
    x: number;
    /** Y coordinate. */
    y: number;
    /** Label text, use "\n" for a new line. */
    text: string;
    /** Label level. The label will be shown around 2^level zoom factor. */
    level?: number | null;
    /** Placement priority. */
    priority?: number | null;
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

export declare function maxDensityModeCategories(): number;

declare interface MosaicSpecType {
    type: "mosaic-spec";
    title?: string;
    spec: any;
}

export declare interface OverlayProxy {
    location: (x: number, y: number) => {
        x: number;
        y: number;
    };
    width: number;
    height: number;
}

/** A point with x and y coordinates. */
export declare interface Point {
    x: number;
    y: number;
}

declare interface PredicatesSpec {
    type: "predicates";
    title?: string;
    items?: {
        name: string;
        predicate: string;
    }[];
}

/** A rectangle with min, max coordinate for each dimension.
 * It is required that xMin <= xMax and yMin <= yMax. */
export declare interface Rectangle {
    xMin: number;
    yMin: number;
    xMax: number;
    yMax: number;
}

declare type RowClickCallback = (rowId: string) => void;

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

export declare class Table {
    private component;
    private currentProps;
    constructor(target: HTMLElement, props: TableProps);
    update(props: Partial<TableProps>): void;
    destroy(): void;
}

export declare interface TableProps {
    /** The Mosaic coordinator. If not specified, the default coordinator from Mosaic's `coordinator()` method will be used. */
    coordinator?: Coordinator | null;
    /** The name of the DuckDB table to create a view for. */
    table: string;
    /** The columns of the table to render. These should match the names of the columns in the DuckDB table you wish to render. */
    columns: string[];
    /** The name of the column used to uniquely identify rows. */
    rowKey: string;
    /** Configure columns.
     *
     *  A `ColumnConfigs` is a `Record<string, ColumnConfig>`, where a `ColumnConfig` has the following optional options:
     *  - **width** `number` The width of the column, if not provided, a default width will be chosen by the table.
     *  - **title** `string` The string to render as the title of the column.
     *  - **hidden** `boolean` Whether the column should be hidden from the table.
     *
     *  The properties `width` and `hidden` may be modified by the table via UI interactions, with updates provided through the `onColumnConfigsChange` callback.
     */
    columnConfigs?: ColumnConfigs | null;
    /** A function that will be called whenever the table changes its `columnConfigs`.
     *  You can use this to save configurations through sessions.  */
    onColumnConfigsChange?: ColumnConfigChangeCallback | null;
    /** Whether to show the row number as column. */
    showRowNumber?: boolean | null;
    /** A function that will be called whenever the table changes its `showRowNumber` value.
     *  You can use this to save configurations through sessions. */
    onShowRowNumberChange?: (showRowNumber: boolean) => void;
    /** A Mosaic `Selection` used to filter the table. */
    filter?: Selection_2 | null;
    /** A row's ID to scroll to. When this value is updated, the table will scroll to that row. */
    scrollTo?: any | null;
    /** Light or dark mode. */
    colorScheme?: "light" | "dark" | null;
    /** A theme object, which has the following options:
     *
     *  - **primaryTextColor** `string` The text color of elements such as cells.
     *  - **secondaryTextColor** `string` The text color of elements such as headers.
     *  - **tertiaryTextColor** `string` The text color of elements such as sort buttons.
     *  - **fontFamily** `string` The font family of text in the table.
     *  - **fontSize** `string` The font size of text in the table.
     *  - **primaryBackgroundColor** `string` The background of elements such as headers and even-numbered cells.
     *  - **secondaryBackgroundColor** `string` The background of elements such as odd-numbered cells.
     *  - **hoverBackgroundColor** `string` The background color of hovered elements such as buttons.
     *  - **headerFontFamily** `string` The font family of the header, will fall back to the table's font family.
     *  - **headerFontSize** `string` The font size of the header, will fall back to the table's font size.
     *  - **cellFontFamily** `string` The font family of the cells, will fall back to the table's font family.
     *  - **cellFontSize** `string` The font size of the cells, will fall back to the table's font size.
     *  - **scrollbarBackgroundColor** `string` The background color of the scrollbars.
     *  - **scrollbarPillColor** `string` The background color of the scrollbar pills.
     *  - **scrollbarLabelBackgroundColor** `string` The background color of the vertical scrollbar label.
     *  - **shadow** `string` The shadow of elements such as overlays.
     *  - **outlineColor** `string` The outline of elements such as overlays.
     *  - **dimmedRowColor** `string` The overlay color for dimmed rows when highlighted rows are present in the table.
     *  - **rowScrollToColor** `string` The color of rows will flash when they're scrolled to using the `scrollTo` property of the table.
     *  - **rowHoverColor** `string` The color of rows when they're hovered, enabled through the `showHoveredRow` property of the table.
     *
     *  These values can be css variables if you wish to use css defined custom properties. For example: `{ primaryTextColor: "var(--my-color-variable)" }`.
     *
     *  You can also provide these options as `light` and `dark` properties, which will control the appearance of the table depending on its `colorScheme`. For example:
     *
     *  ```ts
     *  {
     *    light: {
     *      primaryTextColor: "black";
     *    }
     *    dark: {
     *      primaryTextColor: "white";
     *    }
     *  }
     *  ```
     */
    theme?: Theme | null;
    /** The height of each line of text, in pixels. Defaults to `20`. */
    lineHeight?: number | null;
    /** The number of lines of text to show in each row. Defaults to `3`. */
    numLines?: number | null;
    /** You can use this to designate custom renderers for columns. A `CustomCellsConfig` is a `{ [column: string]: CustomCell }`. */
    customCells?: CustomCellsConfig | null;
    /** You can use this to designate additional content for column headers.
     *  Additional header content is rendered above the title of the header, and can
     *  be used to add helpful content such as summaries and visualizations to headers.
     *  A `AdditionalHeaderContentsConfig` is a `{ [column: string]: AdditionalHeaderContent }`. */
    additionalHeaderContents?: AdditionalHeaderContentsConfig | null;
    /** The height of the header, in pixels. Defaults to an auto height based on rendered title. */
    headerHeight?: number | null;
    /** A handler for rows being clicked, which can be used to coordinate with other views. */
    onRowClick?: RowClickCallback | null;
    /** When provided, these all other rows will be dimmed in the table. */
    highlightedRows?: any[] | null;
    /** Whether to highlight the hovered row. */
    highlightHoveredRow?: boolean | null;
}

declare interface TableSpec {
    type: "table";
    title: string;
    columns: string[];
}

declare type Theme = ThemeConfig_2 & {
    dark?: ThemeConfig_2;
    light?: ThemeConfig_2;
};

declare type ThemeConfig = Partial<EmbeddingViewTheme> & {
    /** Overrides for light mode. */
    dark?: Partial<EmbeddingViewTheme>;
    /** Overrides for dark mode. */
    light?: Partial<EmbeddingViewTheme>;
};

declare interface ThemeConfig_2 {
    primaryTextColor?: string;
    secondaryTextColor?: string;
    tertiaryTextColor?: string;
    fontFamily?: string;
    fontSize?: string;
    primaryBackgroundColor?: string;
    secondaryBackgroundColor?: string;
    tertiaryBackgroundColor?: string;
    hoverBackgroundColor?: string;
    headerFontFamily?: string;
    headerFontSize?: string;
    cellFontFamily?: string;
    cellFontSize?: string;
    scrollbarBackgroundColor?: string;
    scrollbarPillColor?: string;
    scrollbarLabelBackgroundColor?: string;
    shadow?: string;
    outlineColor?: string;
    dimmedRowColor?: string;
    rowScrollToColor?: string;
    rowHoverColor?: string;
}

export declare interface UMAP {
    /** The current epoch number */
    get epoch(): number;

    /** The input dimension */
    get inputDim(): number;

    /** The output dimension */
    get outputDim(): number;

    /**
     * Get the current embedding.
     * The resulting Float32Array points to WASM internal memory.
     * If you need to use the data outside this library or after further
     * interaction with this library, make sure to create a copy
     * of the array, as the underlying memory may change.
     */
    get embedding(): Float32Array;

    /**
     * Run the UMAP algorithm until reaching `epochLimit` epochs,
     * or to completion if `epochLimit` is not specified.
     * @param epochLimit the epoch number to run to
     */
    run(epochLimit?: number): void;

    /** Destroy the instance and release resources */
    destroy(): void;
}

/** UMAP options */
export declare interface UMAPOptions {
    /** The input distance metric */
    metric?: "euclidean" | "cosine";

    /** The nearest neighbor method. By default we use HNSW with its default parameters. */
    knnMethod?: "hnsw" | "nndescent" | "vptree";

    /** The initialization method. By default we use spectral initialization. */
    initializeMethod?: "spectral" | "random" | "none";

    localConnectivity?: number;
    bandwidth?: number;
    mixRatio?: number;
    spread?: number;
    minDist?: number;
    a?: number;
    b?: number;
    repulsionStrength?: number;
    nEpochs?: number;
    learningRate?: number;
    negativeSampleRate?: number;
    nNeighbors?: number;
    /** The random seed. */
    seed?: number;
}

/** A state describing the viewport's pan and zoom state.
 * The screen coordinate of a point is calculated as follows:
 * px = ((x - viewport.x) * viewport.scale + 1) / 2 * width
 * py = ((y - viewport.y) * viewport.scale + 1) / 2 * height
 */
export declare interface ViewportState {
    /** The x coordinate of the center of the viewport in data units. */
    x: number;
    /** The y coordinate of the center of the viewport in data units. */
    y: number;
    /** The scale of the viewport. This scales data units to [-1, 1]. */
    scale: number;
}

export { }
