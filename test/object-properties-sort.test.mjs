"use strict"
import { should } from "chai"
import objectSortProperties from "../src/object-sort-properties.js"

should()

describe("array | objectSortProperties", () => {
  it("works as expected", () => {
    const person = {
      name: "Alice",
      zoo: false,
      Serious: true,
      age: 30,
      job: "Engineer",
      mort: "Hoodoo",
    }
    objectSortProperties(person).should.be.eql({
      Serious: true,
      age: 30,
      job: "Engineer",
      mort: "Hoodoo",
      name: "Alice",
      zoo: false,
    })
  })
})
