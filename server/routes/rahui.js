const express = require('express')
const db = require('../db/users')
const router = express.Router()

router.get('/', (req, res) => {
  db.getRahuiInformation()
  .then(rahui => {
    res.json(rahui)
  })
})

module.exports = router