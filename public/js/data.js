var allDrivers = [
    {
        "userId": "592a9c2c6f35862ac089e1a0",
        "_id": ObjectId("593d4c062f0f8631cc68437a"),
        "firstName": "John",
        "lastName": "Doe",
        "nationalId": "1810329135411",
        "address": "Unirii 1, Bucharest",
        "email": "john.doe@gmail.com",
        "phoneNumber": "0732166221",
        "distanceTraveled": 238,
        "license": [{
            "category": "B",
            "expiryDate": "July 20, 2017"
        }]
    }, {
        "userId": "592a9c2c6f35862ac089e1a0",
        "_id": ObjectId("593d4c062f0f8631cc68437b"),
        "firstName": "Anna",
        "lastName": "Craig",
        "nationalId": "2820329135412",
        "address": "Unirii 2, Bucharest",
        "email": "anna.craig@gmail.com",
        "phoneNumber": "0732166222",
        "distanceTraveled": 178,
        "license": [{
            "category": "B",
            "expiryDate": "July 20, 2018"
        }]
    }, {
        "userId": "592a9c2c6f35862ac089e1a0",
        "_id": ObjectId("593d4c062f0f8631cc68437c"),
        "firstName": "Michael",
        "lastName": "Douglas",
        "nationalId": "1830329135413",
        "address": "Unirii 3, Bucharest",
        "email": "michael.douglas@gmail.com",
        "phoneNumber": "0732166223",
        "distanceTraveled": 26,
        "license": [{
            "category": "B",
            "expiryDate": "June 20, 2017"
        }]
    }, {
        "userId": "592a9c2c6f35862ac089e1a0",
        "_id": ObjectId("593d4c062f0f8631cc68437d"),
        "firstName": "Richard",
        "lastName": "Gere",
        "nationalId": "1840329135414",
        "address": "Unirii 4, Bucharest",
        "email": "richard.gere@gmail.com",
        "phoneNumber": "0732166224",
        "distanceTraveled": 1717,
        "license": [{
            "category": "C",
            "expiryDate": "July 20, 2019"
        }]
    }, {
        "userId": "592a9c2c6f35862ac089e1a0",
        "_id": ObjectId("593d4c062f0f8631cc684370"),
        "firstName": "Andrei",
        "lastName": "Ulinici",
        "nationalId": "1940329133406",
        "address": "Unirii, bl P3B, sc B, ap 21",
        "email": "andrexpert94@gmail.com",
        "phoneNumber": "732166221",
        "distanceTraveled": 0
    }, {
        "userId": "592a9c2c6f35862ac089e1a0",
        "_id": ObjectId("593d4c062f0f8631cc68437e"),
        "firstName": "Katy",
        "lastName": "Perry",
        "nationalId": "2850329135415",
        "address": "Unirii 5, Bucharest",
        "email": "katy.perry@gmail.com",
        "phoneNumber": "0732166225",
        "distanceTraveled": 0,
        "license": [{
            "category": "B",
            "expiryDate": "July 20, 2019"
        }]
    }, {
        "userId": "592a9c2c6f35862ac089e1a0",
        "_id": ObjectId("593d4c062f0f8631cc68437f"),
        "firstName": "Sam",
        "lastName": "Smith",
        "nationalId": "1860329135416",
        "address": "Unirii 6, Bucharest",
        "email": "sam.smith@gmail.com",
        "phoneNumber": "0732166226",
        "distanceTraveled": 0,
        "license": [{
            "category": "D",
            "expiryDate": "August 20, 2019"
        }]
    }, {
        "userId": "592a9c2c6f35862ac089e1a0",
        "_id": ObjectId("593d4c062f0f8631cc684371"),
        "userId": "592a9c2c6f35862ac089e1a0",
        "firstName": "Will",
        "lastName": "Smith",
        "nationalId": "1870329135417",
        "address": "Unirii 7, Bucharest",
        "email": "will.smith@gmail.com",
        "phoneNumber": "0732166227",
        "distanceTraveled": 0,
        "license": [{
            "category": "C1",
            "expiryDate": "March 20, 2019"
        }]
    }];

