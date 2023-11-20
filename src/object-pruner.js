"use strict"

/**
 * Returns a new object with properties that meet the criteria defined in the filterEntries function.
 *
 * @param {Function} filterEntries - A function that determines whether an object entry (a [key, value] pair) should be included in the new object.
 *                                   It should return `true` to include the entry, or `false` to exclude it.
 * @param {Object} object - The original object from which properties are to be pruned.
 * @returns {Object} A new object containing only the entries from the original object that passed the filterEntries function's test.
 * @example
 * const person = { name: 'Alice', age: 30, job: 'Engineer' };
 * const ageFilter = ([key, value]) => key === 'age';
 * const agePruner = objectPruner(ageFilter);
 * const prunedObject = agePruner(person); // { age: 30 }
 */

export const objectPruner = filterEntries => object =>
  Object.fromEntries(Object.entries(object).filter(filterEntries))

export default objectPruner
