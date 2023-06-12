import supertest from 'supertest'
import app from '../index.js'

describe("Login User", () => {
    describe("given the user exist", () => {
      it("should return a 200", async () => {
        const user={
          "email":"uneeadsbmir23@gmail.com",
          "password":"password"
      }
        const res = await supertest(app).post(`/login`).send(user);
        expect(res.statusCode).toEqual(200)
      })
    })
})