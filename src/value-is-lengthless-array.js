"use strict"

/**
 * Checks if a given value is an array that is empty.
 *
 * @param {*} value - The value to be checked.
 * @returns {boolean} Returns `true` if the value is an array and it is empty (has no elements).
 *                    Returns `false` for non-array values or arrays that contain one or more elements.
 * @example
 * valueIsLengthlessArray([]);              // true
 * valueIsLengthlessArray([1, 2, 3]);       // false
 * valueIsLengthlessArray("[]");            // false
 * valueIsLengthlessArray("");              // false
 * valueIsLengthlessArray(null);            // false
 * valueIsLengthlessArray(undefined);       // false
 * valueIsLengthlessArray({ length: 0 });   // false
 */
export const valueIsLengthlessArray = value =>
  Array.isArray(value) && value.length === 0

export default valueIsLengthlessArray
