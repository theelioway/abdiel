"use strict"

/**
 * Creates a union of two arrays, returning a new array that contains all
 * unique elements from both arrays.
 *
 * @param {Array} array1 - The first array to be included in the union.
 * @param {Array} array2 - The second array to be included in the union.
 * @returns {Array} A new array containing all unique elements from both `array1`
 *                  and `array2`.
 * @example
 * arrayUnion([1, 2, 3], [2, 3, 4]); // Returns [1, 2, 3, 4]
 * arrayUnion(['a', 'b'], ['b', 'c']); // Returns ['a', 'b', 'c']
 * arrayUnion([], [1, 2]); // Returns [1, 2]
 * arrayUnion(['x'], []); // Returns ['x']
 */
export const arrayUnion = (array1, array2) => {
  let set1 = new Set(array1)
  let set2 = new Set(array2)
  let unified = new Set([...set1, ...set2])
  return [...unified]
}

export default arrayUnion
