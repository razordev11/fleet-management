const express = require('express');
const router = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
var userId;

// Register
router.get('/register', function(req, res) {
  res.render('register');
});

// Login
router.get('/login', function(req, res) {
  res.render('login');
});
const { check, validationResult } = require('express-validator');
// Register User
router.post('/register', function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const password2 = req.body.password2;

  // Validation

  check('email', 'Email is not valid').isEmail();

  const errors = validationResult(req);

  if (errors) {
    res.render('register', {
      errors: errors
    });
  } else {
    User.findOne({ username: username })
      .exec()
      .then(foundUser => {
        if (username != foundUser.username) {
          const newUser = new User({
            name: name,
            email: email,
            username: username,
            password: password
          });

          User.createUser(newUser, function(err, user) {
            if (err) throw err;
            console.log('Error: ' + err);
            console.log('User: ' + user);
          });

          req.flash('success_msg', 'You are registered and can now login');
          res.redirect('/users/login');
        } else {
          console.log('Username ' + username + ' already exists.');
          req.flash('error_msg', 'Username ' + username + ' already exists.');
          res.redirect('/users/login');
        }
      })
      .catch(err => {
        console.log(err);
        req.flash('error_msg', err);
        res.redirect('/users/login');
      });
  }
});

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.getUserByUsername(username, function(err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: 'Unknown User' });
      }
      User.comparePassword(password, user.password, function(err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          userId = user._id;
          module.exports.userId = userId;
          return done(null, user);
        } else {
          return done(null, false, { message: 'Invalid password' });
        }
      });
    });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true
  }),
  function(req, res) {
    res.redirect('/');
  }
);

router.get('/logout', function(req, res) {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;
