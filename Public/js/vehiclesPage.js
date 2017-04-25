function initializeVehiclesPage() {
    for (var i = 0; i < vehicles.length; i++) {
        addVehicleToTable(vehicles[i], i + 1);
    }

    $("[data-toggle=tooltip]").tooltip();
}

function addVehicle() {
    var newVehicle = {
        "details": {
            "manufacturer": $("#addVehicleManufacturer :input").val(),
            "model": $("#addVehicleModel :input").val(),
            "registrationPlate": $("#addVehicleRegistrationPlate :input").val(),
            "vin": $("#addVehicleVIN :input").val(),
            "engineCapacity": $("#addVehicleEngineCapacity :input").val(),
            "fuelType": $("#addVehicleFuelType :input").val(),
            "horsepower": $("#addVehicleHorsepower :input").val(),
            "fuelConsumption": $("#addVehicleFuelConsumption :input").val(),
            "kilometrage": Number($("#addVehicleKilometrage :input").val())
        },
        "trips": []
    };

    vehicles.push(newVehicle);
    addVehicleToTable(newVehicle);
    document.getElementById('addVehicleForm').reset();

    localStorage.setItem('localStorageVehicles', JSON.stringify(vehicles));
}

function addVehicleToTable(vehicle, index) {
    var editSpan = $('<span>').addClass('glyphicon glyphicon-pencil');
    var deleteSpan = $('<span>').addClass('glyphicon glyphicon-trash');
    var tripsSpan = $('<span>').addClass('glyphicon glyphicon-road');
    var editButton = $('<button>').addClass('btn btn-primary btn-md').attr('data-toggle', 'modal').attr('data-title', 'Edit').attr('data-target', '#editVehicleModal').append(editSpan).click(editVehicle);
    var deleteButton = $('<button>').addClass('btn btn-danger btn-md').attr('data-toggle', 'modal').attr('data-title', 'Delete').attr('data-target', '#deleteVehicleModal').append(deleteSpan).click(deleteVehicle);
    var tripsButton = $('<button>').addClass('btn btn-success btn-md').append(tripsSpan).click(viewVehicleTrips);
    var editVehicleButton = $('<p>').addClass('operations').attr('data-placement', 'top').attr('data-toggle', 'tooltip').attr('title', 'Edit').append(editButton);
    var deleteVehicleButton = $('<p>').addClass('operations').attr('data-placement', 'top').attr('data-toggle', 'tooltip').attr('title', 'Delete').append(deleteButton);
    var viewVehicleTripsButton = $('<p>').addClass('operations').attr('data-placement', 'top').attr('data-toggle', 'tooltip').attr('title', 'View vehicle trips').append(tripsButton);

    $('#vehiclesTable').find('tbody').append($('<tr>').append($('<td>').attr('data-label', 'Manufacturer').text(vehicle.details.manufacturer)));
    $('#vehiclesTable tr:last').append($('<td>').attr('data-label', 'Model').text(vehicle.details.model));
    $('#vehiclesTable tr:last').append($('<td>').attr('data-label', 'Registration plate').text(vehicle.details.registrationPlate));
    $('#vehiclesTable tr:last').append($('<td>').attr('data-label', 'VIN').text(vehicle.details.vin));
    $('#vehiclesTable tr:last').append($('<td>').attr('data-label', 'Engine capacity').text(vehicle.details.engineCapacity));
    $('#vehiclesTable tr:last').append($('<td>').attr('data-label', 'Fuel Type').text(vehicle.details.fuelType));
    $('#vehiclesTable tr:last').append($('<td>').attr('data-label', 'Horsepower').text(vehicle.details.horsepower));
    $('#vehiclesTable tr:last').append($('<td>').attr('data-label', 'Fuel consumption').text(vehicle.details.fuelConsumption));
    $('#vehiclesTable tr:last').append($('<td>').attr('data-label', 'Kilometrage').text(vehicle.details.kilometrage));
    $('#vehiclesTable tr:last').append($('<td>').attr('data-label', 'Trips').append(viewVehicleTripsButton));
    $('#vehiclesTable tr:last').append($('<td>').attr('data-label', 'Edit vehicle').append(editVehicleButton));
    $('#vehiclesTable tr:last').append($('<td>').attr('data-label', 'Delete vehicle').append(deleteVehicleButton));
}

