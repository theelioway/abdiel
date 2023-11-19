"use strict"
import { should } from "chai"
import valueIsArrayAndMeaningless from "../src/value-is-array-and-meaningless.js"

should()

const isNonZeroNumber = n => typeof n === "number" && n !== 0

describe("value | valueIsArrayAndMeaningless", () => {
  it("knows when an array is full of meaningless values", () => {
    valueIsArrayAndMeaningless([], isNonZeroNumber).should.be.true
    valueIsArrayAndMeaningless([0, 0, 0], isNonZeroNumber).should.be.true
    valueIsArrayAndMeaningless([1, 0, 2], isNonZeroNumber).should.be.false
  })
  it("rejects non-arrays", () => {
    valueIsArrayAndMeaningless(0, isNonZeroNumber).should.be.false
    valueIsArrayAndMeaningless({}, isNonZeroNumber).should.be.false
    valueIsArrayAndMeaningless("text", isNonZeroNumber).should.be.false
  })
})
