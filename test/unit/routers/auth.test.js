const request = require("supertest");
const mongoose = require("mongoose");
const faker = require("faker");
const jwtDecode = require("jwt-decode");
const httpStatus = require("http-status");

const { app } = require("../../../src/app");
const User = require("../../../src/models/User");

describe("auth endpoints", () => {
  let user;

  beforeEach(async () => {
    user = {
      username: faker.name.findName(),
      password: "password1",
    };

    await User.deleteMany({});
  });

  test("should sign up for a user", () => {
    return request(app)
      .post("/api/v1/auth/signup")
      .send(user)
      .expect("Content-Type", /json/)
      .expect(httpStatus.CREATED)
      .then((res) => {
        expect(res.statusCode).toEqual(httpStatus.CREATED);
      });
  });
});

describe("GET /", () => {
  it("should return 200 OK", (done) => {
    request(app).get("/").expect(404, done);
  });
});
