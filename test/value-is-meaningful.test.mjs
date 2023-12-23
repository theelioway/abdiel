"use strict"
import { should } from "chai"
import valueIsMeaningful from "../src/value-is-meaningful.js"

should()

describe("function | valueIsMeaningful", () => {
  it("understands what is meaningful", () => {
    valueIsMeaningful(0).should.be.true // zero is considered meaningful
    valueIsMeaningful(1).should.be.true // non-zero number is meaningful
    valueIsMeaningful(Infinity).should.be.true // Infinity is considered meaningful
    valueIsMeaningful(false).should.be.true // false is considered meaningful
    valueIsMeaningful(true).should.be.true // true is considered meaningful
    valueIsMeaningful("_").should.be.true // non-empty string is meaningful
    valueIsMeaningful(new Date()).should.be.true // dates are meaningful
    valueIsMeaningful({ a: 0 }).should.be.true // object with one meaningful property
    valueIsMeaningful({ a: false }).should.be.true // object with one meaningful property
    valueIsMeaningful([0]).should.be.true // non-empty array is meaningful
    valueIsMeaningful([false]).should.be.true // non-empty array is meaningful
    valueIsMeaningful([NaN, null, undefined, {}, [], "", "   ", 0]).should.be
      .true //  array with one meaningful value
  })
  it("rejects when not meaningful", () => {
    valueIsMeaningful(NaN).should.be.false // NaN is not meaningful
    valueIsMeaningful(null).should.be.false // null is not meaningful
    valueIsMeaningful(undefined).should.be.false // undefined is not meaningful
    valueIsMeaningful({}).should.be.false // empty object is not meaningful
    valueIsMeaningful([]).should.be.false // empty array is not meaningful
    valueIsMeaningful([,]).should.be.false // empty array is not meaningful
    valueIsMeaningful("").should.be.false // empty string is not meaningful
    valueIsMeaningful("   ").should.be.false // blank string is not meaningful
    valueIsMeaningful([NaN, null, undefined, {}, [], "", "   "]).should.be.false //  array of empty is not meaningful
  })
  // it.only("struggles to understands what is meaningful", () => {})
})
