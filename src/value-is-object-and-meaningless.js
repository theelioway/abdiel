"use strict"

/**
 * Determines if a given object is "meaningless" based on a provided filter
 * function. A "meaningless" object is defined as one where none of its
 * property values pass the meaningfulness test defined by the filter
 * function.
 *
 * @param {*} value - The value to be checked. This function checks if this
 *                    value is an object and applies the filter function to
 *                    its property values.
 * @param {Function} filterMeaningful - A function that tests each property
 *                                      value of the object for meaningfulness.
 *                                      It should return `true` for meaningful
 *                                      values and `false` for meaningless
 *                                      ones.
 * @returns {boolean} Returns `true` if `value` is an object and all its
 *                    property values are considered meaningless by the
 *                    `filterMeaningful` function.
 *                    Returns `false` if `value` is not an object or if any
 *                    property value in the object is meaningful.
 * @example
 * const isNonEmptyString = s => typeof s === 'string' && s.trim() !== '';
 *
 * isObjectWithOnlyEmptyStrings({ a: '', b: ' ' }, isNonEmptyString); // true
 * isObjectWithOnlyEmptyStrings({ a: 'hello', b: '' }, isNonEmptyString); // false
 * isObjectWithOnlyEmptyStrings("not an object", isNonEmptyString); // false
 * isObjectWithOnlyEmptyStrings({}, isNonEmptyString); // true
 */
export const valueIsObjectAndMeaningless = (value, filterMeaningful) =>
  typeof value === "object" && !Object.values(value).some(filterMeaningful)

export default valueIsObjectAndMeaningless
