"use strict"
import { should } from "chai"
import { difference } from "lodash-es"
import arrayDifference from "../src/array-difference.js"

should()

let differenceTests = [
  [[], [], []],
  [[false], [], [false]],
  [[], [false], []],
  [[false], [false], []],
  [[true], [true], []],
  [[], [true], []],
  [[true], [], [true]],
  [[true], [false], [true]],
  [[false], [true], [false]],
  [[false, true], [true], [false]],
  [[false, true], [false], [true]],
  [[1], [1], []],
  [[1], [], [1]],
  [[], [1], []],
  [[1], [2], [1]],
  [[1], [1, 2], []],
  [[1, 2], [2], [1]],
  [[1, 2], [1], [2]],
  [[1], [1], []],
  [[1, 2, 1], [1], [2]],
  [[1], [1, 2, 1], []],
  [[1, 2, 3], [3, 2, 1], []],
  [[1, 2, 3], [4, 3, 2], [1]],
  [
    [6, 9, 8, 5],
    [4, 3, 2, 7, 1],
    [6, 9, 8, 5],
  ],
  [[1, 2], [2, 3], [1]],
  [[1, 2], [1, 2, 3], []],
  [[1, 3], [2, 3], [1]],
  [[1, 2, 3], [1, 2, 3], []],
  [[1, 2, 3], [4, 2, 3], [1]],
]

let speedTests = 11111

describe("function | arrayDifference lodash comparison", () => {
  it("`arrayDifference` same as lodash `difference`", () => {
    for (let [l1, l2] of differenceTests) {
      let abdielRes = arrayDifference(l1, l2)
      let lodashRes = difference(l1, l2)
      abdielRes.should.eql(lodashRes)
    }
  })
})

describe("function | arrayDifference", () => {
  for (let [l1, l2, expectDifference] of differenceTests) {
    it(`spots whats missing in l2 ${l1} / ${l2} == ${expectDifference}`, () => {
      let res = arrayDifference(l1, l2)
      res.should.have.members(expectDifference)
    })
  }
})

describe("lodash | array | difference", () => {
  it("tis fast", () => {
    let stamp = Date.now()
    for (let i = 0; i < speedTests; i++) {
      for (let [l1, l2, expectDifference] of differenceTests) {
        let res = difference(l1, l2)
      }
    }
    ;(Date.now() - stamp).should.be.lt(speedTests / 75)
  })
})

describe("function | arrayDifference", () => {
  it("tis faster", () => {
    let stamp = Date.now()
    for (let i = 0; i < speedTests; i++) {
      for (let [l1, l2, expectDifference] of differenceTests) {
        let res = arrayDifference(l1, l2)
      }
    }
    ;(Date.now() - stamp).should.be.lt(speedTests / 75)
  })
})
