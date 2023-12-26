/** A Javascript Library
 *
 * @usage
 * >> import { arrayAlways, stringCaseKebab } from "@elioway/abdiel";
 * >>
 * >> console.assert(arrayAlways("AbdielLibrary") === ["AbdielLibrary"])
 * >> console.assert(arrayAlways(["AbdielLibrary"]) === ["AbdielLibrary"])
 * >> console.assert(stringCaseKebab("AbdielLibrary") === "abdiel-library")
 */
export { default as arrayAlways } from "./array-always.js"
export { default as arrayDifference } from "./array-difference.js"
export { default as arrayUnion } from "./array-union.js"
export { default as arrayXor } from "./array-xor.js"
export { default as dateTimestamp } from "./date-timestamp.js"
export { default as jsonClone } from "./json-clone.js"
export { default as jsonMerge } from "./json-merge.js"
export { default as objectAlways } from "./object-always.js"
export { default as objectArraySortByProperty } from "./object-array-sort-by-property.js"
export {
  objectDotNotated,
  objectDotNotatedGetter,
  objectDotNotatedSetter,
} from "./object-dot-notated.js"
export { default as objectPick } from "./object-pick.js"
export { default as objectPrune } from "./object-prune.js"
export { default as objectSortProperties } from "./object-sort-properties.js"
export { default as stringCaseKebab } from "../src/string-case-kebab.js"
export { default as valueIsDate } from "./value-is-date.js"
export { default as valueIsArrayAndMeaningless } from "./value-is-array-and-meaningless.js"
export { default as valueIsLengthlessString } from "./value-is-lengthless-string.js"
export { default as valueIsLengthlessArray } from "./value-is-lengthless-array.js"
export { default as valueIsMeaningful } from "./value-is-meaningful.js"
export { default as valueIsMeaningfullyFalsy } from "./value-is-meaningfully-falsy.js"
export { default as valueIsMeaningless } from "./value-is-meaningless.js"
export { default as valueIsObjectAndMeaningless } from "./value-is-object-and-meaningless.js"
export { default as valueToImpliedType } from "../src/value-to-implied-type.js"
export { default as valueToStringIsLengthless } from "./value-tostring-is-lengthless.js"
