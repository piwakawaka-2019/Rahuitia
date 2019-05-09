const express = require('express')
const router = express.Router()

import TeKāhuiMāngai from '../../data/tekahuimangai'


router.get('/', (req, res) => {
  db.getBeers()
  .then(beers => {
    res.json(beers)
  })
})


module.exports = router