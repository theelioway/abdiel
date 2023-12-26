import jsonMerge from "./json-merge.js"
import valueIsMeaningful from "./value-is-meaningful.js"

export const objectDotNotated = (path, value) =>
  path
    .split(".")
    .filter(valueIsMeaningful)
    .reverse()
    .reduce((o, i) => new Object({ [i]: o }), value)

export const objectDotNotatedGetter = (object, path) =>
  path
    .split(".")
    .filter(valueIsMeaningful)
    .reduce((o, i) => o[i], object)

export const objectDotNotatedSetter = (object, path, value) =>
  jsonMerge(object, objectDotNotated(path, value))

export default objectDotNotated
