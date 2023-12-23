"use strict"
import { should } from "chai"
import valueToImpliedType from "../src/value-to-implied-type.js"

should()

describe("function | valueToImpliedType", () => {
  it("returns a suitable blank", () => {
    should().equal(valueToImpliedType(), undefined)
    valueToImpliedType("").should.eql("")
  })
  it("returns real booleans", () => {
    valueToImpliedType(true).should.eql(true)
    valueToImpliedType(false).should.eql(false)
  })
  it("returns real dates", () => {
    valueToImpliedType(new Date(Date.parse("2023-02-22"))).should.eql(
      new Date("2023-02-22T00:00:00.000Z"),
    )
  })
  it("returns real numbers", () => {
    valueToImpliedType(1).should.eql(1)
    valueToImpliedType(1.0).should.eql(1.0)
  })
  it("returns suitable string numbers", () => {
    valueToImpliedType("1").should.eql(1)
    valueToImpliedType("1.0").should.eql(1.0)
  })
  it("returns suitable string dates", () => {
    valueToImpliedType("2023-02-22").should.eql(
      new Date("2023-02-22T00:00:00.000Z"),
    )
  })
  it("returns suitable string strings", () => {
    valueToImpliedType("hello").should.eql("hello")
  })
})
