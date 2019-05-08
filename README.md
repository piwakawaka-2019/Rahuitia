# $how Me The Money

# Week 7 Group Project

Meetings are expensive, but sometimes we forget how expensive they are and feel the need to talk for too long about topics that are unimportant for the meeting purpose.

This is an app to display the costs of meetings, and track the costs of your meetings over time.

The idea of the App is to be able to display the real-time cost of a meeting as it occurs.
This cost is calculated based on the hourly wages of the meeting's attendees and the current duration of the meeting.

The intended effect of this App is to make meeting attendees aware of how much this time is costing the business.


## User Stories

### MVP

As a user:
  * I want to register for the App under my name, and state my hourly wage
  * I want to start a new meeting, and add all the meeting members. (MVP: Add member names and wages manually)
  * I want to start my created meeting, and see a ($) cost tracker display the current meeting cost every second
  * I want to be able to save a meeting's cost, attendess, duration and date/time when it is finished for later viewing
  * I want to be able to view previous meetings in date/time order, and see more information about a past meeting.
  * I want to see a graph of meeting costs over time

### Stretch
  * I want to be able to select existing users of the App as meeting attendees, so that our wages don't have to be shown / inputted manually. If a meeting attendee doesn't have an account, I want to be able to manually add them to the App.
  * I want to set a Maximum Cost an Maximum Duration for my Meeting, and see colourised progress bar displaying both a these
  * I want to be able to state my yearly salary rather than hourly rate as an option on register
  * I want to be able to view all meetings that I am an attenee for, and I want information about my meetings to not be visible to all users of the app.
  * I want to create a group of regular attendees for my meeting group to make setting up my meeting easier.
  * I want to be able to write notes or summaries for meetings upon saving them.

  ---

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the App |
  | CreateMeeting | View for user to arrange meeting attendees and information before starting the timer |
  | Meeting | View to display current meeting time, cost and other information while the meeting is in progress |
  | History | Display a list of past meetings the user has attended with select preview information |
  | PastMeeting | Display a single meeting from the history list, displaying more information and a list of attendees for the past meeting |


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | currentMeeting | Track meeting progress such as current cost and current duration |
  | meetings | store the list of meetings the user has attended in the past |
  | users | store the list of users who can attend meetings |

## Store (made up of the Reducers)
```js
const state ={
    auth,
    currentMeeting,
    users,
    meetingHistory
}

const auth = {
    isFetching: false,
    isAuthenticated: false,
    user: null,
    errorMessage: ""
}

const currentMeeting = {
    meetingName: 'Exciting shite',
    // this is a timestamp string that will be set at the start of the meeting
    time: 'Fri May 03 2019 12:22:50 GMT+1200 (New Zealand Standard Time)',
    // duration will default to null, and be set when meeting is saved
    duration: 3600,
    // username strings
    attendees: ["johndoe", 'janedoe', 'houseofmouse'],
    // cost of each user
    hourlyWages: [100, 100, 100],
    // cost to be set when meeting is saved
    totalCost: 1000
}

const users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        userName: 'johndoe',
        hourlyWage: 100
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        userName: 'janedoe',
        hourlyWage: 100
    },
    {
        firstName: 'Mickey',
        lastName: 'Mouse',
        userName: 'houseofmouse',
        hourlyWage: 100
    }
]

// an array of all the meetings the logged in user has attended
const meetingHistory = [
    {
        meetingName: 'Exciting shite',
        // the time string needs to be converted back to a date object upon extraction
        time: 'Fri May 03 2019 12:22:50 GMT+1200 (New Zealand Standard Time)',
        duration: 3600,
        // the people who attended the meeting
        attendees: [
            {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                userName: 'johndoe',
                hourlyWage: 100
            },
            {
                id: 2,
                firstName: 'Jane',
                lastName: 'Doe',
                userName: 'janedoe',
                hourlyWage: 100
            }
        ],
        // cost to be set when meeting is saved
        totalCost: 1000
    }
    // more arrays......
]
```


 ## Actions

 ### meetings

 | type | data | purpose |
 | --- | --- | --- |
 | RECEIVE_MEETINGS | meetings | retreive meetings from the db and store in redux |
 | ADD_MEETING | meeting | Add a single meeting to the history after it is created |

 ### users
 | type | data | purpose |
 | --- | --- | --- |
 | RECEIVE_USERS | users | retreive the users from the server |

 ### currentMeeting
  | type | data | purpose |
