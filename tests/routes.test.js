const request = require('supertest')
const express = require('express')

const app = express()

describe("GET / - a simple api endpoint", () => {
  it("Hello API Request", async () => {
    const result = await request(app).get("/")
    expect(result.text).toEqual("hello")
    expect(result.statusCode).toEqual(200)
  })
})
