"use strict"
import { should } from "chai"
import { union } from "lodash-es"
import { arrayUnion } from "../src/array-union.js"

should()

let unionTests = [
  [
    [1, 2, 3],
    [4, 3, 2],
    [1, 2, 3, 4],
  ],
  [
    [6, 9, 8, 5],
    [4, 3, 2, 7, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ],
  [[true], [false], [true, false]],
  [[1, 1, 1], [1, 1, 1], [1]],
]

let speedTests = 11111

describe("lodash | array | union", () => {
  for (let [l1, l2, expectUnity] of unionTests) {
    it(`totally united ${l1} + ${l2} == ${expectUnity}`, () => {
      let res = union(l1, l2)
      res.should.have.members(expectUnity)
    })
  }
})

describe("array | arrayUnion", () => {
  for (let [l1, l2, expectUnity] of unionTests) {
    it(`totally united ${l1} + ${l2} == ${expectUnity}`, () => {
      let res = arrayUnion(l1, l2)
      res.should.have.members(expectUnity)
    })
  }
})

describe("lodash | array | union", () => {
  it("tis fast", () => {
    let stamp = Date.now()
    for (let i = 0; i < speedTests; i++) {
      for (let [l1, l2] of unionTests) {
        union(l1, l2)
      }
    }
    ;(Date.now() - stamp).should.be.lt(speedTests / 75)
  })
})

describe("utils | arrayUnion", () => {
  it("tis faster", () => {
    let stamp = Date.now()
    for (let i = 0; i < speedTests; i++) {
      for (let [l1, l2] of unionTests) {
        arrayUnion(l1, l2)
      }
    }
    ;(Date.now() - stamp).should.be.lt(speedTests / 75)
  })
})
