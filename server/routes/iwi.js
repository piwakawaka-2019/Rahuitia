const express = require('express')
const router = express.Router()
const iwi = require('../../data/tekahuimangai')

router.get('/', (req, res) => {
    firstLevel = Object.keys(iwi)
    console.log(firstLevel);
    fill = []
    console.log(typeof firstLevel)
    // firstLevel.forEach(function (element) {
    //     console.log(element);
    // });
    for (i = 0; i < firstLevel.length; i++) {
        fill.push(iwi[firstLevel[i]])
    }
    //console.log(firstLevel.length)
    //console.log(iwi[firstLevel[1]]);
    console.log(fill);


    res.json(fill)
})


module.exports = router