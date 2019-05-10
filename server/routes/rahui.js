const express = require('express')
const db = require('../db/users')
const router = express.Router()

router.get('/', (req, res) => {
  db.getRahuiInformation()
  .then(rahui => { 
    
    let arr = []

    while(rahui.length){
      let firstEntry = rahui.shift()

      firstEntry.iwi_name = [firstEntry.iwi_name]
      firstEntry.hapu_name = [firstEntry.hapu_name]
      
      let duplicates = rahui.filter(item => {
        return firstEntry.id === item.id
      }) 

      rahui = rahui.filter(item => {
        return firstEntry.id !== item.id
      })

      if(duplicates.length){
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


module.exports = router