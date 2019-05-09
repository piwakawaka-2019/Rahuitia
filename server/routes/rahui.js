const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
  db.getBeers()
  .then(beers => {
    res.json(beers)
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getOneBeer(id)
  .then(beer => {
    res.json(beer)
  })
})

module.exports = router