const {
  generatePasswordHash
} = require('../auth/hash')

const connection = require('./connection')


function createUser( first_name, last_name, user_name, hourly_wage, password, testDb) {
  const db = testDb || connection

  return generatePasswordHash(password)
    .then(hash => {
      return db('users').insert({

        first_name: first_name,
        last_name: last_name,
        user_name: user_name,
        hourly_wage: hourly_wage,    
        password_hash: hash,
      })
    })
}

function userExists(user_name, testDb) {
  const db = testDb || connection

  return db('users')
    .where('user_name', user_name)
    .then(users => users.length > 0)
}


//************* */get user function ()
function getUsers(testDb) {
  const db = testDb || connection

  return db('users')
    .select()

}

//************* */ get meetings
function getMeetings(testDb) {
  const db = testDb || connection

  return db('meetings')
    .select()
}



//************   save meetings ()      */

function saveMeeting({meetingName, time, duration, attendees, cost}, testDb) {
  const db = testDb || connection

  return db('meetings')
    .insert({
      meeting_name: meetingName,
      time: time,
      duration: duration,
      attendees: attendees,
      cost: cost
    })
}

function getAttendees(meeting_id, testDb) {
  const db = testDb || connection

  return db('attendees')
    .join('users', 'attendees.user_id', '=', 'users.id')
    .where('attendees.meeting_id', '=', meeting_id)
    .select(
      'user_id as id', 
      'first_name as firstName', 
      'last_name as lastName',
      'user_name as userName',
      'hourly_wage as hourlyWages'
    )
}


function getUserMeetings(user_id, testDb) {
  const db = testDb || connection

  return db('attendees')
    .join('meetings', 'attendees.meeting_id', '=', 'meetings.id')
    .where('attendees.user_id', '=', user_id)
    .select()
}

function writeAttendees(meeting_id, user_id, testDb) {
  
  const db = testDb || connection
  console.log('meeting_id, user_id: ', meeting_id, user_id);
  return db('attendees')
    .insert({
      meeting_id: meeting_id,
      user_id: user_id
    })
    //.then(()=>{})
}


function getUserByUsername(user_name, testDb) {
  
  const db = testDb || connection
  return db('users')
    .select()

}

//************* */ get meetings
function getMeetings(testDb) {
  const db = testDb || connection

  return db('meetings')
    .select()
}



//************   save meetings ()      */

function saveMeeting({meetingName, time, duration, attendees, cost}, testDb) {
  const db = testDb || connection

  return db('meetings')
    .insert({
      meeting_name: meetingName,
      time: time,
      duration: duration,
      attendees: attendees,
      cost: cost
    })
}

function getAttendees(meeting_id, testDb) {
  const db = testDb || connection

  return db('attendees')
    .join('users', 'attendees.user_id', '=', 'users.id')
    .where('attendees.meeting_id', '=', meeting_id)
    .select()
}

function getUserMeetings(user_id, testDb) {
  const db = testDb || connection

  return db('attendees')
    .join('meetings', 'attendees.meeting_id', '=', 'meetings.id')
    .where('attendees.user_id', '=', user_id)
    .select()
}

function writeAttendees(meeting_id, user_id, testDb) {
  
  const db = testDb || connection
  console.log('meeting_id, user_id: ', meeting_id, user_id);
  return db('attendees')
    .insert({
      meeting_id: meeting_id[0],
      user_id: user_id
    })
    .then(()=>{})
}


function getUserByUsername(user_name, testDb) {
  
  const db = testDb || connection
  return db('users')
    .where('user_name', user_name)
    .first()
}

function saveAttendees(meetingID, attendees) {
  attendees.map(attendeeUserName => {
    getUserByUsername(attendeeUserName).
    then(async attendee => {
      await writeAttendees(meetingID[0], attendee.id)
    })
  })
}
 

  //userIDs.filter(async user => await writeAttendees(meeting_id, user.id))



module.exports = {
  createUser,
  userExists,
  getUserByUsername,
  getUsers,
  getMeetings,
  saveMeeting,
  getAttendees,
  getUserMeetings,
  writeAttendees,
  saveAttendees
}
