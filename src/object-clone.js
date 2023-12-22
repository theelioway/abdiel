"use strict"

/**
 * Creates a deep clone of an object by serializing it to JSON and then parsing it.
 *
 * @param {Object} object - The object to be cloned.
 * @returns {Object} Returns a deep copy of the input object.
 * @example
 * const originalObject = { address: { city: 'New York' } };
 * const clonedObject = objectClone(originalObject);
 * originalObject.address.city = "London";
 * console.assert(clonedObject.address.city === "New York")
 */
export const objectClone = object => JSON.parse(JSON.stringify(object))

export default objectClone
