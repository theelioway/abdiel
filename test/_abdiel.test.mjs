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
      "jsonClone",
      "jsonMerge",
      "objectAlways",
      "objectArraySortByProperty",
      "objectDotNotated",
      "objectDotNotatedGetter",
      "objectDotNotatedSetter",
      "objectPick",
      "objectPrune",
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
