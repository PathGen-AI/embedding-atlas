/**
 * Recursively merges updates into a value immutably.
 *
 * For each key in `updates`:
 * - If `updates[key] === undefined`, the key is removed from the result.
 * - If `updates[key] !== value[key]`, the key is updated.
 * - If both `value[key]` and `updates[key]` are plain objects, the merge happens recursively.
 *
 * Arrays and other non-object values are treated atomically and replaced if they differ.
 * The function never mutates `value` or `updates`. Only new objects are created if a change is needed.
 * If no changes are required, `undefined` is returned.
 *
 * @template T - The type of the original value.
 * @param {T} value - The original value to merge updates into.
 * @param {Partial<T>} updates - The updates to apply.
 * @returns {T | undefined} A new value with updates applied, or `undefined` if no updates were necessary.
 *
 * @example
 * const value = { a: 1, b: { c: 2, d: 3 } };
 * const updates = { b: { c: 4 }, a: undefined };
 * const result = mergeUpdates(value, updates);
 * // result: { b: { c: 4, d: 3 } }
 */
export declare function mergeUpdates<T>(value: T, updates: Partial<T>): T | undefined;
export declare function applyUpdatesIfNeeded<T, R>(value: T, updates: Partial<T>, mode: "merge" | "replace", setter: (value: T) => R): R | undefined;
export declare function applyUpdatesForKeyIfNeeded<T, R>(records: Record<string, T>, key: string, update: Partial<T>, mode: "merge" | "replace", setter: (value: Record<string, T>) => R): R | undefined;
//# sourceMappingURL=merge_updates.d.ts.map