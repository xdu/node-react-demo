var express = require('express')
var router = express.Router()

router.use(function log(req, res, next) {
    console.log('Time : ', Date.now())
    next()
})

router.get('/', function(req, res) {
    res.send("Response from main route")
})

module.exports = router