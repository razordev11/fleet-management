var mongoose = require('mongoose');

var TripsSchema = mongoose.Schema({
    tripId: {
        type: String
    },
    driver: {
        firstName: String,
        lastName: String,
        nationalId: String
    },
    startDate: {
        type: Date, default: Date.now
    },
    stopDate: {
        type: Date, default: Date.now
    },
    startLocation: {
        lat: String,
        long: String
    },
    stopLocation: {
        lat: String,
        long: String
    },
    distance: {
        type: Number, default: 0
    }
});

var VehicleSchema = mongoose.Schema({
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
    trips: {
        type: [TripsSchema],
        required: false
    }
});

var Vehicle = module.exports = mongoose.model('Vehicle', VehicleSchema);