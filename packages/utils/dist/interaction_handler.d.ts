export interface CursorValue {
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    modifiers: {
        shift: boolean;
        ctrl: boolean;
        alt: boolean;
        meta: boolean;
    };
}
export interface DragHandler {
    move?: (value: CursorValue) => void;
    up?: (value: CursorValue) => void;
    cancel?: () => void;
}
interface InteractionHandlerProps {
    /** If defined, handles click gestures. */
    click?: (value: CursorValue) => void;
    /**
     * If defined, handles drag gestures with a single pointer.
     * Reports the movement of the tracked pointer.
     */
    drag?: (value: CursorValue) => DragHandler | undefined;
    /** If defined, tracks hovering cursors. */
    hover?: (value: CursorValue | null) => void;
}
export declare function interactionHandler(element: SVGElement | HTMLElement, props: InteractionHandlerProps): {
    update: (props: InteractionHandlerProps) => void;
    destroy: () => void;
};
export {};
//# sourceMappingURL=interaction_handler.d.ts.map