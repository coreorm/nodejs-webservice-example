/**
 * entry point for the web service
 */
// app = require('express')(); <- shorthand, don't do this if this is a group assignment :D
const express = require('express');
const app = express();

const multiply = require('./app/service/multiply');

var port = process.env.PORT || 1300;
app.set('port', port);

app.get('/', function (req, res) {
  res.send('<div align="center"><h1>Hello world I am a web service</h1><p>ping me gently</p></div>');
});

app.get('/ping', function (req, res) {
  res.send('pong');
});

app.get('/:x/x/:y', function (req, res) {
  res.json({
    input: req.params,
    result: multiply(req.params.x, req.params.y)
  });
});

// listen
var server = app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + server.address().port);
});
