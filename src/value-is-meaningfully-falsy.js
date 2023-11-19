"use strict"

/**
 * Determines if a given value is `0`, `false`, or `Infinity` assuming they
 * are "meaningful falsy" values.
 *
 * @param {*} value - The value to be checked.
 * @returns {boolean} Returns `true` if value is `0`, `false`, or `Infinity`,
 *                    which are considered "meaningful falsy" values.
 *                    Returns `false` for all other values.
 * @example
 * valueIsMeaningfullyFalsy(0);         // true
 * valueIsMeaningfullyFalsy(false);     // true
 * valueIsMeaningfullyFalsy(Infinity);  // true
 * valueIsMeaningfullyFalsy(null);      // false
 * valueIsMeaningfullyFalsy(undefined); // false
 * valueIsMeaningfullyFalsy('');        // false
 * valueIsMeaningfullyFalsy(1);         // false
 */
export const valueIsMeaningfullyFalsy = value =>
  value === 0 || value === false || value === Infinity

export default valueIsMeaningfullyFalsy
