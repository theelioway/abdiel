"use strict"
import { should } from "chai"
import objectAlways from "../src/object-always.js"

should()

describe("object | objectAlways", () => {
  it("returns the value if no object with property", () => {
    let propObject = objectAlways("prop")
    propObject(0).should.be.eql(0)
    propObject(false).should.be.eql(false)
    propObject("false").should.be.eql("false")
    propObject({}).should.be.eql({})
    propObject({ shit: 2 }).should.be.eql({ shit: 2 })
  })
  it("returns the value if found in object with given property", () => {
    let propObject = objectAlways("prop")
    propObject({ prop: 2 }).should.be.eql(2)
    propObject({ prop: false }).should.be.eql(false)
    propObject({ prop: "false" }).should.be.eql("false")
    propObject({ prop: 1, shit: 2 }).should.be.eql(1)
  })
})
