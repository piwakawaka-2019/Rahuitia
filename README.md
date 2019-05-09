# Rāhui

# Final Group Project

Meetings are expensive, but sometimes we forget how expensive they are and feel the need to talk for too long about topics that are unimportant for the meeting purpose.

This is an app to display the costs of meetings, and track the costs of your meetings over time.

The idea of the App is to be able to display the real-time cost of a meeting as it occurs.
This cost is calculated based on the hourly wages of the meeting's attendees and the current duration of the meeting.

The intended effect of this App is to make meeting attendees aware of how much this time is costing the business.


## User Stories

### MVP

As a user:
  * I want to find out more information about the custom of rāhui.
  * I want to find out what locations or areas have rāhui placed on them.
  * I want to see a map of the location of a particular rāhui.
  * I want to find out about the above rāhui, including information on who placed it, their name, iwi, hapū affiliations, and a description of the rāhui (why was it placed etc?)
  * I want to acknowledge or offer my tautoko for a particular rāhui and post to the page how myself or a group I represent will respect this rāhui.
  * I want to create an account and register on behalf of my iwi and authorised person, in order to add a rāhui to the app.
  * I want to select an area on a map when I add a rāhui.
  * I want to post my contact details so if anyone would like to find out further information they can contact me.
  * I want to be able to read the sites content in Te Reo Māori.

### Stretch
  * I want to see a progress bar when I register an account.
  * I want to view news articles or other related resources to a particular rāhui.
  * I want to draw an outline of the rāhui on a map.
  * I want to select language preference.
  * I want to search a location using a search bar.

  ---

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the App |
  | CreateRāhui | View for user to geo-locate and describe Rāhui - this will be a 'stepped' form |
  | Rāhui Map | View to display current Rāhui in map form |
  | Rāhui Map | View to display current Rāhui in map form | 
  | Landing | A landing page that describes what a Rāhui is |
  | About | A detailed about page that describes what the app is, who can and how to use it |
  


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | rāhui | store the list of Rāhui |
  | users | store list of users |
  | iwi | Store list of iwi and hapu |

## Store (made up of the Reducers)
```js
const state ={
    auth,
    rahui,
    users,
    iwi
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

## Route GET /api/rahui/:id

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

## Route GET /api/rahui

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
  There should be five tables for the MVP

### Users
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer | Primary |
  | user_name | String (unique)|
  | first_name | String |
  | middle_name | String |
  | last_name | String |
  | email | String |
  | password_hash | string |

### Rāhui
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer | Primary |
  | user_id | integer |
  | description | string |
  | korero | string |
  | date_placed | integer |
  | date_lifted | integer |
  | location | array |

### Tautoko

  Many Users can tautoko many rahui

 | Column Name | Data Type |
 | --- | --- |
 | id | integer |
 | user_id | Integer |
 | rahui_id | Integer |
 
 ### Iwi

  Many Users can tautoko many rahui

 | Column Name | Data Type |
 | --- | --- |
 | id | integer |
 | user_id | integer |
 | rahui | string |
 
 ---
 
  ### Hapu

  Many Users can tautoko many rahui

 | Column Name | Data Type |
 | --- | --- |
 | id | integer |
 | user_id | integer |
 | hapu | string |
 
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
Rāhui
Login

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

There are several npm scripts created that will be useful for deploying your app to heroku easily.

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
