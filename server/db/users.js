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
    });
  });
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

//************* */ get meetings
// function getMeetings(testDb) {
//   const db = testDb || connection

//   return db('meetings')
//     .select()
// }

//************   save meetings ()

// function saveMeeting({meetingName, time, duration, attendees, cost}, testDb) {
//   const db = testDb || connection

//   return db('meetings')
//     .insert({
//       meeting_name: meetingName,
//       time: time,
//       duration: duration,
//       attendees: attendees,
//       cost: cost
//     })
// }

// function userExists(user_name, testDb) {
//   const db = testDb || connection

//   return db('users')
//     .where('user_name', user_name)
//     .then(users => users.length > 0)
// }

// function getUserMeetings(user_id, testDb) {
//   const db = testDb || connection;

//   return db("attendees")
//     .join("meetings", "attendees.meeting_id", "=", "meetings.id")
//     .where("attendees.user_id", "=", user_id)
//     .select();
// }

// function writeAttendees(meeting_id, user_id, testDb) {

//   const db = testDb || connection
//   console.log('meeting_id, user_id: ', meeting_id, user_id);
//   return db('attendees')
//     .insert({
//       meeting_id: meeting_id,
//       user_id: user_id
//     })

// }

// function getUserByUsername(user_name, testDb) {

//   const db = testDb || connection
//   return db('users')
//     .select()

// }

//************* */ get meetings
// function getMeetings(testDb) {
//   const db = testDb || connection

//   return db('meetings')
//     .select()
// }

//************   save meetings ()      */

// function saveMeeting({meetingName, time, duration, attendees, cost}, testDb) {
//   const db = testDb || connection

//   return db('meetings')
//     .insert({
//       meeting_name: meetingName,
//       time: time,
//       duration: duration,
//       attendees: attendees,
//       cost: cost
//     })
// }

// function getUserMeetings(user_id, testDb) {
//   const db = testDb || connection

//   return db('attendees')
//     .join('meetings', 'attendees.meeting_id', '=', 'meetings.id')
//     .where('attendees.user_id', '=', user_id)
//     .select()
// }

// function writeAttendees(meeting_id, user_id, testDb) {

//   const db = testDb || connection
//   console.log('meeting_id, user_id: ', meeting_id, user_id);
//   return db('attendees')
//     .insert({
//       meeting_id: meeting_id[0],
//       user_id: user_id
//     })
//     .then(()=>{})
// }

// function getUserByUsername(user_name, testDb) {

//   const db = testDb || connection
//   return db('users')
//     .where('user_name', user_name)
//     .first()
// }

// function saveAttendees(meetingID, attendees) {
//   attendees.map(attendeeUserName => {
//     getUserByUsername(attendeeUserName).
//     then(async attendee => {
//       await writeAttendees(meetingID[0], attendee.id)
//     })
//   })
// }

//userIDs.filter(async user => await writeAttendees(meeting_id, user.id))

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
