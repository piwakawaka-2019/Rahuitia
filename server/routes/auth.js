const router = require('express').Router()

const { userExists, createUser } = require('../db/users')
const token = require('../auth/token')

router.post('/register', register, token.issue)

function register (req, res, next) {
  // needs to match json date object keys supplied by client
  const { firstName, lastName, userName, hourlyWage, password } = req.body
  userExists(userName)
    .then(exists => {
      if (exists) return res.status(400).send({ message: "User Name Taken" })

      createUser(firstName, lastName, userName, hourlyWage, password)
      // next() in this case is token.issue and returns *2
        .then(() => next())
        .catch(err => res.status(500).send({message: "Server Error"}))
    })
    .catch(err => res.status(500).send({message: "Server Error"}))
}

router.post('/login', token.issue)

module.exports = router
