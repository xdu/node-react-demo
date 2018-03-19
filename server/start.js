process.env.NODE_ENV = 'development'

const express = require('express')

var app = express()
app.use('/', require('./route/main'))

var port = 5000
app.listen(port, () => console.log('app listening on port ' + port))
