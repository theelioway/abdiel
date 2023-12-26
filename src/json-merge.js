import { arrayAlways } from "./array-always.js"
import { jsonClone } from "./json-clone.js"
import { valueIsMeaningful } from "./value-is-meaningful.js"

export const jsonMerge = (target, source) => {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (Array.isArray(source[key])) {
        target[key] = [...arrayAlways(target[key]), ...source[key]]
          .filter(valueIsMeaningful)
          .map(jsonClone)
      } else if (typeof source[key] === "object" && source[key]) {
        if (typeof target[key] === "object") {
          target[key] = jsonMerge(target[key], source[key])
        } else {
          target[key] = jsonClone(source[key])
        }
      } else {
        target[key] = valueIsMeaningful(source[key]) ? source[key] : target[key]
      }
    }
  }
  return target
}

export default jsonMerge
