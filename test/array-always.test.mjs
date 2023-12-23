"use strict"
import { should } from "chai"
import arrayAlways from "../src/array-always.js"

should()

describe("function | arrayAlways", () => {
  it("always returns an array", () => {
    arrayAlways(0).should.be.instanceOf(Array).eql([0])
    arrayAlways(0).should.be.instanceOf(Array).eql([0]) // zero number array
    arrayAlways(1).should.be.instanceOf(Array).eql([1]) // non-zero number array
    arrayAlways(Infinity).should.be.instanceOf(Array).eql([Infinity]) // Infinity array
    arrayAlways(false).should.be.instanceOf(Array).eql([false]) // false array
    arrayAlways(true).should.be.instanceOf(Array).eql([true]) // true array
    arrayAlways("_").should.be.instanceOf(Array).eql(["_"]) // non-empty string array
    arrayAlways(new Date()).should.be.instanceOf(Array).eql([new Date()]) // date array
    arrayAlways({ a: 0 })
      .should.be.instanceOf(Array)
      .eql([{ a: 0 }]) // object array
    arrayAlways({ a: false })
      .should.be.instanceOf(Array)
      .eql([{ a: false }]) // object array
    arrayAlways([0]).should.be.instanceOf(Array).eql([0]) // array back
    arrayAlways([false]).should.be.instanceOf(Array).eql([false]) // array back
    arrayAlways([null, "", 0]).should.be.instanceOf(Array).eql([null, "", 0]) //  array back
  })
})