var allVehicles = [{
    "userId": "592a9c2c6f35862ac089e1a0",
    "manufacturer": "Citroen",
    "model": "C3",
    "registrationPlate": "B-58-PKA",
    "vin": "VF7FCK6EK8A001151",
    "engineCapacity": "1200",
    "fuelType": "Petrol",
    "horsepower": "67",
    "fuelConsumption": "6.1",
    "kilometrage": 10000,
    "rca": "20 July, 2017",
    "itp": "15 March, 2018",
    "rovinieta": "10 February 2018",
    "status": "ok",
    "trips": [{
        "tripId": "B-58-PKA-0000",
        "driver": {
            "firstName": "John",
            "lastName": "Doe",
            "nationalId": "1810329135411"
        },
        "startDate": "2017-04-29T13:28:06.419Z",
        "stopDate": "2017-04-29T15:40:00.000Z",
        "startLocation": {
            "lat": "44.4447497",
            "long": "26.0532043"
        },
        "stopLocation": {
            "lat": "44.3428213",
            "long": "28.0332143"
        },
        "distance": 171
    }, {
        "tripId": "B-58-PKA-0001",
        "driver": {
            "firstName": "John",
            "lastName": "Doe",
            "nationalId": "1810329135411"
        },
        "startDate": "2017-04-30T10:28:06.000Z",
        "stopDate": "2017-04-30T11:20:06.000Z",
        "startLocation": {
            "lat": "44.3428213",
            "long": "28.0332143"
        },
        "stopLocation": {
            "lat": "44.2037834",
            "long": "28.6335817"
        },
        "distance": 67
    }],
    "live": [
        {
            "date": "2017-04-20T08:00:00.000Z",
            "lat": "44.4305693",
            "long": "25.9884191",
            "speed": "80",
            "altitude": "150",
            "heading": "10"
        },
        {
            "heading": "15",
            "altitude": "160",
            "speed": "90",
            "long": "25.9856301",
            "lat": "44.4305693",
            "date": "2017-06-17T18:43:41.881Z"
        },
        {
            "heading": "16",
            "altitude": "165",
            "speed": "95",
            "long": "25.9856663",
            "lat": "44.4305693",
            "date": "2017-06-17T18:44:47.404Z"
        }
    ]
}, {
    "userId": "592a9c2c6f35862ac089e1a0",
    "manufacturer": "Ford",
    "model": "Transit",
    "registrationPlate": "B-58-PKB",
    "vin": "VF7FCK6EK8A00112",
    "engineCapacity": "1700",
    "fuelType": "Diesel",
    "horsepower": "163",
    "fuelConsumption": "6.8",
    "kilometrage": 20000,
    "rca": "5 December, 2017",
    "itp": "15 March, 2018",
    "rovinieta": "10 February 2018",
    "status": "windshield broken",
    "trips": [{
        "tripId": "B-58-PKB-0000",
        "driver": {
            "firstName": "Anna",
            "lastName": "Craig",
            "nationalId": "2820329135412"
        },
        "startDate": "2017-04-20T08:00:00.000Z",
        "stopDate": "2017-04-20T10:00:00.000Z",
        "startLocation": {
            "lat": "44.4305693",
            "long": "25.9884191"
        },
        "stopLocation": {
            "lat": "45.3485837",
            "long": "25.5483056"
        },
        "distance": 131
    }, {
        "tripId": "B-58-PKB-0001",
        "driver": {
            "firstName": "Anna",
            "lastName": "Craig",
            "nationalId": "2820329135412"
        },
        "startDate": "2017-04-21T09:00:00.000Z",
        "stopDate": "2017-04-21T10:00:00.000Z",
        "startLocation": {
            "lat": "45.3485837",
            "long": "25.5483056"
        },
        "stopLocation": {
            "lat": "45.6423991",
            "long": "25.5885519"
        },
        "distance": 47
    }],
    "live": []

}, {
    "userId": "592a9c2c6f35862ac089e1a0",
    "manufacturer": "Mitsubishi",
    "model": "Pajero",
    "registrationPlate": "B-58-PKC",
    "vin": "VF7FCK6EK8A001153",
    "engineCapacity": "3200",
    "fuelType": "Diesel",
    "horsepower": "200",
    "fuelConsumption": "8.5",
    "kilometrage": 30000,
    "rca": "20 September, 2017",
    "itp": "15 March, 2018",
    "rovinieta": "10 February 2018",
    "status": "ok",
    "trips": [{
        "tripId": "B-58-PKC-0000",
        "driver": {
            "firstName": "Michael",
            "lastName": "Douglas",
            "nationalId": "1830329135413"
        },
        "startDate": "2017-04-10T11:28:06.419Z",
        "stopDate": "2017-04-10T11:50:06.419Z",
        "startLocation": {
            "lat": "44.4354447",
            "long": "26.1016731"
        },
        "stopLocation": {
            "lat": "44.4357327",
            "long": "26.0477521"
        },
        "distance": 5
    }, {
        "tripId": "B-58-PKC-0001",
        "driver": {
            "firstName": "Michael",
            "lastName": "Douglas",
            "nationalId": "1830329135413"
        },
        "startDate": "2017-04-10T13:20:06.419Z",
        "stopDate": "2017-04-10T13:40:06.419Z",
        "startLocation": {
            "lat": "44.4357327",
            "long": "26.0477521"
        },
        "stopLocation": {
            "lat": "44.439188",
            "long": "26.102132"
        },
        "distance": 5.6
    }, {
        "tripId": "B-58-PKC-0002",
        "driver": {
            "firstName": "Michael",
            "lastName": "Douglas",
            "nationalId": "1830329135413"
        },
        "startDate": "2017-03-10T17:00:06.419Z",
        "stopDate": "2017-03-10T17:20:06.419Z",
        "startLocation": {
            "lat": "44.439188",
            "long": "26.102132"
        },
        "stopLocation": {
            "lat": "44.556222",
            "long": "26.072101"
        },
        "distance": 15.4
    }],
    "live": []
}, {
    "userId": "592a9c2c6f35862ac089e1a0",
    "manufacturer": "Tesla",
    "model": "Model S",
    "registrationPlate": "B-58-PKD",
    "vin": "VF7FCK6EK8A001154",
    "engineCapacity": "0",
    "fuelType": "Electric",
    "horsepower": "421",
    "fuelConsumption": "2.64",
    "kilometrage": 40000,
    "rca": "2 July, 2017",
    "itp": "11 March, 2018",
    "rovinieta": "16 February 2018",
    "status": "ok",
    "trips": [{
        "tripId": "B-58-PKD-0000",
        "driver": {
            "firstName": "Richard",
            "lastName": "Gere",
            "nationalId": "1840329135414"
        },
        "startDate": "2017-04-15T00:00:00.000Z",
        "stopDate": "2017-04-15T18:35:00.000Z",
        "startLocation": {
            "lat": "44.43056",
            "long": "25.98907"
        },
        "stopLocation": {
            "lat": "52.5657575",
            "long": "13.5401957"
        },
        "distance": 1717
    }],
    "live": []
}]
