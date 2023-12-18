// Import the function to be tested
import { dateTimestamp } from "./your-module" // Replace 'your-module' with the actual module path

// Test case 1: Testing with a specific date
test("Converts a Date object to a timestamp string", () => {
  // Create a Date object for a specific date and time
  const testDate = new Date("2023-12-17T16:54:01.234Z")

  // Call the dateTimestamp function with the testDate
  const result = dateTimestamp(testDate)

  // Assert that the result matches the expected timestamp string
  expect(result).toBe("20231217165401234")
})

// Test case 2: Testing with the current date
test("Converts the current Date object to a timestamp string", () => {
  // Get the current date and time
  const currentDate = new Date()

  // Call the dateTimestamp function with the current date
  const result = dateTimestamp(currentDate)

  // Assert that the result is a string containing only numeric characters
  expect(result).toMatch(/^\d+$/)
})
