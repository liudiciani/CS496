var express = require('express')
var app = express()
var mongoDB = 'mongodb://admin:password@ds151820.mlab.com:51820/cs496';

app.get('/', function (req, res) {
 res.send('Hello World!')
})

app.listen(3000, function () {
 		console.log('Example app listening on port 3000!')
})
