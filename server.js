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
app.use(express.static('Public'));

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'db'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    
    console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM DB', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});

connection.end();
//app.get('/', function(req, resp) {});


// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 3000, listen);

if (process.env.OS == 'Windows_NT') {
    require('child_process').spawn('explorer', ['http://localhost:3000']);
}

// This call back just tells us that the server has started
function listen() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Application started at http://' + host + ':' + port);
}
