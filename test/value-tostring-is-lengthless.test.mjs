"use strict"
import { should } from "chai"
import valueToStringIsLengthless from "../src/value-tostring-is-lengthless.js"

should()

describe("value | valueToStringIsLengthless", () => {
  it("safely checks whether `value.toString()` is lengthless", () => {
    valueToStringIsLengthless().should.be.true
    valueToStringIsLengthless(null).should.be.true
    valueToStringIsLengthless("").should.be.true
    valueToStringIsLengthless("   ").should.be.true
    valueToStringIsLengthless(0).should.be.true
    valueToStringIsLengthless([]).should.be.true
    valueToStringIsLengthless("text").should.be.false
    valueToStringIsLengthless(123).should.be.false
    valueToStringIsLengthless({}).should.be.false
  })
})
