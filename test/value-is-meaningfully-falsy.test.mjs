"use strict"
import { should } from "chai"
import valueIsMeaningfullyFalsy from "../src/value-is-meaningfully-falsy.js"

should()

describe("value | valueIsMeaningfullyFalsy", () => {
  it("understands some falsy values contain meaning", () => {
    valueIsMeaningfullyFalsy(0).should.be.true
    valueIsMeaningfullyFalsy(false).should.be.true
    valueIsMeaningfullyFalsy(Infinity).should.be.true
  })
  it("some falsy values are meaningless", () => {
    valueIsMeaningfullyFalsy(null).should.be.false
    valueIsMeaningfullyFalsy(undefined).should.be.false
    valueIsMeaningfullyFalsy("").should.be.false
    valueIsMeaningfullyFalsy(NaN).should.be.false
  })
  it("values are not falsy, meaningful or not", () => {
    valueIsMeaningfullyFalsy([]).should.be.false
    valueIsMeaningfullyFalsy({}).should.be.false
    valueIsMeaningfullyFalsy("text").should.be.false
    valueIsMeaningfullyFalsy(1).should.be.false
    valueIsMeaningfullyFalsy(new Date()).should.be.false
  })
})
