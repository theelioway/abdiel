"use strict"
import { should } from "chai"
import stringCaseKebab from "../src/string-case-kebab.js"

should()

describe("function | stringCaseKebab", () => {
  it("converts a string to kebab-case", () => {
    const inputString = "Hello World Example"
    const kebabCaseString = stringCaseKebab(inputString)

    // Assert that the result is in kebab-case
    kebabCaseString.should.equal("hello-world-example")
  })

  it("handles leading and trailing spaces", () => {
    const inputString = "   Leading and Trailing   "
    const kebabCaseString = stringCaseKebab(inputString)

    // Assert that leading and trailing spaces are trimmed, and the result is in kebab-case
    kebabCaseString.should.equal("leading-and-trailing")
  })

  it("handles multiple consecutive spaces", () => {
    const inputString = "Multiple    Spaces"
    const kebabCaseString = stringCaseKebab(inputString)

    // Assert that multiple consecutive spaces are replaced with a single hyphen, and the result is in kebab-case
    kebabCaseString.should.equal("multiple-spaces")
  })

  it("handles mixed case", () => {
    const inputString = "CamelCaseExample"
    const kebabCaseString = stringCaseKebab(inputString)

    // Assert that mixed case is converted to kebab-case
    kebabCaseString.should.equal("camel-case-example")
  })

  it("handles special characters", () => {
    const inputString = "@$pecial Charac^ers"
    const kebabCaseString = stringCaseKebab(inputString)

    // Assert that special characters are preserved, and the result is in kebab-case
    kebabCaseString.should.equal("@$pecial-charac^ers")
  })

  it("handles an empty string", () => {
    const inputString = ""
    const kebabCaseString = stringCaseKebab(inputString)

    // Assert that an empty string remains empty
    kebabCaseString.should.equal("")
  })
})
