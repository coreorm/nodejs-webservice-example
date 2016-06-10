/**
 * entry point for the web service
 */
// app = require('express')(); <- shorthand, don't do this if this is a group assignment :D
const express = require('express');
const app = express();

const multiply = require('./app/service/multiply');

var port = process.env.PORT || 5000;
app.set('port', port);

/**
 * home page
 */
app.get('/', function (req, res) {
  res.send('<div align="center"><h1>Hello world I am a web service</h1><p>ping me gently</p></div>');
});

/**
 * ping/pong
 */
app.get('/ping', function (req, res) {
  res.send('pong');
});

/**
 * the multiplier
 */
app.get('/:x/x/:y', function (req, res) {
  res.json({
    input: req.params,
    result: multiply(req.params.x, req.params.y)
  });
});

/**
 * async - response will send before task is finished
 */
app.get('/async', function (req, res) {
  var d = new Date();
  console.log(d.getTime() + ' start processing');
  var done = function () {
    // simulate a callback
    var d = new Date();
    console.log(d.getTime() + '  now we are done');
  };

  // operation that takes 3 seconds
  setTimeout(function() {
    done();
  }, 3000);

  // response that sends right away
  res.send('Order received, we are on it.');
});

// listen
var server = app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + server.address().port);
});
