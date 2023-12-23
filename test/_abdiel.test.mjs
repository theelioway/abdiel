"use strict"
import { should } from "chai"
import abdiel from "../abdiel.js"

should()

describe("module | abdiel", () => {
  it("exports these functions", async () => {
    let oldab = await abdiel()
    Object.keys(oldab).should.be.eql([
      "arrayAlways",
      "arrayDifference",
      "arrayUnion",
      "arrayXor",
      "dateTimestamp",
      "objectAlways",
      "objectArrayReduceProperties",
      "objectArraySortByProperty",
      "objectClone",
      "objectPicker",
      "objectPruner",
      "objectSortProperties",
      "stringCaseKebab",
      "valueIsArrayAndMeaningless",
      "valueIsDate",
      "valueIsLengthlessArray",
      "valueIsLengthlessString",
      "valueIsMeaningful",
      "valueIsMeaningfullyFalsy",
      "valueIsMeaningless",
      "valueIsObjectAndMeaningless",
      "valueToImpliedType",
      "valueToStringIsLengthless",
    ])
  })
})
