"use strict"

/**
 * Computes the difference between two arrays, returning a new array containing elements that are in the first array but not in the second.
 *
 * @param {Array} array1 - The first array, from which elements are selected.
 * @param {Array} array2 - The second array, whose elements are to be excluded from the first.
 * @returns {Array} A new array containing the elements that are in `array1` but not in `array2`.
 * @example
 * arrayDifference([1, 2, 3], [2, 3, 4]); // Returns [1]
 * arrayDifference(['a', 'b', 'c'], ['b']); // Returns ['a', 'c']
 * arrayDifference([1, 2, 3], []); // Returns [1, 2, 3]
 * arrayDifference([], [1, 2]); // Returns []
 */
export const arrayDifference = (array1, array2) => {
  let set1 = new Set(array1)
  let set2 = new Set(array2)
  let differing = new Set([...set1].filter(x => !set2.has(x)))
  return [...differing]
}

export default arrayDifference
