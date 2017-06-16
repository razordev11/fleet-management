var router = require('express').Router();
var mongoose = require('mongoose');
var objectId = require('mongodb').ObjectID;
var Vehicle = require('../models/vehicle');
var usersRoute = require('./usersRoute.js');

// Get vehicles
router.get('/', ensureAuthenticated, function (req, res) {
	Vehicle.find({}).exec().then((vehicles) => {
		var userVehicles = [];
		for (var i = 0; i < vehicles.length; i++) {
			if (vehicles[i].userId == usersRoute.userId) {
				userVehicles.push(vehicles[i]);
			}
		}
		res.render('vehicles', { items: userVehicles });
	}).catch((err) => {
		req.flash('error_msg', err);
		res.redirect('/vehicles');
	});
});

router.get('/id/:id', function (req, res) {
	Vehicle.findOne({ _id: objectId(req.params.id) }).exec().then((vehicle) => {
		res.json(vehicle);
	}).catch((err) => {
		req.flash('error_msg', err);
		res.redirect('/vehicles');
	});
});

// Create vehicle
router.get('/create', ensureAuthenticated, function (req, res) {
	res.render('addvehicle');
});

router.post('/create', ensureAuthenticated, function (req, res) {
	var newVehicle = new Vehicle({
		userId: usersRoute.userId,
		manufacturer: req.body.manufacturer,
		model: req.body.model,
		registrationPlate: req.body.registrationPlate,
		vin: req.body.vin,
		engineCapacity: req.body.engineCapacity,
		fuelType: req.body.fuelType,
		horsepower: req.body.horsepower,
		fuelConsumption: req.body.fuelConsumption,
		kilometrage: req.body.kilometrage,
		rca: req.body.rca,
		itp: req.body.itp,
		rovinieta: req.body.rovinieta,
		status: req.body.status
	});

	newVehicle.save(function (err, vehicle) {
		if (err) {
			req.flash('error_msg', 'Error adding vehicle.');
			res.redirect('/vehicles');
		} else {
			req.flash('success_msg', 'Vehicle created.');
			res.redirect('/vehicles');
		}
	});
});

// Update vehicle
router.post('/update/:id', function (req, res) {
	var _id = req.params.id,
		updatedVehicle = {
			manufacturer: req.body.manufacturer,
			model: req.body.model,
			registrationPlate: req.body.registrationPlate,
			vin: req.body.vin,
			engineCapacity: req.body.engineCapacity,
			fuelType: req.body.fuelType,
			horsepower: req.body.horsepower,
			fuelConsumption: req.body.fuelConsumption,
			kilometrage: req.body.kilometrage,
			rca: req.body.rca,
			itp: req.body.itp,
			rovinieta: req.body.rovinieta,
			status: req.body.status
		};
	Vehicle.findOneAndUpdate({ _id: objectId(_id) }, { $set: updatedVehicle }, { upsert: true }).exec().then((updatedVehicle) => {
		req.flash('success_msg', 'Vehicle updated.');
		res.redirect('/vehicles');
		// res.json(updatedVehicle);
	}).catch((err) => {
		req.flash('error_msg', err);
		res.redirect('/vehicles');
	});
});

// Delete vehicle
router.get('/delete/:id', function (req, res) {
	Vehicle.findOneAndRemove({
		_id: objectId(req.params.id)
	}).exec().then((vehicle) => {
		req.flash('success_msg', 'Vehicle deleted.');
		res.redirect('/vehicles');
	}).catch((err) => {
		req.flash('error_msg', err);
		res.redirect('/vehicles');
	});
});

// Get all trips	TODO
// router.get('/trips', ensureAuthenticated, function (req, res) {
// 	Vehicle.find({}).exec().then((vehicles) => {
// 		console.log(vehicles);
// 		res.render('trips', { items: vehicles });
// 	}).catch((err) => {
// 		req.flash('error_msg', err);
// 		res.redirect('/trips');
// 	});
// });

// Get trip
router.get('/trips/id/:id', function (req, res) {
	Vehicle.findOne({ _id: objectId(req.params.id) }).exec().then((vehicle) => {
		res.render('trips', { items: vehicle });
	}).catch((err) => {
		req.flash('error_msg', err);
		res.redirect('/trips');
	});
});

// Update vehicle
router.post('/trips/create/:id', function (req, res) {
	var _id = req.params.id;
	var updatedTrip = {
		tripId: req.body.tripId,
		driver: {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			nationalId: req.body.nationalId
		},
		startDate: req.body.startDate,
		stopDate: req.body.stopDate,
		startLocation: {
			lat: req.body.startLat,
			long: req.body.startLong
		},
		stopLocation: {
			lat: req.body.stopLat,
			long: req.body.stopLong
		},
		distance: req.body.distance
	};
	Vehicle.findOneAndUpdate({ _id: objectId(_id) }, { $push: { "trips": updatedTrip } }, { upsert: true }).exec().then((updatedTrip) => {
		req.flash('success_msg', 'Trip updated.');
		res.redirect('/vehicles/trips/id/' + req.params.id);
		// res.json(updatedTrip);
	}).catch((err) => {
		req.flash('error_msg', err);
		res.redirect('/vehicles');
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