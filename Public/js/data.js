var allDrivers = [{
    "firstName": "John",
    "lastName": "Doe",
    "id": "1810329135411",
    "address": "Unirii 1, Bucharest",
    "email": "john.doe@gmail.com",
    "phoneNumber": "0732166221",
    "distanceTraveled": 200
	}, {
    "firstName": "Anna",
    "lastName": "Craig",
    "id": "2820329135412",
    "address": "Unirii 2, Bucharest",
    "email": "anna.craig@gmail.com",
    "phoneNumber": "0732166222",
    "distanceTraveled": 40
	}, {
    "firstName": "Michael",
    "lastName": "Douglas",
    "id": "1830329135413",
    "address": "Unirii 3, Bucharest",
    "email": "michael.douglas@gmail.com",
    "phoneNumber": "0732166223",
    "distanceTraveled": 130
	}, {
    "firstName": "Richard",
    "lastName": "Gere",
    "id": "1840329135414",
    "address": "Unirii 4, Bucharest",
    "email": "richard.gere@gmail.com",
    "phoneNumber": "0732166224",
    "distanceTraveled": 120
	}];

var allVehicles = [{
    "details": {
        "manufacturer": "Citroen",
        "model": "C3",
        "registrationPlate": "B 58 PKA",
        "vin": "VF7FCK6EK8A001151",
        "engineCapacity": "1200",
        "fuelType": "Petrol",
        "horsepower": "67",
        "fuelConsumption": "6.1",
        "kilometrage": 10000
    },
    "trips": [{
        "id": "B 58 PKA-0000",
        "driver": {
            "firstName": "John",
            "lastName": "Doe",
            "id": "1810329135411"
        },
        "startDate": "2017-03-21T13:28:06.419Z",
        "stopDate": "2017-03-21T16:28:00.000Z",
        "startLocation": {
            "lat": "44.4378043",
            "long": "26.0245982"
        },
        "stopLocation": {
            "lat": "44.3338331",
            "long": "28.0247929"
        },
        "distance": 160
		}, {
        "id": "B 58 PKA-0001",
        "driver": {
            "firstName": "John",
            "lastName": "Doe",
            "id": "1810329135411"
        },
        "startDate": "2017-03-22T10:28:06.419Z",
        "stopDate": "2017-03-22T13:28:06.419Z",
        "startLocation": {
            "lat": "44.2462965",
            "long": "28.2683479"
        },
        "stopLocation": {
            "lat": "44.1812565",
            "long": "28.5592996"
        },
        "distance": 40
		}]
	}, {
    "details": {
        "manufacturer": "Ford",
        "model": "Transit",
        "registrationPlate": "B 58 PKB",
        "vin": "VF7FCK6EK8A00112",
        "engineCapacity": "1700",
        "fuelType": "Diesel",
        "horsepower": "163",
        "fuelConsumption": "6.8",
        "kilometrage": 20000
    },
    "trips": [{
        "id": "B 58 PKB-0000",
        "driver": {
            "firstName": "Anna",
            "lastName": "Craig",
            "id": "2820329135412"
        },
        "startDate": "2017-03-20T09:28:06.419Z",
        "stopDate": "2017-03-20T12:28:06.419Z",
        "startLocation": {
            "lat": "44.2462965",
            "long": "28.2683479"
        },
        "stopLocation": {
            "lat": "44.1812565",
            "long": "28.5592996"
        },
        "distance": 40
		}]
	}, {
    "details": {
        "manufacturer": "Mitsubishi",
        "model": "Pajero",
        "registrationPlate": "B 58 PKC",
        "vin": "VF7FCK6EK8A001153",
        "engineCapacity": "3200",
        "fuelType": "Diesel",
        "horsepower": "200",
        "fuelConsumption": "8.5",
        "kilometrage": 30000
    },
    "trips": [{
        "id": "B 58 PKC-0000",
        "driver": {
            "firstName": "Michael",
            "lastName": "Douglas",
            "id": "1830329135413"
        },
        "startDate": "2017-03-10T13:28:06.419Z",
        "stopDate": "2017-03-10T18:28:06.419Z",
        "startLocation": {
            "lat": "45.3410878",
            "long": "25.5164496"
        },
        "stopLocation": {
            "lat": "44.4378043",
            "long": "26.0245982"
        },
        "distance": 130
		}]
	}, {
    "details": {
        "manufacturer": "Tesla",
        "model": "Model S",
        "registrationPlate": "B 58 PKD",
        "vin": "VF7FCK6EK8A001154",
        "engineCapacity": "0",
        "fuelType": "Electric",
        "horsepower": "421",
        "fuelConsumption": "2.64",
        "kilometrage": 40000
    },
    "trips": [{
        "id": "B 58 PKD-0000",
        "driver": {
            "firstName": "Richard",
            "lastName": "Gere",
            "id": "1840329135414"
        },
        "startDate": "2017-04-10T10:28:06.419Z",
        "stopDate": "2017-04-10T13:28:06.419Z",
        "startLocation": {
            "lat": "44.4378043",
            "long": "26.0245982"
        },
        "stopLocation": {
            "lat": "44.8559646",
            "long": "24.8384835"
        },
        "distance": 120
		}]
	}]
