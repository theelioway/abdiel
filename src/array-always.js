"use strict"

/**
 * Ensures that the given value is returned as an array. If the value is
 * already an array, it is returned as-is. Otherwise, the value is wrapped
 * in an array.
 *
 * @tutorial
 * Alternative version:
 * >> const arrayAnyway = (valueOrArray) =>
 * >>     Array.isArray(valueOrArray) ? valueOrArray : [valueOrArray];
 * @todo Is the current version better?
 *
 * @param {*} valueOrArray - The value to be converted to an array or
 *                           returned as an array if it already is one.
 * @returns {Array} The input value as an array. If the input is already an
 *                  array, it is returned without modification; if the input
 *                  is not an array, it is wrapped in an array.
 * @example
 * arrayAlways(5);        // Returns [5]
 * arrayAlways([1, 2, 3]); // Returns [1, 2, 3]
 * arrayAlways('text');   // Returns ['text']
 * arrayAlways(null);     // Returns [null]
 * arrayAlways(undefined);// Returns [undefined]
 * arrayAlways({});       // Returns [{}]
 */
export const arrayAlways = valueOrArray => [valueOrArray].flat()

export default arrayAlways
