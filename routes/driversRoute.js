var router = require('express').Router();
var mongoose = require('mongoose');
var objectId = require('mongodb').ObjectID;
var Driver = require('../models/driver');
var usersRoute = require('./usersRoute.js');

// Get drivers
router.get('/', ensureAuthenticated, function (req, res) {
    Driver.find({}).exec().then((drivers) => {
        var userDrivers = [];
        for (var i = 0; i < drivers.length; i++) {
            if (drivers[i].userId == usersRoute.userId) {
                userDrivers.push(drivers[i]);
            }
        }
        res.render('drivers', { items: userDrivers });
    }).catch((err) => {
        req.flash('error_msg', err);
        res.redirect('/drivers');
    });
});

router.get('/id/:id', function (req, res) {
    Driver.findOne({ _id: objectId(req.params.id) }).exec().then((driver) => {
        res.json(driver);
    }).catch((err) => {
        req.flash('error_msg', err);
        res.redirect('/drivers');
    });
});

// Create driver
router.get('/create', ensureAuthenticated, function (req, res) {
    res.render('adddriver');
});

router.post('/create', ensureAuthenticated, function (req, res) {
    var newDriver = new Driver({
        userId: usersRoute.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nationalId: req.body.nationalId,
        address: req.body.address,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        distanceTraveled: 0,
        license: [{ category: req.body.category1, expiryDate: req.body.expiryDate1 }]
    });
    var size = Object.keys(req.body).length; // ES5+
    if (size > 8) {
        for (var i = 0; i < (size - 8) / 2; i++) {
            var j = i + 2;
            newDriver.license.push({ category: req.body['category' + j], expiryDate: req.body['expiryDate' + j] });
        }
    }

    newDriver.save(function (err, driver) {
        if (err) {
            req.flash('error_msg', 'Error adding driver.');
            res.redirect('/drivers');
        } else {
            req.flash('success_msg', 'Driver created.');
            res.redirect('/drivers');
        }
    });
});

// Update driver
router.post('/update/:id', function (req, res) {
    var _id = req.params.id,
        updatedDriver = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            nationalId: req.body.nationalId,
            address: req.body.address,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            distanceTraveled: req.body.distanceTraveled,
            license: [{ category: req.body.category, expiryDate: req.body.expiryDate }]
        };
    Driver.findOneAndUpdate({ _id: objectId(_id) }, { $set: updatedDriver }, { upsert: true }).exec().then((updatedDriver) => {
        req.flash('success_msg', 'Driver updated.');
        res.redirect('/drivers');
        // res.json(updatedDriver);
    }).catch((err) => {
        req.flash('error_msg', err);
        res.redirect('/drivers');
    });
});

// Delete driver
router.get('/delete/:id', function (req, res) {
    Driver.findOneAndRemove({
        _id: objectId(req.params.id)
    }).exec().then((driver) => {
        req.flash('success_msg', 'Driver deleted.');
        res.redirect('/drivers');
    }).catch((err) => {
        req.flash('error_msg', err);
        res.redirect('/drivers');
    });
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash('error_msg', 'You are not logged in');
        res.redirect('/users/login');
    }
}

module.exports = router;