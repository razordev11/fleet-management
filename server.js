// Using express: http://expressjs.com/
var express = require('express');

// Init App
var app = express();

var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var helmet = require('helmet');
//var assert = require('assert');

// File System for loading the list of words
var fs = require('fs');

// Cors for allowing "cross origin resources"
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
// var cors = require('cors');
// app.use(cors());

// Helmet Middleware to secure HTTP headers
app.use(helmet());

var dbUrl = 'mongodb://test:testPassword2017@ds141351.mlab.com:41351/mlab-db';
// var dbUrl = 'mongodb://localhost/fleetmanagement';
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl);
// mongoose.coonnection.close();

var routes = require('./routes/index');
var usersRoute = require('./routes/usersRoute');
var driversRoute = require('./routes/driversRoute');
var vehiclesRoute = require('./routes/vehiclesRoute');
var reportsRoute = require('./routes/reportsRoute');
var liveRoute = require('./routes/liveRoute');

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({
  defaultLayout: 'layout',
  helpers: {
    inc: function (value, options) {
      return parseInt(value) + 1;
    },
    json: function (content) {
      return JSON.stringify(content);
    },
    ifDate: function (value, options) {
      // console.log(Date(value) + ">" + new Date());
      var x = new Date(value);
      var y = new Date();
      x1 = +x; // convert to number
      y1 = +y;
      var threshold = 1200000000; // two weeks alert
      if (x1 < y1) {
        return "Expired";
      } else if (+x == +y) {
        return "Expires today";
      } else if ( (x1 - y1) < threshold) {
        return "Expires";
      }      
    },
    reverse: function (value, options) {
      value.reverse();
    },
    convertTime: function (value, options) {
      d = new Date(value);
      return d.toLocaleTimeString();
    },
    convertDate: function (value, options) {
      d = new Date(value);
      dM = d.getMonth();
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return months[dM] + " " + d.getDate() + ", " + d.getFullYear();
    }
  }
}));
app.set('view engine', 'handlebars');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
var expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
app.use(session({
  secret: 'rand0ms3cr3tSession',
  saveUninitialized: true,
  resave: false,
  cookie: {
    secure: true,
    httpOnly: true,
    domain: 'afm.herokuapp.com',
    path: 'users/login',
    expires: expiryDate
  }
}));

// Express Validator
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.user = req.user || null;
  next();
});

app.use('/', routes);
app.use('/users', usersRoute);
app.use('/drivers', driversRoute);
app.use('/vehicles', vehiclesRoute);
app.use('/reports', reportsRoute);
app.use('/live', liveRoute);

// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 3000, listen);

// if (process.env.OS == 'Windows_NT') {
//   require('child_process').spawn('explorer', ['http://localhost:3000']);
// }

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Application started at http://' + host + ':' + port);
}