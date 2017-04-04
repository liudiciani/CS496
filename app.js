var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var mongoDB = 'mongodb://admin:password@ds151820.mlab.com:51820/cs496';
var MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect(mongoDB, (err, database) => {
  if (err) return console.log(err)
  db = database

  app.listen(3000, function() {
    console.log('listening on 3000')
  })

  app.use(bodyParser.urlencoded({extended: true}))

  app.get('/', function (req, res) {
  //  res.send('Hello World!')
    res.sendFile(path.join(__dirname + '/index.html'));
  })

  app.post('/users', function(req, res) {
    db.collection('users').save(req.body, (err, result) => {
      if (err) return console.log(err)

      console.log('saved to database')
      res.redirect('/')
    })
  })
})
