const express = require('express')
const router = express.Router()
const iwi = require('../../data/tekahuimangai')

router.get('/', (req, res) => {
res.json(iwi)
})


module.exports = router