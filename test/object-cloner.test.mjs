"use strict"
import { should } from "chai"
import objectCloner from "../src/object-cloner.js"

should()

describe("object | objectCloner", () => {
  it("creates a deep clone that is independent of the original object", () => {
    const originalObject = {
      name: "Alice",
      age: 30,
      address: { city: "New York" },
    }
    const clonedObject = objectCloner(originalObject)

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
