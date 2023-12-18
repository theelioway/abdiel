"use strict"

/**
 * Converts a string to kebab-case by replacing spaces with hyphens and converting to lowercase.
 *
 * @param {string} string - The input string to be converted.
 * @returns {string} Returns the string in kebab-case.
 * @example
 * const inputString = "Hello World Example";
 * consoke.assert(stringCaseKebab(inputString) === "hello-world-example");
 */
export const stringCaseKebab = string =>
  string
    .toString()
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")

export default stringCaseKebab
