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
            )
          }
          )
      });
  });
}

function getUserByEmail(email, testDb){
  const db = testDb || connection
  return db('users').where('email', email).first()
}

// function getUser (id, db = connection) {
//   return db('users').where('id', id).first()
// }



function writeIwi(iwiName, userId, testDb) {
  const db = testDb || connection
  return db('iwi')
    .insert({ iwi_name: iwiName, user_id: userId })
}

function writeHapu(hapuName, userId, testDb) {
  const db = testDb || connection
  return db('hapu')
    .insert({ hapu_name: hapuName, user_id: userId })
}


//**************/write rahui function ()
function writeRahui(
  user_id,
  iwi,
  hapu,
  description,
  korero,
  geo_ref,
  date_placed,
  date_lifted,
  contact,
  authoriser,
  region,
  testDb
){
  const db = testDb || connection
  return db('rahui')
  .insert({
    user_id: user_id,
    iwi: JSON.stringify([iwi]),
    hapu: JSON.stringify([hapu]), 
    description: description,
    korero: korero,
    geo_ref: JSON.stringify(geo_ref),
    date_placed: date_placed,
    date_lifted: date_lifted,
    contact: contact,
    authoriser: authoriser,
    region: JSON.stringify(region) 
  })

}

function editRahui(
  id,
  iwi,
  hapu,
  description,
  korero,
  geo_ref,
  date_placed,
  date_lifted,
  contact,
  authoriser,
  region,
  testDb
) {
  const db = testDb || connection
  return db('rahui')
  .where({ id: id })
  .update({
    iwi: iwi,
    hapu: hapu, 
    description:description,
    korero: korero,
    geo_ref: geo_ref,
    date_placed: date_placed,
    date_lifted: date_lifted,
    contact: contact,
    authoriser: authoriser,
    region,
  })
}

//**************/get user function ()
function getUsers(testDb) {
  const db = testDb || connection;

  return db("users").select();
}

//**************/get rahui function ()
function getRahui(testDb) {
  const db = testDb || connection;
  return db("rahui").select();
}

function getRahuiInformation(testDb) {
  const db = testDb || connection;

  return db("rahui")
    .join("users", "rahui.user_id", "=", "users.id")
    .join("iwi", "rahui.user_id", "=", "iwi.user_id")
    .join("hapu", "rahui.user_id", "=", "hapu.user_id")
    .select('*', 'rahui.id as rahui_id')
    .then(rahui => rahui.map(r => {
      r.id = r.rahui_id
      delete r.rahui_id
      return r
    }));
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
    .join("rahui", "users.id", "=", "rahui.user_id")
    .where("rahui.id", "=", rahui_id)
    .select();
}

//**************/get rahui tautoko function ()
function getRahuiTautoko(rahui_id, testDb) {
  const db = testDb || connection;

  return db("users")
    .join("tautoko", "users.id", "=", "tautoko.user_id")
    .join("rahui", "rahui.id", "=", "tautoko.rahui_id")
    .where("tautoko.rahui_id", "=", rahui_id)
    .select();
}

function writeTautoko(obj, testDb) {
  const db = testDb || connection
  return db('tautoko')
    .insert(obj)
}

module.exports = {
  createUser,
  getUsers,
  getUserByEmail,
  getRahui,
  editRahui,
  writeRahui,
  getUserIwi,
  getUserHapu,
  getRahuiAuthor,
  getRahuiTautoko,
  getRahuiInformation,
};
