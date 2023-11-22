"use strict"
import { should } from "chai"

import objectPropertiesSort from "../src/object-sort-properties.js"

should()

describe("array | objectPropertiesSort", () => {
  it("works as expected", () => {
    const person = {
      name: "Alice",
      zoo: false,
      Serious: true,
      age: 30,
      job: "Engineer",
      mort: "Hoodoo",
    }
    objectPropertiesSort(person).should.be.eql({
      Serious: true,
      age: 30,
      job: "Engineer",
      mort: "Hoodoo",
      name: "Alice",
      zoo: false,
    })
  })
})
