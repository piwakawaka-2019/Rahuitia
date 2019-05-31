const envConfig = require('dotenv').config()
if(envConfig.error) throw envConfig.error

var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var db = require('knex')(config)

const server = require('./server')
const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
