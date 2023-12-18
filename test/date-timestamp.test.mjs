"use strict"
import { should } from "chai"
import dateTimestamp from "../src/date-timestamp.js"

should()

describe("dateTimestamp", () => {
  it("converts a Date object to a timestamp string", () => {
    // Create a Date object for a specific date and time
    const testDate = new Date("2023-12-17T16:54:01.234Z")

    // Call the dateTimestamp function with the testDate
    const result = dateTimestamp(testDate)

    // Assert that the result is equal to the expected timestamp string
    result.should.equal("20231217165401234")
  })

  it("converts the current Date object to a timestamp string", () => {
    // Get the current date and time
    const currentDate = new Date()

    // Call the dateTimestamp function with the current date
    const result = dateTimestamp(currentDate)

    // Assert that the result is a string containing only numeric characters
    result.should.match(/^\d+$/)
  })
})
