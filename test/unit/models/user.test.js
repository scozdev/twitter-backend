const faker = require("faker");
const User = require("../../../src/models/User");

describe("User model", () => {
  describe("User validation", () => {
    let newUser;
    beforeEach(() => {
      newUser = {
        email: faker.internet.email().toLowerCase(),
        fullname: faker.name.findName(),
        username: faker.name.findName(),
        password: "password1",
      };
    });

    test("should correctly validate a valid user", async () => {
      await expect(new User(newUser).validate()).resolves.toBeUndefined();
    });

    test('should throw a validation error if password length is less than 6 characters', async () => {
      newUser.password = 'pass';
      await expect(new User(newUser).validate()).rejects.toThrow();
    });

  });
});
