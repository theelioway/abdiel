"use strict"
import { should } from "chai"
import abdiel from "../abdiel.js"

should()

describe("module | abdiel", hooks => {
  it("fetches abdiel", () => {
    abdiel().should.equal("abdiel")
  })
})
