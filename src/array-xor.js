"use strict"
import arrayUnion from "./array-union.js"

/**
 * Returns what is left in both lists because the function makes same values
 * in each list cancel each other out.
 * @tutorial Retains an item in the list if it is not in the other list.
 * @example
 * >> xor([], []) === []
 * >> xor([false], []) === [false]
 * >> xor([], [false]) === [false]
 * >> xor([false], [false]) === []
 * >> xor([true], []) === [true]
 * >> xor([], [true]) === [true]
 * >> xor([true], [true]) === []
 * >> xor([true, false], []) === [true, false]
 * >> xor([false], [true]) === [false, true]
 * >> xor([true, false], [true]) === [false]
 * >> xor([true, false], [false]) === [true]
 * >> xor([true, false], [false, true]) === []
 */
export const arrayXor = (array1, array2) => {
  let set1 = new Set(array1)
  let set2 = new Set(array2)
  return arrayUnion(
    [...set1].filter(x => !set2.has(x)),
    [...set2].filter(x => !set1.has(x)),
  )
}
export default arrayXor
