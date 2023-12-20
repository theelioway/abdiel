/** A Javascript Library
 * 
 * @usage  
 * >> import { arrayAlways, stringCaseKebab } from "@elioway/abdiel";
 * >>
 * >> console.assert(arrayAlways("AbdielLibrary") === ["AbdielLibrary"]) 
 * >> console.assert(arrayAlways(["AbdielLibrary"]) === ["AbdielLibrary"]) 
 * >> console.assert(stringCaseKebab("AbdielLibrary") === "abdiel-library") 
*/
export { arrayAlways } from "./array-always.js"
export { arrayDifference } from "./array-difference.js"
export { arraySortByProperty } from "./array-sort-by-property.js"
export { arrayUnion } from "./array-union.js"
export { arrayXor } from "./array-xor.js"
export { dateTimestamp } from "./date-timestamp.js"
export { objectAlways } from "./object-always.js"
export { objectPicker } from "./object-picker.js"
export { objectPruner } from "./object-pruner.js"
export { stringCaseKebab } from "../src/string-case-kebab.js"
export { valueIsDate } from "./value-is-date.js"
export { valueIsArrayAndMeaningless } from "./value-is-array-and-meaningless.js"
export { valueIsLengthlessString } from "./value-is-lengthless-string.js"
export { valueIsLengthlessArray } from "./value-is-lengthless-array.js"
export { valueIsMeaningful } from "./value-is-meaningful.js"
export { valueIsMeaningfullyFalsy } from "./value-is-meaningfully-falsy.js"
export { valueIsMeaningless } from "./value-is-meaningless.js"
export { valueIsObjectAndMeaningless } from "./value-is-object-and-meaningless.js"
export { valueToImpliedType } from "../src/value-to-implied-type.js"
export { valueToStringIsLengthless } from "./value-tostring-is-lengthless.js"
