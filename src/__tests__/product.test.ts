import supertest from 'supertest'
import app from '../index.js'

describe("get product route", () => {
    describe("given the product does not exist", () => {
      it("should return a 404", async () => {
        await supertest(app).get(`/login`).expect(404);
      })
    })
})