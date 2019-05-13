const express = require('express')
const db = require('../db/users')
const router = express.Router()


router.get('/', (req, res) => {
  db.getRahuiInformation()
    .then(rahui => {
      let arr = []

      while (rahui.length) {
        let firstEntry = rahui.shift()

        firstEntry.iwi = JSON.parse(firstEntry.iwi)
        firstEntry.hapu = JSON.parse(firstEntry.hapu)
        firstEntry.iwi_name = [firstEntry.iwi_name]
        firstEntry.hapu_name = [firstEntry.hapu_name]

        firstEntry.geo_ref = JSON.parse(firstEntry.geo_ref)

        let duplicates = rahui.filter(item => {
          return firstEntry.id === item.id
        })

        rahui = rahui.filter(item => {
          return firstEntry.id !== item.id
        })

        if (duplicates.length) {
          let iwiName = duplicates.map(item => item.iwi_name)
          iwiName.push(firstEntry.iwi_name[0])
          let hapuName = duplicates.map(item => item.hapu_name)
          hapuName.push(firstEntry.hapu_name[0])
          iwiName = [...new Set(iwiName)]
          hapuName = [...new Set(hapuName)]

          firstEntry.iwi_name = iwiName
          firstEntry.hapu_name = hapuName
        }

        arr.push(firstEntry)
      }
      res.json(arr)
    })
  })


  router.post('/', async (req, res) => {
    try{
        console.log("req.body:", req.body)
        const rahuiData = req.body;
        const userId = rahuiData.userId
        const iwi = rahuiData.iwi
        const hapu = rahuiData.hapu
        const description = rahuiData.description
        const korero = rahuiData.korero
        const geoRef = rahuiData.geoRef
        const datePlaced = rahuiData.datePlaced
        const dateLifted = rahuiData.dateLifted
        await db.writeRahui(userId, iwi, hapu, description, korero, geoRef, datePlaced, dateLifted);
    
        res.json({})
    }
    catch(err){
        err => res.status(500).json({message: "Server Error"})
    }
})


router.put('/:id', function(req, res, next){
    try{
      console.log(req.body)
      const rahuiId = req.params.id;
      const rahuiData = req.body;
      const iwi = rahuiData.iwi
      const hapu = rahuiData.hapu
      const description = rahuiData.description
      const korero = rahuiData.korero
      const geoRef = rahuiData.geoRef
      const datePlaced = rahuiData.datePlaced
      const dateLifted = rahuiData.dateLifted
      //await does not work here
      db.editRahui(rahuiId, iwi, hapu, description, korero, geoRef, datePlaced, dateLifted);

      res.json({})
  }
  catch(err){
      err => res.status(500).json({message: "Server Error"})
  }
})

module.exports = router

