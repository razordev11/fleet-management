var router = require('express').Router();
var mongoose = require('mongoose');
var objectId = require('mongodb').ObjectID;
var Vehicle = require('../models/vehicle');
var Driver = require('../models/driver');

// Get reports
router.get('/', function (req, res) {
	Driver.find({}).exec().then((drivers) => {
		Vehicle.find({}).exec().then((vehicles) => {
			res.render('reports', { vehicles: vehicles, drivers: drivers });
		}).catch((err) => {
			req.flash('error_msg', err);
			res.redirect('/reports');
		});
	}).catch((err) => {
		req.flash('error_msg', err);
		res.redirect('/reports');
	});

});

function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;