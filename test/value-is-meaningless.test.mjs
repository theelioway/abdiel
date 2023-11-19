"use strict"
import { should } from "chai"
import valueIsMeaningless from "../src/value-is-meaningless.js"

should()

describe("value | valueIsMeaningless", () => {
  it("discerns meaning in some values", () => {
    valueIsMeaningless(false).should.be.false
    valueIsMeaningless(0).should.be.false
    valueIsMeaningless("text").should.be.false
    valueIsMeaningless({}).should.be.false
    valueIsMeaningless([]).should.be.false
    valueIsMeaningless(new Date()).should.be.false
  })
  it("feels some values have no meaning", () => {
    valueIsMeaningless().should.be.true
    valueIsMeaningless(undefined).should.be.true
    valueIsMeaningless(null).should.be.true
    valueIsMeaningless(NaN).should.be.true
    valueIsMeaningless("").should.be.true
  })
})
