"use strict"
import { should } from "chai"
import {
  objectDotNotated,
  objectDotNotatedGetter,
  objectDotNotatedSetter,
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

describe("object | objectDotNotatedSetter", () => {
  it("should set a nested property in an object", () => {
    const obj = { a: { x: 1 } }
    objectDotNotatedSetter(obj, "a.b", 2)
    obj.should.deep.equal({ a: { x: 1, b: 2 } })
  })
  it("should set an existing nested property in an object", () => {
    const obj = { a: { x: 1 } }
    objectDotNotatedSetter(obj, "a.x", 2)
    obj.should.deep.equal({ a: { x: 2 } })
  })
})

describe("object | objectDotNotatedGetter", () => {
  it("should get a nested property from an object", () => {
    const obj = { a: { b: { c: 123 } } }
    const result = objectDotNotatedGetter(obj, "a.b.c")
    result.should.equal(123)
  })

  it("should return undefined for a non-existent path", () => {
    const obj = { a: { b: { c: 123 } } }
    const result = objectDotNotatedGetter(obj, "a.b.d")
    should().equal(result, undefined)
  })
})
