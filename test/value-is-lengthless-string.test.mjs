"use strict"
import { should } from "chai"
import valueIsLengthlessString from "../src/value-is-lengthless-string.js"

should()

describe("function | valueIsLengthlessString", () => {
  it("picks strings with no meaning", () => {
    valueIsLengthlessString("").should.be.true
    valueIsLengthlessString("   ").should.be.true
  })
  it("rejects strings with any meaning", () => {
    valueIsLengthlessString("text").should.be.false
  })
  it("rejects non-strings", () => {
    valueIsLengthlessString(123).should.be.false
    valueIsLengthlessString(null).should.be.false
    valueIsLengthlessString(undefined).should.be.false
    valueIsLengthlessString({}).should.be.false
    valueIsLengthlessString(["", " "]).should.be.false
  })
})
