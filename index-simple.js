/**
 * entry point for the web service
 */
// app = require('express')(); <- shorthand, don't do this if this is a group assignment :D
const express = require('express');
const app = express();

var port = process.env.PORT || 1300;
app.set('port', port);

app.get('/ping', function (req, res) {
  res.send('pong');
});

var server = app.listen(app.get('port'));
