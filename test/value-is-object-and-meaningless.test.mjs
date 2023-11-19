"use strict"
import { should } from "chai"
import isObjectWithOnlyEmptyStrings from "../src/value-is-object-and-meaningless.js"

should()

describe("value | isObjectWithOnlyEmptyStrings", () => {
  it("checks whether object of meaningless propeties", () => {
    const isNonEmptyString = s => typeof s === "string" && s.trim() !== ""
    isObjectWithOnlyEmptyStrings({ a: "", b: " " }, isNonEmptyString).should.be
      .true
    isObjectWithOnlyEmptyStrings({ a: "hello", b: "" }, isNonEmptyString).should
      .be.false
    isObjectWithOnlyEmptyStrings({}, isNonEmptyString).should.be.true
  })
  it("safely ignores non-objects", () => {
    const isNonEmptyString = () => true
    isObjectWithOnlyEmptyStrings(undefined, isNonEmptyString).should.be.false
    isObjectWithOnlyEmptyStrings("not an object", isNonEmptyString).should.be
      .false
  })
})
