"use strict"

/**
 * Creates a union of two arrays, returning a new array that contains all
 * unique elements from both arrays.
 *
 * @param {Array} l1 - The first array to be included in the union.
 * @param {Array} l2 - The second array to be included in the union.
 * @returns {Array} A new array containing all unique elements from both `l1`
 *                  and `l2`.
 * @example
 * arrayUnion([1, 2, 3], [2, 3, 4]); // Returns [1, 2, 3, 4]
 * arrayUnion(['a', 'b'], ['b', 'c']); // Returns ['a', 'b', 'c']
 * arrayUnion([], [1, 2]); // Returns [1, 2]
 * arrayUnion(['x'], []); // Returns ['x']
 */
export const arrayUnion = (l1, l2) => {
  let s1 = new Set(l1)
  let s2 = new Set(l2)
  let unified = new Set([...s1, ...s2])
  return [...unified]
}

export default arrayUnion
