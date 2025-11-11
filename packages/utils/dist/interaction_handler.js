// Copyright (c) 2025 Apple Inc. Licensed under MIT License.
/**
 * Invoke the method on target if defined, and if all args are defined.
 */
function tryInvoke(target, method, ...args) {
    try {
        if (args.every((x) => x !== undefined)) {
            const fn = target[method];
            if (typeof fn === "function") {
                return fn(...args);
            }
        }
    }
    catch (e) {
        console.error(e);
    }
}
const DRAG_THRESHOLD = 2;
function valueForEvent(e) {
    return {
        clientX: e.clientX,
        clientY: e.clientY,
        pageX: e.pageX,
        pageY: e.pageY,
        modifiers: { shift: e.shiftKey, ctrl: e.ctrlKey, alt: e.altKey, meta: e.metaKey },
    };
}
export function interactionHandler(element, props) {
    let handlers = props;
    let dragHandler = undefined;
    let isDown = false;
    let isHovering = false;
    const onMouseDown = (e1) => {
        let v1 = valueForEvent(e1);
        e1.preventDefault();
        e1.stopPropagation();
        blurActiveElement();
        isDown = true;
        if (dragHandler) {
            tryInvoke(dragHandler, "up");
            dragHandler = undefined;
        }
        let onMove = (e2) => {
            let v2 = valueForEvent(e2);
            if (handlers.drag && !dragHandler) {
                if (Math.hypot(v1.clientX - v2.clientX, v1.clientY - v2.clientY) > DRAG_THRESHOLD) {
                    dragHandler = tryInvoke(handlers, "drag", v1);
                    if (dragHandler) {
                        tryInvoke(dragHandler, "move", v2);
                    }
                }
            }
            else if (dragHandler) {
                tryInvoke(dragHandler, "move", v2);
            }
        };
        let onUp = (e2) => {
            let v2 = valueForEvent(e2);
            isDown = false;
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
            if (dragHandler) {
                tryInvoke(dragHandler, "up", e2);
                dragHandler = undefined;
            }
            else {
                if (handlers.click) {
                    tryInvoke(handlers, "click", v2);
                }
            }
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("mouseup", onUp, { passive: true });
    };
    const onMouseMove = (e) => {
        if (!isDown) {
            // If no entry, this means the pointer is hovering.
            if (handlers.hover) {
                tryInvoke(handlers, "hover", valueForEvent(e));
                isHovering = true;
            }
            return;
        }
    };
    const onMouseLeave = (e) => {
        if (isHovering && handlers.hover) {
            tryInvoke(handlers, "hover", null);
            isHovering = false;
        }
    };
    element.addEventListener("mousedown", onMouseDown, { passive: false });
    element.addEventListener("mousemove", onMouseMove, { passive: true });
    element.addEventListener("mouseleave", onMouseLeave, { passive: true });
    return {
        update: (props) => {
            handlers = props;
        },
        destroy: () => {
            element.removeEventListener("mousedown", onMouseDown);
            element.removeEventListener("mousemove", onMouseMove);
            element.removeEventListener("mouseleave", onMouseLeave);
        },
    };
}
function blurActiveElement() {
    try {
        if (document.activeElement && document.activeElement !== document.body) {
            document.activeElement.blur?.();
        }
    }
    catch (_) { }
}
//# sourceMappingURL=interaction_handler.js.map