"use strict"

/**
 * Creates an object with a specified property. If the provided value is an
 * object and has the property, the property's value is taken from the object.
 * Otherwise, the provided value itself is used as the property's value.
 *
 * @param {string} propertyName - The name of the property to set on the new
 *                                object.
 * @param {*} valueOrObject - The value to set, or an object from which to
 *                            extract the property value.
 * @returns {Object} A new object with a single property. The property's value
 *                  is either the value of the same property in valueOrObject
 *                  (if valueOrObject is an object and has the property), or
 *                  valueOrObject itself.
 * @example
 * const ensureName = objectAlways('name');
 * const objectWithName = ensureName('Alice'); // { name: 'Alice' }
 * const anotherObject = ensureName({ name: 'Bob', age: 30 }); // { name: 'Bob' }
 * const yetAnotherObject = ensureName({ age: 30 }); // { name: { age: 30 } }
 */

export const objectAlways = propertyName => valueOrObject =>
  new Object({
    [propertyName]:
      typeof valueOrObject == "object" &&
      valueOrObject.hasOwnProperty(propertyName)
        ? valueOrObject[propertyName]
        : valueOrObject,
  })

export default objectAlways
