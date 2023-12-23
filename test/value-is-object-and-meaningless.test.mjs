"use strict"
import { should } from "chai"
import valueIsObjectAndMeaningless from "../src/value-is-object-and-meaningless.js"

should()

describe("function | isObjectWithOnlyEmptyStrings", () => {
  it("checks whether object of meaningless propeties", () => {
    const isNonEmptyString = s => typeof s === "string" && s.trim() !== ""
    const isObjectAndNonEmptyString =
      valueIsObjectAndMeaningless(isNonEmptyString)
    isObjectAndNonEmptyString({ a: "", b: " " }).should.be.true
    isObjectAndNonEmptyString({ a: "hello", b: "" }).should.be.false
    isObjectAndNonEmptyString({}).should.be.true
  })
  it("safely ignores non-objects", () => {
    const isAlwaysTrue = () => true
    const isObjectAndNonEmptyString = valueIsObjectAndMeaningless(isAlwaysTrue)
    isObjectAndNonEmptyString(undefined).should.be.false
    isObjectAndNonEmptyString("not an object").should.be.false
  })
})
