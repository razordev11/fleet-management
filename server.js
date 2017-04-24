// Using express: http://expressjs.com/
var express = require('express');
// Create the app
var app = express();

// File System for loading the list of words
var fs = require('fs');

// Cors for allowing "cross origin resources"
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
var cors = require('cors');
app.use(cors());

// This is for hosting files
app.use(express.static('public'));

// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 3000, listen);

// This call back just tells us that the server has started
function listen() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Application started at http://' + host + ':' + port);
}
