"use strict"
import { should } from "chai"
import objectArraySortByProperty from "../src/object-array-sort-by-property.js"

should()

const ARRAY = [
  { fWord: 2, sWord: 4, f: "u", s: "t" },
  { fWord: 1, sWord: 1, f: "f", s: "s" },
  { fWord: 4, sWord: 3, f: "k", s: "i" },
  { fWord: 3, sWord: 2, f: "c", s: "h" },
]

describe("function | objectArraySortByProperty", () => {
  it("sorts `ARRAY` by property `fWord`", () => {
    const sortByFWord = objectArraySortByProperty("fWord")
    ARRAY.sort(sortByFWord)
      .map(({ f }) => f)
      .join("")
      .should.eql("fuck")
  })
  it("sorts `ARRAY` by property `sWord`", () => {
    const sortByFWord = objectArraySortByProperty("sWord")
    ARRAY.sort(sortByFWord)
      .map(({ s }) => s)
      .join("")
      .should.eql("shit")
  })
})
