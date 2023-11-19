"use strict"
import { should } from "chai"
import valueIsLengthlessArray from "../src/value-is-lengthless-array.js"

should()

describe("value | valueIsLengthlessArray", () => {
  it("knows when an array with things in it or not", () => {
    valueIsLengthlessArray([]).should.be.true
    valueIsLengthlessArray([,]).should.be.false
    valueIsLengthlessArray([0]).should.be.false
  })
  it("rejects non-arrays", () => {
    valueIsLengthlessArray("").should.be.false
    valueIsLengthlessArray("[]").should.be.false
    valueIsLengthlessArray(null).should.be.false
    valueIsLengthlessArray(undefined).should.be.false
    valueIsLengthlessArray({}).should.be.false
  })
})