function editVehicle() {
    var rowID = $(this).closest('tr').index();

    $('#editVehicleManufacturer :input').attr('value', vehicles[rowID].details.manufacturer);
    $('#editVehicleModel :input').attr('value', vehicles[rowID].details.model);
    $('#editVehicleRegistrationPlate :input').attr('value', vehicles[rowID].details.registrationPlate);
    $('#editVehicleVIN :input').attr('value', vehicles[rowID].details.vin);
    $('#editVehicleEngineCapacity :input').attr('value', vehicles[rowID].details.engineCapacity);
    $('#editVehicleFuelType :input').attr('value', vehicles[rowID].details.fuelType);
    $('#editVehicleHorsepower :input').attr('value', vehicles[rowID].details.horsepower);
    $('#editVehicleFuelConsumption :input').attr('value', vehicles[rowID].details.fuelConsumption);
    $('#editVehicleKilometrage :input').attr('value', vehicles[rowID].details.kilometrage);

    $('#editVehicleButton').click(function () {
        var vehicleRow = $("#vehiclesTable tbody")[0].rows[rowID];

        vehicles[rowID].details.manufacturer = $('#editVehicleManufacturer :input').val();
        vehicles[rowID].details.model = $('#editVehicleModel :input').val();
        vehicles[rowID].details.registrationPlate = $('#editVehicleRegistrationPlate :input').val();
        vehicles[rowID].details.vin = $('#editVehicleVIN :input').val();
        vehicles[rowID].details.engineCapacity = $('#editVehicleEngineCapacity :input').val();
        vehicles[rowID].details.fuelType = $('#editVehicleFuelType :input').val();
        vehicles[rowID].details.horsepower = $('#editVehicleHorsepower :input').val();
        vehicles[rowID].details.fuelConsumption = $('#editVehicleFuelConsumption :input').val();
        vehicles[rowID].details.kilometrage = Number($('#editVehicleKilometrage :input').val());

        vehicleRow.cells[0].innerHTML = vehicles[rowID].details.manufacturer;
        vehicleRow.cells[1].innerHTML = vehicles[rowID].details.model;
        vehicleRow.cells[2].innerHTML = vehicles[rowID].details.registrationPlate;
        vehicleRow.cells[3].innerHTML = vehicles[rowID].details.vin;
        vehicleRow.cells[4].innerHTML = vehicles[rowID].details.engineCapacity;
        vehicleRow.cells[5].innerHTML = vehicles[rowID].details.fuelType;
        vehicleRow.cells[6].innerHTML = vehicles[rowID].details.horsepower;
        vehicleRow.cells[7].innerHTML = vehicles[rowID].details.fuelConsumption;
        vehicleRow.cells[8].innerHTML = vehicles[rowID].details.kilometrage;

        localStorage.setItem('localStorageVehicles', JSON.stringify(vehicles));
    });
}

function deleteVehicle() {
    var $vehicleRow = $(this).closest('tr');

    $('#deleteVehicle').click(function () {
        var rowID = $vehicleRow.index();
        var vehicleRow = $("#vehiclesTable tbody")[0].rows[rowID];
        $vehicleRow.remove();
        vehicles.splice(rowID, 1);

        /* TODO: Add # to table
        var rowCount = $('#vehiclesTable tbody tr').length;
        for (var i = rowID; i < rowCount; i++) {
            $('#vehiclesTable tbody')[0].rows[i].cells[0].innerHTML = i+1;
        }*/
        localStorage.setItem('localStorageVehicles', JSON.stringify(vehicles));
    });
}

