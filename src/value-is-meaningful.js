"use strict"
import valueIsMeaningless from "./value-is-meaningless.js"
import valueIsLengthlessArray from "./value-is-lengthless-array.js"
import valueIsLengthlessString from "./value-is-lengthless-string.js"
import valueToStringIsLengthless from "./value-tostring-is-lengthless.js"
import valueIsMeaningfullyFalsy from "./value-is-meaningfully-falsy.js"
import valueIsArrayAndMeaningless from "./value-is-array-and-meaningless.js"
import valueIsObjectAndMeaningless from "./value-is-object-and-meaningless.js"
import valueIsDate from "./value-is-date.js"

/**
 * Checks to see if there is anything meaningful about a value.
 *
 * @param {*} value - The value to be checked.
 * @returns {boolean} Returns `true` if the value has any meaningful data at all.
 *                    Returns `false` even for meaningless objects.
 * @example
 * valueIsMeaningful("text");         // true
 * valueIsMeaningful(0);              // true
 * valueIsMeaningful(false);          // true
 * valueIsMeaningful([0]);            // true
 * valueIsMeaningful({ a:false });    // true
 * valueIsMeaningful(new Date());     // true
 * valueIsMeaningful("");             // false
 * valueIsMeaningful("   ");          // false
 * valueIsMeaningful(null);           // false
 * valueIsMeaningful(undefined);      // false
 * valueIsMeaningful({});             // false
 * valueIsMeaningful(["", " "]);      // false
 */
export function valueIsMeaningful(value) {
  if (valueIsMeaningfullyFalsy(value)) return true
  if (valueIsDate(value)) return true
  if (valueIsMeaningless(value)) return false
  if (valueIsLengthlessArray(value)) return false
  if (valueIsLengthlessString(value)) return false
  if (valueToStringIsLengthless(value)) return false
  const isArrayAndMeaningless = valueIsArrayAndMeaningless(valueIsMeaningful)
  if (isArrayAndMeaningless(value)) return false
  const isObjectAndMeaningless = valueIsObjectAndMeaningless(valueIsMeaningful)
  if (isObjectAndMeaningless(value)) return false
  // If none of the above, the value is considered meaningful.
  return true
}

export default valueIsMeaningful
