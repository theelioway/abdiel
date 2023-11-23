"use strict"
import { should } from "chai"
import abdiel from "../abdiel.js"

should()

describe("module | abdiel", () => {
  it("all of abdiel without raising an error", async () => {
    let oldab = await abdiel()
    Object.keys(oldab).should.be.eql([
      "arrayAlways",
      "arrayDifference",
      "arraySortByProperty",
      "arrayUnion",
      "arrayXor",
      "dateTimestamp",
      "objectAlways",
      "objectPicker",
      "objectPruner",
      "valueIsArrayAndMeaningless",
      "valueIsDate",
      "valueIsLengthlessArray",
      "valueIsLengthlessString",
      "valueIsMeaningful",
      "valueIsMeaningfullyFalsy",
      "valueIsMeaningless",
      "valueIsObjectAndMeaningless",
      "valueToStringIsLengthless",
    ])
  })
})