function viewVehicleTrips() {
    var $vehicleRow = $(this).closest('tr');
    var rowID = $vehicleRow.index();

    $("#vehiclesPage").hide();
    $("#viewVehicleTripsPage").show();

    $('#tripsTable').find('tbody').remove();
    $('#tripsTable').append('<tbody>');

    for (var i = 0; i < vehicles[rowID].trips.length; i++) {
        addTripsToTable(vehicles[rowID].trips[i], i);
    }

    //$("[data-toggle=tooltip]").tooltip();
}

function addTripsToTable(trip, index) {
    // date/time format: yyyy-MM-dd HH:mm:ss
    var startDate = trip.startDate;
    var stopDate = trip.stopDate;
    startDate = startDate.slice(0, 10) + ' ' + startDate.slice(11, 19);
    stopDate = stopDate.slice(0, 10) + ' ' + stopDate.slice(11, 19);

    var tripSpan = $('<span>').addClass('glyphicon glyphicon-road');
    var tripButton = $('<button>').addClass('btn btn-success btn-md').attr('data-toggle', 'modal').attr('data-title', 'View trip').append(tripSpan).on('click', function () {
        initMap(trip.id);
    });
    var viewTripButton = $('<p>').attr('data-placement', 'top').attr('data-toggle', 'tooltip').attr('title', 'View trip').append(tripButton);

    $('#tripsTable').find('tbody').append($('<tr>').append($('<td>').attr('data-label','Driver').text(trip.driver.firstName + ' ' + trip.driver.lastName)));
    $('#tripsTable tr:last').append($('<td>').attr('data-label','Start date').text(startDate));
    $('#tripsTable tr:last').append($('<td>').attr('data-label','Start location').text(trip.startLocation.lat, trip.startLocation.long));
    $('#tripsTable tr:last').append($('<td>').attr('data-label','Stop date').text(stopDate));
    $('#tripsTable tr:last').append($('<td>').attr('data-label','Stop location').text(trip.stopLocation.lat, trip.stopLocation.long));
    $('#tripsTable tr:last').append($('<td>').attr('data-label','Trip distance').text(trip.distance));
    $('#tripsTable tr:last').append($('<td>').attr('data-label','Trips').append(viewTripButton));

    getAddress(trip.startLocation.lat, trip.startLocation.long, index, 2);
    getAddress(trip.stopLocation.lat, trip.stopLocation.long, index, 4);
}

// Transform lat/long into address
function getAddress(myLatitude, myLongitude, row, col) {
    var geocoder = new google.maps.Geocoder(); // create a geocoder object
    var location = new google.maps.LatLng(myLatitude, myLongitude); // turn coordinates into an object
    geocoder.geocode({
        'latLng': location
    }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) { // if geocode success
            var table = document.getElementById("tripsTable");
            table.rows[row + 1].cells[col].innerHTML = results[0].formatted_address;
        } else {
            alert("Geocode failure: " + status); // alert any other error(s)
            return false;
        }
    });
}

function initMap(tripID) {
    //var route1Latlng = new google.maps.LatLng(44.4460, 26.0531);
    var mapOptions = {
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);

    $.ajax({
        type: "GET",
        url: "trips/" + tripID + ".gpx",
        dataType: "xml",
        success: function (xml) {
            var points = [];
            var bounds = new google.maps.LatLngBounds();
            $(xml).find("trkpt").each(function () {
                var lat = $(this).attr("lat");
                var lon = $(this).attr("lon");
                var p = new google.maps.LatLng(lat, lon);
                points.push(p);
                bounds.extend(p);
            });
            var poly = new google.maps.Polyline({
                // use your own style here
                path: points,
                strokeColor: "#FF0000",
                strokeOpacity: .7,
                strokeWeight: 4
            });
            poly.setMap(map);
            // fit bounds to track
            map.fitBounds(bounds);
        }
    });

    $('#viewTripModal').on('shown.bs.modal', function () {
        google.maps.event.trigger(map, 'resize');
    });
    $('#viewTripModal').modal("show");
}
