"use strict"
import valueIsDate from "./value-is-date.js"

export const valueToImpliedType = value => {
  // `undefined`, etc, implies empty string.
  value = value || ""
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
    value.toString().toLowerCase() === "true" ||
    value.toString().toLowerCase() === "false"
  ) {
    return Boolean(value)
  }
  return value // Return the value as-is if no specific conversion is needed
}

export default valueToImpliedType
