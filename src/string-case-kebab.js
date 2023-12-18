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
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .split(" ")
    .join("-")

export default stringCaseKebab
