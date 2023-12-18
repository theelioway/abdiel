"use strict"

/**
 * Sorts the properties of an object alphabetically by property name.
 *
 * @credit https://gist.github.com/farskid/b1c128639cd42e44734282e2d9e3beb2
 *
 * @param {Object} object - The input object whose properties will be sorted.
 * @returns {Object} A new object with properties sorted alphabetically by name.
 *
 * @example
 * const inputObject = {
 *   b: 2,
 *   a: 1,
 *   c: 3
 * };
 *
 * const sortedObject = objectPropertiesSort(inputObject);
 * // Example output: { a: 1, b: 2, c: 3 }
 */
export const objectPropertiesSort = object =>
  Object.keys(object)
    .sort(new Intl.Collator("en", { caseFirst: "lower" }).compare)
    .reduce((result, propName) => {
      result[propName] = object[propName]
      return result
    }, {})

export default objectPropertiesSort
