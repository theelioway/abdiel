"use strict"
/**
 * Checks if a given value is a string that is empty or contains only
 * whitespace characters.
 *
 * @param {*} value - The value to be checked.
 * @returns {boolean} Returns `true` if the value is a string and is either empty or consists solely of whitespace characters.
 *                    Returns `false` for non-string values or strings that contain non-whitespace characters.
 * @example
 * valueIsLengthlessString("");             // true
 * valueIsLengthlessString("   ");          // true
 * valueIsLengthlessString("text");         // false
 * valueIsLengthlessString(123);            // false
 * valueIsLengthlessString(null);           // false
 * valueIsLengthlessString(undefined);      // false
 * valueIsLengthlessString({});             // false
 * valueIsLengthlessString(["", " "]);      // false
 */
export const valueIsLengthlessString = value =>
  typeof value === "string" && value.trim() === ""

export default valueIsLengthlessString
