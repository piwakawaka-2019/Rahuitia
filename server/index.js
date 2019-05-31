const envConfig = require('dotenv').config()
if(envConfig.error) throw envConfig.error

const knex = require('knex')
const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]

const server = require('./server')
const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
