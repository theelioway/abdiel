"use strict"
import { should } from "chai"
import valueIsDate from "../src/value-is-date.js"

should()

describe("function | valueIsDate", () => {
  it("can recognise a real date object when it can see it", () => {
    valueIsDate(new Date()).should.be.true
    valueIsDate(new Date("2021-01-01")).should.be.true
  })
  it("rejects a dud dates", () => {
    valueIsDate(new Date("invalid")).should.be.false
  })
  it("rejects a non-date object", () => {
    valueIsDate("2021-01-01").should.be.false
    valueIsDate(1234567890).should.be.false
    valueIsDate({}).should.be.false
    valueIsDate(null).should.be.false
  })
})
