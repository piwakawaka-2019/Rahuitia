const envConfig = require('dotenv').config()
if(envConfig.error) throw envConfig.error

var Knex = require('knex')
var config = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(config)

const server = require('./server')
const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
