"use strict"

/**
 * Determines if a given array is "meaningless" based on a provided filter
 * function. A "meaningless" array is defined as one where none of its elements
 * pass the meaningfulness test defined by the filter function.
 *
 * @param {*} value - The value to be checked. This function checks if this
 *                    value is an array and applies the filter function to
 *                    its elements.
 * @param {Function} filterMeaningful - A function that tests each element of
 *                                      the array for meaningfulness. It should
 *                                      return `true` for meaningful values and
 *                                      `false` for meaningless ones.
 * @returns {boolean} Returns `true` if `value` is an array and all its
 *                    elements are considered meaningless by the
 *                    `filterMeaningful` function.
 *                    Returns `false` if `value` is not an array or if
 *                    any element in the array is meaningful.
 * @example
 * const isNonZeroNumber = n => typeof n === 'number' && n !== 0;
 *
 * valueIsArrayAndMeaningless([0, 0, 0], isNonZeroNumber); // true
 * valueIsArrayAndMeaningless([1, 0, 2], isNonZeroNumber); // false
 * valueIsArrayAndMeaningless("not an array", isNonZeroNumber); // false
 * valueIsArrayAndMeaningless([], isNonZeroNumber); // true
 */
export const valueIsArrayAndMeaningless = (value, filterMeaningful) =>
  Array.isArray(value) && !value.some(filterMeaningful)

export default valueIsArrayAndMeaningless
