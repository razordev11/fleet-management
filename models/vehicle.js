var mongoose = require('mongoose');

var TripsSchema = mongoose.Schema({
    tripId: String,
    driver: {
        firstName: String,
        lastName: String,
        nationalId: String
    },
    startDate: String,
    stopDate: String,
    startLocation: {
        lat: String,
        long: String
    },
    stopLocation: {
        lat: String,
        long: String
    },
    distance: Number
}, { _id: false });

var VehicleSchema = mongoose.Schema({
    userId: {
        type: String
    },
    manufacturer: {
        type: String
    },
    model: {
        type: String
    },
    registrationPlate: {
        type: String
    },
    vin: {
        type: String
    },
    engineCapacity: {
        type: String
    },
    fuelType: {
        type: String
    },
    horsepower: {
        type: String
    },
    fuelConsumption: {
        type: String
    },
    kilometrage: {
        type: Number
    },
    rca: {
        type: String
    },
    itp: {
        type: String
    },
    rovinieta: {
        type: String
    },
    status: {
        type: String
    },
    trips: [TripsSchema]
});

var Vehicle = module.exports = mongoose.model('Vehicle', VehicleSchema);