"use strict"
import jsonMerge from "./json-merge.js"

/** Converts the given "dot-notated" path and value to an object
 * with the value at its path.
 * @usage
 * >> objectDotNotated("a.b", "hello")
 * // outputs { a: { b: "hello" } }
 */
export const objectDotNotated = (path, value) =>
  path
    .split(".")
    .reverse() // to accumulate: value => { b: value } => { a: { b: value } }
    .reduce((acc, key) => new Object({ [key]: acc }), value)

/** Returns the value located in the given "dot-notated" path of a given object.
 * @usage
 * >> let object =  { a: { b: "hello" } }
 * >> objectDotNotatedGet(object, "a.b")
 * // outputs "hello"
 */
export const objectDotNotatedGet = (object, path) =>
  path.split(".").reduce((acc, key) => acc[key], object)

/** Returns
 * @usage
 * >> let object = { a: { b: 1, c: 2 }, d: { e: 3, f: 4 }, g: { h: 5} }
 * >> objectDotNotatedClip(object, "a.c")
 * // outputs { a: { c: 2 } }
 */
export const objectDotNotatedClip = (object, path) =>
  objectDotNotated(path, objectDotNotatedGet(object, path))

/** Sets the given value located in the given "dot-notated" path of a given object.
 * @usage
 * >> let object =  { a: { b: "hello" } }
 * >> objectDotNotatedGet(object, "a.b", "goodbye")
 * // outputs { a: { b: "goodbye" }}
 */
export const objectDotNotatedSet = (object, path, value) =>
  jsonMerge(object, objectDotNotated(path, value))

/** Cherry picks an object with "dot-notated"  paths.
 * @usage
 * >> let object = { a: { b: 1, c: 2 }, d: { e: 3, f: 4 }, g: { h: 5} }
 * >> objectDotNotatedPick(object, ["a.c", "d.e", "g"])
 * // outputs { a: { c: 2 }, d: { e: 3}, g: { h: 5 } }
 */
export const objectDotNotatedPick = (object, paths) =>
  paths.reduce(
    (acc, path) => jsonMerge(acc, objectDotNotatedClip(object, path)),
    {},
  )

export default objectDotNotated
