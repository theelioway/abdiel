"use strict"
import jsonMerge from "./json-merge.js"

/** Converts the given "dot-notated" potentiallyDotNotatedPath and value to an object
 * with the value at its potentiallyDotNotatedPath.
 * @usage
 * >> objectDotNotated("a.b", "hello")
 * // outputs { a: { b: "hello" } }
 */
export const objectDotNotated = (potentiallyDotNotatedPath, value) =>
  potentiallyDotNotatedPath
    .split(".")
    .reverse() // to accumulate: value => { b: value } => { a: { b: value } }
    .reduce((acc, key) => new Object({ [key]: acc }), value)

/** Returns the value located in the given "dot-notated" potentiallyDotNotatedPath of a given object.
 * @usage
 * >> let object =  { a: { b: "hello" } }
 * >> objectDotNotatedGet(object, "a.b")
 * // outputs "hello"
 */
export const objectDotNotatedGet = (object, potentiallyDotNotatedPath) =>
  potentiallyDotNotatedPath.split(".").reduce((acc, key) => acc[key], object)

/** Returns
 * @usage
 * >> let object = { a: { b: 1, c: 2 }, d: { e: 3, f: 4 }, g: { h: 5} }
 * >> objectDotNotatedClip(object, "a.c")
 * // outputs { a: { c: 2 } }
 */
export const objectDotNotatedClip = (object, potentiallyDotNotatedPath) =>
  objectDotNotated(potentiallyDotNotatedPath, objectDotNotatedGet(object, potentiallyDotNotatedPath))

/** Sets the given value located in the given "dot-notated" potentiallyDotNotatedPath of a given object.
 * @usage
 * >> let object =  { a: { b: "hello" } }
 * >> objectDotNotatedGet(object, "a.b", "goodbye")
 * // outputs { a: { b: "goodbye" }}
 */
export const objectDotNotatedSet = (object, potentiallyDotNotatedPath, value) =>
  jsonMerge(object, objectDotNotated(potentiallyDotNotatedPath, value))

/** Cherry picks an object with "dot-notated"  paths.
 * @usage
 * >> let object = { a: { b: 1, c: 2 }, d: { e: 3, f: 4 }, g: { h: 5} }
 * >> objectDotNotatedPick(object, ["a.c", "d.e", "g"])
 * // outputs { a: { c: 2 }, d: { e: 3}, g: { h: 5 } }
 */
export const objectDotNotatedPick = (object, potentiallyDotNotatedPaths) =>
potentiallyDotNotatedPaths.reduce(
    (acc, potentiallyDotNotatedPath) => jsonMerge(acc, objectDotNotatedClip(object, potentiallyDotNotatedPath)),
    {},
  )

export default objectDotNotated
