"use strict"
import { should } from "chai"
import objectAlways from "../src/object-always.js"

should()

describe("object | objectAlways", () => {
  it("returns the value in an object against the given property", () => {
    let propObject = objectAlways("prop")
    propObject(0).should.be.instanceOf(Object).eql({ prop: 0 })
    propObject(false).should.be.instanceOf(Object).eql({ prop: false })
    propObject("false").should.be.instanceOf(Object).eql({ prop: "false" })
    propObject({}).should.be.instanceOf(Object).eql({ prop: {} })
    propObject({ shit: 2 })
      .should.be.instanceOf(Object)
      .eql({ prop: { shit: 2 } })
  })
  it("returns the object when already having the given property", () => {
    let propObject = objectAlways("prop")
    propObject({ prop: 0 }).should.be.instanceOf(Object).eql({ prop: 0 })
    propObject({ prop: false })
      .should.be.instanceOf(Object)
      .eql({ prop: false })
    propObject({ prop: "false" })
      .should.be.instanceOf(Object)
      .eql({ prop: "false" })
    propObject({ prop: 1, shit: 2 })
      .should.be.instanceOf(Object)
      .eql({ prop: 1 })
  })
})
