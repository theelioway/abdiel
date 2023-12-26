"use strict"
import { should } from "chai"
import objectPick from "../src/object-pick.js"

should()

describe("function | objectPick", () => {
  it("works as expected", () => {
    const pickNameAndAge = objectPick(["name", "age"])
    const person = { name: "Alice", age: 30, job: "Engineer" }
    pickNameAndAge(person).should.be.eql({ name: "Alice", age: 30 })
  })
})
