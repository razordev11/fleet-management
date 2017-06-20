var router = require('express').Router();
var mongoose = require('mongoose');
var objectId = require('mongodb').ObjectID;
var Vehicle = require('../models/vehicle');
var usersRoute = require('./usersRoute.js');

// Test get
router.get('/', function (req, res) {
	res.send("live");
});

// Test post
router.post('/', function (req, res) {
	res.send("live");
});

// Test live post
router.post('/p', function (req, res) {
	var d = new Date();
	var date = d.toISOString();
	var liveTrip = {
		date: date,
		lat: req.body.l,
		long: req.body.L,
		speed: req.body.s,
		altitude: "250",
		heading:"100"
	};
	
	Vehicle.findOne({ _id: objectId("593fe40d70d93e2bfc9ca8cd") }).exec().then((vehicle) => {
		var _id = vehicle._id;
		Vehicle.findOneAndUpdate({ _id: objectId(_id) }, { $push: { "live": liveTrip } }, { upsert: true }).exec().then(
			function () {
		        res.status(200);
				res.send('sent!');
			}
		).catch((err) => {
			res.send("Error at POST update: " + err);
		});
	}).catch((err) => {
		res.send("Error at POST: " + err);
	});
});

// Get live trip
router.get('/id/:id', function (req, res) {
	Vehicle.findOne({ _id: objectId(req.params.id) }).exec().then((vehicle) => {
		res.render('live', { items: vehicle });
	}).catch((err) => {
		req.flash('error_msg', err);
		res.redirect('/vehicles');
	});
});

// Update live trip
router.post('/id/:id', function (req, res) {
	var d = new Date();
	var date = d.toISOString();
	var liveTrip = {
		date: date,
		lat: req.body.lat,
		long: req.body.long,
		speed: req.body.speed,
		altitude: req.body.altitude,
		heading: req.body.heading
	};
	Vehicle.findOne({ _id: req.params.id }).exec().then((vehicle) => {
		var _id = vehicle._id;
		Vehicle.findOneAndUpdate({ _id: objectId(_id) }, { $push: { "live": liveTrip } }, { upsert: true }).exec().then(
			function () {
				res.send('sent!');
			}
		).catch((err) => {
			res.send("Error at POST: " + err);
		});
	}).catch((err) => {
		res.send("Error at POST: " + err);
	});
});

module.exports = router;