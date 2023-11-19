"use strict"

/**
 * Computes the difference between two arrays, returning a new array containing elements that are in the first array but not in the second.
 *
 * @param {Array} l1 - The first array, from which elements are selected.
 * @param {Array} l2 - The second array, whose elements are to be excluded from the first.
 * @returns {Array} A new array containing the elements that are in `l1` but not in `l2`.
 * @example
 * arrayDifference([1, 2, 3], [2, 3, 4]); // Returns [1]
 * arrayDifference(['a', 'b', 'c'], ['b']); // Returns ['a', 'c']
 * arrayDifference([1, 2, 3], []); // Returns [1, 2, 3]
 * arrayDifference([], [1, 2]); // Returns []
 */
export const arrayDifference = (l1, l2) => {
  let s1 = new Set(l1)
  let s2 = new Set(l2)
  let differing = new Set([...s1].filter(x => !s2.has(x)))
  return [...differing]
}

export default arrayDifference
