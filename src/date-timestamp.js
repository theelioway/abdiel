"use strict"

/**
 * Converts a Date object to a timestamp string without non-numeric characters.
 *
 * @param {Date} date - The Date object to be converted to a timestamp.
 * @returns {string} A timestamp string containing only numeric characters.
 *
 * @example
 * const currentDate = new Date();
 * const timestamp = dateTimestamp(currentDate);
 * // Example output: "20231217165401234" (for December 17, 2023, 16:54:01.234)
 */
export const dateTimestamp = date => date.toISOString().replace(/\D/g, "")

export default dateTimestamp
