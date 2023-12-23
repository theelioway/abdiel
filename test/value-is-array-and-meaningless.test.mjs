"use strict"
import { should } from "chai"
import valueIsArrayAndMeaningless from "../src/value-is-array-and-meaningless.js"

should()

const isNonZeroNumber = n => typeof n === "number" && n !== 0

describe("function | valueIsArrayAndMeaningless", () => {
  it("knows when an array is full of meaningless values", () => {
    const isArrayAndNonZeroNumber = valueIsArrayAndMeaningless(isNonZeroNumber)
    isArrayAndNonZeroNumber([]).should.be.true
    isArrayAndNonZeroNumber([0, 0, 0]).should.be.true
    isArrayAndNonZeroNumber([1, 0, 2]).should.be.false
  })
  it("rejects non-arrays", () => {
    const isArrayAndNonZeroNumber = valueIsArrayAndMeaningless(isNonZeroNumber)
    isArrayAndNonZeroNumber(0).should.be.false
    isArrayAndNonZeroNumber({}).should.be.false
    isArrayAndNonZeroNumber("text").should.be.false
  })
})
