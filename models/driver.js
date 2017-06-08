var mongoose = require('mongoose');

var DriverSchema = mongoose.Schema({
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	nationalId: {
		type: String
	},
	address: {
		type: String
	},
	email: {
		type: String
	},
	phoneNumber: {
		type: String
	},
	distanceTraveled: {
		type: Number, default: 0
	}
});

var Driver = module.exports = mongoose.model('Driver', DriverSchema);