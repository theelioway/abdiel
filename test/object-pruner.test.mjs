"use strict"
import { should } from "chai"
import objectPruner from "../src/object-pruner.js"
import valueIsMeaningful from "../src/value-is-meaningful.js"

should()

const PERSON = {
  name: "Alice",
  buzz: undefined,
  lateDays: 0,
  age: 25,
  employed: false,
  skilled: true,
  job: "",
  more1: {},
  more2: { more3: 3 },
  list1: [],
  list2: [3],
}

describe("array | objectPruner", () => {
  it("prunes boolean", () => {
    const pruneFalsy = objectPruner(([_, value]) => Boolean(value))
    pruneFalsy(PERSON).should.be.eql({
      name: "Alice",
      age: 25,
      skilled: true,
      more1: {},
      more2: { more3: 3 },
      list1: [],
      list2: [3],
    })
  })
  it("prunes to do picking", () => {
    const pickedProperties = objectPruner(([propertyName, _]) =>
      ["name", "employed"].includes(propertyName),
    )
    pickedProperties(PERSON).should.be.eql({
      name: "Alice",
      employed: false,
    })
  })
  it("prune with `valueIsMeaningful` function", () => {
    const pruneMeanlingless = objectPruner(([_, value]) =>
      valueIsMeaningful(value),
    )
    pruneMeanlingless(PERSON).should.be.eql({
      name: "Alice",
      lateDays: 0,
      age: 25,
      employed: false,
      skilled: true,
      more2: { more3: 3 },
      list2: [3],
    })
  })
})
