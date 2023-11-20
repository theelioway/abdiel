"use strict"

/**
 * Creates a function that extracts specified propertyNames from an object.
 *
 * @param {string[]} propertyNames - An array of property names to be picked from the object.
 * @returns {Function} Returns a function that, when passed an object, returns a new object containing only the specified properties.
 * @example
 * const pickNameAndAge = objectPicker(['name', 'age']);
 * const person = { name: 'Alice', age: 30, job: 'Engineer' };
 * const pickedObject = pickNameAndAge(person); // { name: 'Alice', age: 30 }
 */
export const objectPicker = propertyNames => object =>
  propertyNames.reduce(
    (acc, propertyName) =>
      new Object({
        ...acc,
        [propertyName]: object[propertyName],
      }),
    {},
  )

export default objectPicker
