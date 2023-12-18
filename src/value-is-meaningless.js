"use strict"

/**
 * Checks if the given value is considered meaningless, specifically if it is
 * `undefined`, `null`, `NaN`, or an empty string.
 *
 * @param {*} value - The value to be checked.
 * @returns {boolean} Returns `true` if the value is either `undefined`, `null`, `NaN`, or an empty string (`""`); otherwise, returns `false`.
 * @example
 * valueIsMeaningless(undefined); // true
 * valueIsMeaningless(null);      // true
 * valueIsMeaningless(NaN);       // true
 * valueIsMeaningless("");        // true
 * valueIsMeaningless(0);         // false
 * valueIsMeaningless("text");    // false
 * valueIsMeaningless({});        // false
 * valueIsMeaningless([]);        // false
 */
export const valueIsMeaningless = value =>
  value === undefined || value === null || Number.isNaN(value) || value === ""

export default valueIsMeaningless
