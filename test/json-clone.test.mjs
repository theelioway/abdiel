"use strict"
import { should } from "chai"
import jsonClone from "../src/json-clone.js"

should()

describe("function | jsonClone", () => {
  it("handles undefined", () => {
    jsonClone().should.eql({})
    jsonClone(undefined).should.eql({})
    jsonClone(null).should.eql({})
    jsonClone("").should.eql({})
  })
  it("handles meaningful primitives", () => {
    jsonClone(false).should.eql(false)
    jsonClone(true).should.eql(true)
    jsonClone(0).should.eql(0)
    jsonClone(1).should.eql(1)
    jsonClone("1").should.eql("1")
  })
  it("creates a deep clone that is independent of the original object", () => {
    const originalObject = {
      name: "Alice",
      age: 30,
      address: { city: "New York" },
    }
    const clonedObject = jsonClone(originalObject)

    // Not the same object.
    clonedObject.should.not.equal(originalObject)

    // But identical.
    clonedObject.should.eql(originalObject)

    // Modify the original object.
    originalObject.name = "Bob"
    originalObject.address.city = "San Francisco"

    // They are clearly different objects.
    clonedObject.should.eql({
      name: "Alice",
      age: 30,
      address: { city: "New York" },
    })
  })
})
