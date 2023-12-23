"use strict"

/**
 * Creates a comparator function for sorting an array of objects based on a specified propName.
 *
 * @param {string} propName - The property name to sort by.
 * @returns {Function} A comparator function that can be used in Array.prototype.sort() for sorting objects based on the specified property.
 * @example
 * const sortByAge = objectArraySortByProperty('age');
 * const people = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }];
 * people.sort(sortByAge); // Sorts the array by the 'age' property
 */
export const objectArraySortByProperty = propName => (object1, object2) =>
  object1[propName] < object2[propName]
    ? -1
    : object1[propName] > object2[propName]
      ? 1
      : 0

export default objectArraySortByProperty
