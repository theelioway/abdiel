"use strict"

const notUndefined = value =>
  value === undefined || value === null ? {} : value

/**
 * Creates a deep clone of an object by serializing it to JSON and then parsing it.
 *
 * @param {Object} object - The object to be cloned.
 * @returns {Object} Returns a deep copy of the input object.
 * @example
 * const originalObject = { address: { city: 'New York' } };
 * const clonedObject = jsonClone(originalObject);
 * originalObject.address.city = "London";
 * console.assert(clonedObject.address.city === "New York")
 */
export const jsonClone = object =>
  JSON.parse(JSON.stringify(notUndefined(object)))

export default jsonClone
