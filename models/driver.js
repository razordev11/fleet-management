var mongoose = require('mongoose');

var LicenseSchema = mongoose.Schema({
    category: String,
    expiryDate: String
}, { _id: false });

var DriverSchema = mongoose.Schema({
    userId: {
        type: String
    },
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
    },
    license: [LicenseSchema]
});

var Driver = module.exports = mongoose.model('Driver', DriverSchema);