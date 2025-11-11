// Copyright (c) 2025 Apple Inc. Licensed under MIT License.
/** Debounce the given function. */
export function debounce(func, time = 1000) {
    let timeout = undefined;
    let perform = (...args) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            func(...args);
        }, time);
    };
    return perform;
}
//# sourceMappingURL=debounce.js.map