| --- | --- | --- |
| START_MEETING | attendees ([]), meeting_name | a meeting has started, set initial meeting state |
| END_MEETING | null | Set meeting in progress flag to false |  
| TICK_ONE_SECOND | null | Increase running total by 1s worth of $ |
| RESET_MEETING | null | Revert to initial state |



## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token | 
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |
| Get | /api/meetings | Yes | Get a Users Meeting Histroy | An Array of Meetings |
| Post | /api/meetings | Yes | Save a completed meeting | The Meeting that has been saved in db read format |
| Get | /api/meetings/:id/users | Yes | Get the attendees of a Meeting | An Array of User objects |
| Get | /api/users | Yes | Get the users of the app | An Array of User Objects |

```sh
npm install
npx knex migrate:latest
npx knex seed:run
mv .env.example .env
```

## Route - POST /api/auth/login

#### Data in
```sh
{
    userName: 'john',
    password: 'god' //password given as plain text
}
```
#### Data Out
```sh
{
    JWT: 'sdf8fd74ergdifgnerg05g'
}
```

## Route - POST	/api/auth/register

#### Data in
```sh
{
    firstName: 'John'
    lastName: 'smith'
    userName: 'johnny',
    hourlyWage: 100, //integer
    password: 'god' //Password given as plain text
}
```
#### Data Out
```sh
{
    //Redirect to login page
    status: 200, //Unsure of exact response at this stage but will be some kind of status 
    status: 400 
    //200 ok
}
```

## Route GET /api/meetings

#### Data in
```sh

```
#### Data Out
```sh
[
    {
        id: 1,
        meetingName: 'my meeting',
        time: 345677567, //this is a time stamp that will need to be converted
        duration: 57345, //Number of seconds
        attendees: 4, //number of attendees
        cost: 800 //total cost of meeting
    },
    {
        id: 2,
        meetingName: 'my meeting',
        time: 4534543436, //this is a time stamp that will need to be converted
        duration: 57345, //Number of seconds
        attendees: 4, //number of attendees,
        cost: 700
    }
]
```

## Route POST /api/meetings

#### Data in
```sh
{
    meetingName: 'coolMeeting',
    time: 345344575, //Start of meeting
    duration: 57345, //Number of seconds
    attendees: [
        'theone', //These are usernames and should be unique
        'amiez',
        'bigbruce',
        'tinytom'
    ],
    cost: 1200 // Total cost of meeting
}
```
#### Data Out
```sh
{
    //redirect to meeting summary page
    status: 200 //not sure exactly what this will be yet
}
```

## Route GET /api/meetings/:id/users

#### Data in
```sh

```
#### Data Out
```sh
[
    {
        id: 23,
        firstName: 'john',
        lastName: 'wick',
        userName: 'theone',
        hourlyWages: 100
    },
    {
        id: 54,
        firstName: 'Amy',
        lastName: 'Smith',
        userName: 'amiez',
        hourlyWages: 50
    }
]
```

## Route GET /api/users

#### Data in
```sh

```
#### Data Out
```sh
[
    {
        id: 23,
        firstName: 'john',
        lastName: 'wick',
        userName: 'theone',
        hourlyWages: 100
    },
    {
        id: 54,
        firstName: 'Amy',
        lastName: 'Smith',
        userName: 'amiez',
        hourlyWages: 50
    }
]
```


## DB (Server Side)
  There should be three tables for MVP

### Users
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | first_name | String |
  | last_name | String |
  | user_name | String (unique)|
  | hourly_wage | decimal |
  | password_hash | string |

### Meetings
  | Column Name | Data Type |
  | --- | --- |
  | id | integer |
  | meeting_name | string |
  | time | string |
  | duration | integer |
  | attendees | integer |
  | cost | Decimal |

### Attendees (Join Table M2M)

  Many Users attend Many Meetings

 | Column Name | Data Type |
 | --- | --- |
 | id | integer |
 | meeting_id | Integer |
 | user_id | Integer |
 
 ---

## Setup

Run the following commands in your terminal:

```sh
npm install
npx knex migrate:latest
npx knex seed:run
mv .env.example .env
```

To run in development:
```sh
npm run dev
```

To run in production:
```sh
npm start
```


## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres
$how Me The Money
Login

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
npm run h:deploy
```

Run heroku migrations:
```sh
npm run h:migrate
```

Run heroku seeds:
```sh
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
npm run h:rollback
```


### Ta-Da!
Your app should be deployed!
