"use strict"

/**
 * Checks if a given value is a valid Date object.
 *
 * @param {*} value - The value to be checked.
 * @returns {boolean} Returns `true` if the value is an instance of Date
 *                    and represents a valid date.
 *                    Returns `false` if the value is not a Date instance
 *                    or represents an invalid date.
 * @example
 * valueIsDate(new Date());              // true
 * valueIsDate(new Date('2021-01-01'));  // true
 * valueIsDate(new Date('invalid'));     // false
 * valueIsDate('2021-01-01');            // false
 * valueIsDate(1234567890);              // false
 * valueIsDate({});                      // false
 * valueIsDate(null);                    // false
 */
export const valueIsDate = value => value instanceof Date && !isNaN(value)

export default valueIsDate
