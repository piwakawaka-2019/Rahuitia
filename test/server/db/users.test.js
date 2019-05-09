const testEnv = require("../setup-db");
const users = require("../../../server/db/users");

let testDb = null;

beforeEach(() => {
  testDb = testEnv.getTestDb();
  return testEnv.initialise(testDb);
});

afterEach(() => testEnv.cleanup(testDb));

test("createUser inserts a single user", () => {
  let expected = 1;

  return users
    .createUser(
      "first_name",
      "middle_name",
      "last_name",
      "address",
      "email",
      "s3cr3t",
      testDb
    )
    .then(ids => {
      let actual = ids.length;

      expect(actual).toEqual(expected);
    });
});

// test("userExists finds existing user", () => {
//   let expected = true;

//   return users.userExists("houseofmouse", testDb).then(result => {
//     let actual = result;

//     expect(actual).toEqual(expected);
//   });
// });

// test("userExists does not find non-existant user", () => {
//   let expected = false;

//   return users.userExists("not-a-username", testDb).then(result => {
//     let actual = result;

//     expect(actual).toEqual(expected);
//   });
// });

// test("getUserByUsername finds existing user", () => {
//   let expected = "Mickey";

//   return users.getUserByUsername("houseofmouse", testDb).then(user => {
//     let actual = user.first_name;

//     expect(actual).toEqual(expected);
//   });
// });

test("getUsers return users", () => {
  let expected = true;

  return users.getUsers(testDb).then(users => {
    let actual = users.length > 0;

    expect(actual).toEqual(expected);
  });
});

test("getRahui return rahui", () => {
  let expected = true;

  return users.getRahui(testDb).then(rahui => {
    let actual = rahui.length > 0;

    expect(actual).toEqual(expected);
  });
});

test("getUserHapu return hapu", () => {
  let expected = true;

  return users.getUserHapu(testDb).then(hapu => {
    let actual = hapu.length > 0;

    expect(actual).toEqual(expected);
  });
});