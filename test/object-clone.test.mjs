"use strict"
import { should } from "chai"
import objectClone from "../src/object-clone.js"

should()

describe("object | objectClone", () => {
  it("creates a deep clone that is independent of the original object", () => {
    const originalObject = {
      name: "Alice",
      age: 30,
      address: { city: "New York" },
    }
    const clonedObject = objectClone(originalObject)

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
