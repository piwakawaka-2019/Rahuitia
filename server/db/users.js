const { generatePasswordHash } = require("../auth/hash");
const connection = require("./connection");

//************* */create user function ()
function createUser(
  first_name,
  middle_name,
  last_name,
  address,
  email,
  password,
  iwi,
  hapu,
  testDb
) {
  const db = testDb || connection;

  return generatePasswordHash(password).then(hash => {
    return db("users")
      .insert({
        first_name: first_name,
        middle_name: middle_name,
        last_name: last_name,
        address: address,
        email: email,
        password_hash: hash
      })
      .then(userIds => {
        const userId = userIds[0];
        return Promise.all(
          iwi.map(iwiName => {
            return writeIwi(iwiName, userId, db);
          })
        ).then(() => {
          return Promise.all(
            hapu.map(hapuName => {
              return writeHapu(hapuName, userId, db);
            })
          );
        });
      });
  });
}

function writeIwi(iwiName, userId, testDb) {
  const db = testDb || connection;
  return db("iwi").insert({ iwi_name: iwiName, user_id: userId });
}

function writeHapu(hapuName, userId, testDb) {
  const db = testDb || connection;
  return db("hapu").insert({ hapu_name: hapuName, user_id: userId });
}

//**************/get user function ()
function getUsers(testDb) {
  const db = testDb || connection;

  return db("users").select();
}

//**************/get user iwi function ()
function getUserIwi(users_id, testDb) {
  const db = testDb || connection;

  return db("iwi")
    .join("users", "iwi.user_id", "=", "users.id")
    .where("iwi.user_id", "=", users_id)
    .select();
}

//**************/get user hapu function ()
function getUserHapu(users_id, testDb) {
  const db = testDb || connection;

  return db("hapu")
    .join("users", "hapu.user_id", "=", "users.id")
    .where("hapu.user_id", "=", users_id)
    .select();
}

module.exports = {
  createUser,
  getUsers,
  getUserIwi,
  getUserHapu
};
