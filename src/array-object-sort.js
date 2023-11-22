"use strict"

/**
 * Creates a comparator function for sorting an array of objects based on a specified property.
 *
 * @param {string} property - The property name to sort by.
 * @returns {Function} A comparator function that can be used in Array.prototype.sort() for sorting objects based on the specified property.
 * @example
 * const sortByAge = arrayObjectSort('age');
 * const people = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }];
 * people.sort(sortByAge); // Sorts the array by the 'age' property
 */
export const arrayObjectSort = property => (a, b) =>
  a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0

export default arrayObjectSort
