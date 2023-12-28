"use strict"
import { should } from "chai"
import { jsonMerge } from "../src/json-merge.js"

should()

describe("json | jsonMerge", () => {
  it("should correctly merge two simple objects", () => {
    const obj1 = { a: 1 }
    const obj2 = { b: 2 }
    jsonMerge(obj1, obj2).should.deep.equal({ a: 1, b: 2 })
  })

  it("should correctly merge nested objects", () => {
    const obj1 = { a: { x: 1 } }
    const obj2 = { a: { y: 2 }, b: 3 }
    jsonMerge(obj1, obj2).should.deep.equal({ a: { x: 1, y: 2 }, b: 3 })
  })

  it("should handle arrays in objects", () => {
    const obj1 = { a: [1, 2] }
    const obj2 = { a: [3, 4], b: [5] }
    jsonMerge(obj1, obj2).should.deep.equal({ a: [1, 2, 3, 4], b: [5] })
  })

  it("should handle arrays missing from target object", () => {
    const obj1 = { a: 1 }
    const obj2 = { a: [2, 3], b: [4] }
    jsonMerge(obj1, obj2).should.deep.equal({ a: [1, 2, 3], b: [4] })
  })

  it("should overwrite properties correctly", () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 3 }
    jsonMerge(obj1, obj2).should.deep.equal({ a: 3, b: 2 })
  })

  it("should overwrite nested properties correctly", () => {
    const obj1 = { a: { z: 1 }, b: 2 }
    const obj2 = { a: { z: 3 } }
    jsonMerge(obj1, obj2).should.deep.equal({ a: { z: 3 }, b: 2 })
  })

  it("should obey null and undefined values", () => {
    const obj1 = { a: 1, b: 2, c: [2, null, 3] }
    const obj2 = { a: undefined, b: null, c: [undefined, 0, 1] }
    jsonMerge(obj1, obj2).should.deep.equal({
      a: undefined,
      b: null,
      c: [2, 3, 0, 1],
    })
  })

  it("handles merging to nested empty object", () => {
    const obj1 = { SocialMediaPosting: {} }
    const obj2 = { SocialMediaPosting: { sharedContent: "" } }
    jsonMerge(obj1, obj2).should.deep.equal({
      SocialMediaPosting: { sharedContent: "" },
    })
  })
})
