"use strict"
import { should } from "chai"
import objectPicker from "../src/object-picker.js"

should()

describe("array | objectPicker", () => {
  it("works by example", () => {
    const pickNameAndAge = objectPicker(["name", "age"])
    const person = { name: "Alice", age: 30, job: "Engineer" }
    pickNameAndAge(person).should.be.eql({ name: "Alice", age: 30 })
  })
})
