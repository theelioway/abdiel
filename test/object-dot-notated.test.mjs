"use strict"
import { should } from "chai"
import {
  objectDotNotated,
  objectDotNotatedClip,
  objectDotNotatedGet,
  objectDotNotatedPick,
  objectDotNotatedSet,
} from "../src/object-dot-notated.js"

should()

describe("object | objectDotNotated", () => {
  it("should create a nested object from a dot notation path", () => {
    const result = objectDotNotated("a.b.c", 123)
    result.should.deep.equal({ a: { b: { c: 123 } } })
  })
  it("should create a deeply nested object from a dot notation path", () => {
    const result = objectDotNotated("a.b.c", { e: { f: 123 } })
    result.should.deep.equal({ a: { b: { c: { e: { f: 123 } } } } })
  })
})

describe("object | objectDotNotatedSet", () => {
  it("should set a nested property in an object", () => {
    const object = { a: { x: 1 } }
    objectDotNotatedSet(object, "a.b", 2)
    object.should.deep.equal({ a: { x: 1, b: 2 } })
  })
  it("should set an existing nested property in an object", () => {
    const object = { a: { x: 1 } }
    objectDotNotatedSet(object, "a.x", 2)
    object.should.deep.equal({ a: { x: 2 } })
  })
})

describe("object | objectDotNotatedClip", () => {
  it("should clip out a fragment of an object", () => {
    const object = { a: { b: 1, c: 2 }, d: { e: 3, f: 4 }, g: { h: 5 } }
    objectDotNotatedClip(object, "a.c").should.be.eql({ a: { c: 2 } })
  })
})

describe("object | objectDotNotatedPick", () => {
  it("should set a nested property in an object", () => {
    const object = { a: { b: 1, c: 2 }, d: { e: 3, f: 4 }, g: { h: 5 } }
    objectDotNotatedPick(object, ["a.c", "d.e", "g"]).should.be.eql({
      a: { c: 2 },
      d: { e: 3 },
      g: { h: 5 },
    })
  })
})

describe("object | objectDotNotatedGet", () => {
  it("should get a nested property from an object", () => {
    const object = { a: { b: { c: 123 } } }
    objectDotNotatedGet(object, "a.b.c").should.equal(123)
  })
  it("should return undefined for a non-existent path", () => {
    const object = { a: { b: { c: 123 } } }
    should().equal(objectDotNotatedGet(object, "a.b.d"), undefined)
  })
})
