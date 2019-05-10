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
    return db("users").insert({
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
          return writeIwi(iwiName, userId, db)
        })
      )
      .then(() => {
        return Promise.all(
          hapu.map(hapuName => {
            return writeHapu(hapuName, userId, db)
          })
        )}
      )
    });
  });
}

function writeIwi(iwiName, userId, testDb){
  const db = testDb || connection
  return db('iwi')
  .insert({ iwi_name: iwiName, user_id: userId })
}

function writeHapu(hapuName, userId, testDb){
  const db = testDb || connection
  return db('hapu')
  .insert({ hapu_name: hapuName, user_id: userId })
}
//**************/get user function ()
function getUsers(testDb) {
  const db = testDb || connection;

  return db("users").select();
}

//**************/get rahui function ()
function getRahui(testDb) {
  const db = testDb || connection;
  return db("rahui")
  
  .select();
}

function getRahuiInformation(testDb) {
  const db = testDb || connection;
  return db("rahui")
  .join("users", "rahui.user_id", "=", "users.id")
  .join("iwi", "rahui.user_id", "=", "iwi.user_id")
  .join("hapu", "rahui.user_id", "=", "hapu.user_id")
  .select();
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

//**************/get rahui author function ()
function getRahuiAuthor(rahui_id, testDb) {
  const db = testDb || connection;

  return db("users")
    .join("rahui", "users_id", "=", "rahui.users_id")
    .where("rahui.id", "=", rahui_id)
    .select();
}

//**************/get rahui tautoko function ()
function getRahuiTautoko(rahui_id, testDb) {
  const db = testDb || connection;

  return db("users")
    .join("tautoko", "users_id", "=", "tautoko.users_id")
    .where("tautoko.rahui_id", "=", rahui_id)
    .select();
}

// function userExists(user_name, testDb) {
//   const db = testDb || connection

//   return db('users')
//     .where('user_name', user_name)
//     .then(users => users.length > 0)
// }

function writeRahui(obj, testDb){
  const db = testDb || connection
  return db('rahui')
  .insert(obj)
}

function writeTautoko(obj, testDb){
  const db = testDb || connection
  return db('tautoko')
  .insert(obj)
}

module.exports = {
  createUser,
  getUsers,
  getRahui,
  getUserIwi,
  getUserHapu,
  getRahuiAuthor,
  getRahuiTautoko,
  getRahuiInformation
};
