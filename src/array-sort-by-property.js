"use strict"

/**
 * Creates a comparator function for sorting an array of objects based on a specified propertyName.
 *
 * @param {string} propertyName - The property name to sort by.
 * @returns {Function} A comparator function that can be used in Array.prototype.sort() for sorting objects based on the specified property.
 * @example
 * const sortByAge = arraySortByProperty('age');
 * const people = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }];
 * people.sort(sortByAge); // Sorts the array by the 'age' property
 */
export const arraySortByProperty = propertyName => (a, b) =>
  a[propertyName] < b[propertyName]
    ? -1
    : a[propertyName] > b[propertyName]
      ? 1
      : 0

export default arraySortByProperty
