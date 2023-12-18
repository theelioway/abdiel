"use strict"

/**
 * Checks if the given value is falsy or its string representation is
 * lengthless (empty or whitespace only).
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is falsy (e.g., null,
 *                    undefined, 0, false) or if the string representation
 *                    of the value is empty or consists only of whitespace.
 * @example
 * valueToStringIsLengthless(null);        // true
 * valueToStringIsLengthless('');          // true
 * valueToStringIsLengthless('   ');       // true
 * valueToStringIsLengthless(0);           // true
 * valueToStringIsLengthless('text');      // false
 * valueToStringIsLengthless(123);         // false
 * valueToStringIsLengthless({});          // false
 * valueToStringIsLengthless([]);          // false
 */
export const valueToStringIsLengthless = value =>
  !value || !value.toString().trim()

export default valueToStringIsLengthless
