"use strict"
import { should } from "chai"
import { difference, union } from "lodash-es"
import arrayXor from "../src/array-xor.js"

should()

let xorTests = [
  [[], [], []],
  [[false], [], [false]],
  [[], [false], [false]],
  [[false], [false], []],
  [[true], [true], []],
  [[], [true], [true]],
  [[true], [], [true]],
  [[true], [false], [true, false]],
  [[false], [true], [false, true]],
  [[false, true], [true], [false]],
  [[false, true], [false], [true]],
  [[1], [1], []],
  [[1], [], [1]],
  [[], [1], [1]],
  [[1], [2], [1, 2]],
  [[1], [1, 2], [2]],
  [[1, 2], [2], [1]],
  [[1], [1], []],
  [[1, 2, 1], [1], [2]],
  [[1], [1, 2, 1], [2]],
  [[1, 2, 3], [3, 2, 1], []],
  [
    [1, 2, 3],
    [4, 3, 2],
    [1, 4],
  ],
  [
    [6, 9, 8, 5],
    [4, 3, 2, 7, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ],
  [
    [1, 2],
    [2, 3],
    [1, 3],
  ],
  [[1, 2], [1, 2, 3], [3]],
  [
    [1, 3],
    [2, 3],
    [1, 2],
  ],
  [[1, 2, 3], [1, 2, 3], []],
  [
    [1, 2, 3],
    [4, 2, 3],
    [4, 1],
  ],
]

let speedTests = 5000

describe("array | arrayXor lodash comparison", () => {
  it("`arrayXor` same as lodash ` union(difference,difference)`", () => {
    for (let [l1, l2] of xorTests) {
      let abdielRes = arrayXor(l1, l2)
      let lodashRes = union(difference(l1, l2), difference(l2, l1))
      abdielRes.should.eql(lodashRes)
    }
  })
})

describe("array | arrayXor", () => {
  for (let [l1, l2, expectarrayXor] of xorTests) {
    it(`arrayXor either way ${l1} + ${l2} == ${expectarrayXor}`, () => {
      let res = arrayXor(l1, l2)
      res.should.have.members(expectarrayXor)
    })
  }
})

describe("array | arrayXor", () => {
  it("arrayXor faster than lodash", () => {
    let stamp = Date.now()
    for (let i = 0; i < speedTests; i++) {
      for (let [l1, l2, _] of xorTests) {
        union(difference(l1, l2), difference(l2, l1))
      }
    }
    const lodashTime = Date.now() - stamp
    stamp = Date.now()
    for (let i = 0; i < speedTests; i++) {
      for (let [l1, l2, _] of xorTests) {
        arrayXor(l1, l2)
      }
    }
    const arrayXorTime = Date.now() - stamp
    arrayXorTime.should.be.lt(lodashTime)
  })
})
