var router = require('express').Router();
var mongoose = require('mongoose');
var objectId = require('mongodb').ObjectID;
var Driver = require('../models/driver');

// Get drivers
router.get('/', function (req, res) {
	Driver.find({}).exec().then((drivers) => {
		res.render('drivers', { items: drivers });
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
router.get('/create', function (req, res) {
	res.render('adddriver');
});

router.post('/create', function (req, res) {
	var newDriver = new Driver({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		nationalId: req.body.nationalId,
		address: req.body.address,
		email: req.body.email,
		phoneNumber: req.body.phoneNumber,
		distanceTraveled: 0
	});

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
			distanceTraveled: req.body.distanceTraveled
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

// function ensureAuthenticated(req, res, next) {
// 	if (req.isAuthenticated()) {
// 		return next();
// 	} else {
// 		//req.flash('error_msg','You are not logged in');
// 		res.redirect('/users/login');
// 	}
// }

module.exports = router;