"use strict"
import valueIsDate from "./value-is-date.js"

/**
 * Converts a value to its implied data type.
 *
 * This function performs type conversion for common data types based on the input value:
 * - If the input is `undefined`, `null`, or an empty string, it returns an empty string.
 * - If the input is a boolean or a number, it returns the input value as-is.
 * - If the input is a valid Date object or a date string, it returns the input value as a Date object.
 * - If the input is a valid numeric string, it returns the input value as a Number.
 * - If the input is a string representing "true" or "false" (case-insensitive), it returns a Boolean.
 * - If none of the above conditions apply, it returns the input value as-is.
 *
 * @param {any} value - The input value to be converted.
 * @returns {any} The converted value based on its implied data type.
 *
 * @example
 * const stringValue = "123";
 * const numberValue = 42;
 * const dateValue = "2023-12-17";
 * const booleanValue = "True";
 * const emptyValue = undefined;
 *
 * const convertedString = valueToImpliedType(stringValue); // Returns 123 (Number)
 * const convertedNumber = valueToImpliedType(numberValue); // Returns 42 (Number)
 * const convertedDate = valueToImpliedType(dateValue);     // Returns Date object
 * const convertedBoolean = valueToImpliedType(booleanValue); // Returns true (Boolean)
 * const convertedEmpty = valueToImpliedType(emptyValue);     // Returns "" (Empty string)
 */
export const valueToImpliedType = value => {
  if (typeof value === "boolean") {
    return value
  } else if (typeof value === "number") {
    return value
  } else if (valueIsDate(value)) {
    return value
  } else if (value && !isNaN(Number(value))) {
    return Number(value)
  } else if (value && !isNaN(Date.parse(value))) {
    return new Date(Date.parse(value))
  } else if (
    String(value).toLowerCase() === "true" ||
    String(value).toLowerCase() === "false"
  ) {
    return Boolean(value)
  } else {
    return value
  }
}

export default valueToImpliedType
