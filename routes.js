var poet = require('./poem-generation/writePoem.js');
var express = require('express');
var app  = express();

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// on the client => something to click that will send this request to the compose endpoint:

app.get('/compose', function(req, res) {
    poet.writePoem(14, function(result) {
      res.status(200).json(result);
      console.log('GET: poem sent to client');
    });
});

// compose sends the text up to the client
// if the user hits save, then the client
// sends the text back to the server and:

app.post('/save', function(req, res) {
  // the text is thrown in the database
});

module.exports = app;