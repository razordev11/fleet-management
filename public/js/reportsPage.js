function initializeReportsPage() {
    // Vehicle distance traveled
    // for (var i = 0; i < vehicles.length; i++) {
    //     var option = $('<option>').text(vehicles[i].details.registrationPlate);
    //     $('#reportsVehicleRegistrationPlate').append($('<optgroup>').attr('label', vehicles[i].details.manufacturer + ' ' + vehicles[i].details.model).append(option));
    // }

    $(".reports-vehicle-registration-plate").select2({
        placeholder: 'No vehicles available'
    });

    $('#reportsVehicleStartDate').addClass('reports-date-time').datetimepicker();
    $('#reportsVehicleStopDate').addClass('reports-date-time').datetimepicker();
    $('#reportsVehicleStopDate').addClass('reports-date-time').datetimepicker({
        useCurrent: false
    });

    // $('#reportsVehicleDistanceTraveled').text('0');

    // Driver distance traveled
    // for (var i = 0; i < drivers.length; i++) {
    //     $('#reportsDriverName').append($('<option>').text(drivers[i].firstName + ' ' + drivers[i].lastName));
    // }

    $(".reports-driver-name").select2({
        placeholder: 'No drivers available'
    });

    $('#reportsDriverStartDate').addClass('reports-date-time').datetimepicker();
    $('#reportsDriverStopDate').addClass('reports-date-time').datetimepicker();
    $('#reportsDriverStopDate').addClass('reports-date-time').datetimepicker({
        useCurrent: false
    });

    // $('#reportsDriverDistanceTraveled').text('0');
}

function reportsViewVehicleDistanceTraveled(_id) {
    var startDate;
    var stopDate;

    $("#reportsVehicleStartDate").on("dp.change", function (e) {
        $('#reportsVehicleStopDate').data("DateTimePicker").minDate(e.date);

        startDate = moment(e.date._d).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
        calculateVehicleDistanceTraveled(startDate, stopDate, _id);
    });
    $("#reportsVehicleStopDate").on("dp.change", function (e) {
        $('#reportsVehicleStartDate').data("DateTimePicker").maxDate(e.date);

        stopDate = moment(e.date._d).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
        calculateVehicleDistanceTraveled(startDate, stopDate, _id);
    });

    $("#reportsVehicleRegistrationPlate").on("change", function (e) {
        calculateVehicleDistanceTraveled(startDate, stopDate, _id);
    })
}

function selectedVehicleRegistrationPlateIndex() {
    for (var i = 0; i < vehicles.length; i++) {
        if (vehicles[i].details.registrationPlate === $('#reportsVehicleRegistrationPlate').val())
            return i;
    }
}

function calculateVehicleDistanceTraveled(startDate, stopDate, index) {
    // var index = selectedVehicleRegistrationPlateIndex();
    var distanceTraveled = 0;

    for (var i = 0; i < vehicles[index].trips.length; i++) {
        if (startDate <= vehicles[index].trips[i].startDate && stopDate >= vehicles[index].trips[i].stopDate) {
            distanceTraveled += vehicles[index].trips[i].distance;
        }
    }

    $('#reportsVehicleDistanceTraveled').text(distanceTraveled);
}



function reportsViewDriverDistanceTraveled() {
    var startDate;
    var stopDate;

    $("#reportsDriverStartDate").on("dp.change", function (e) {
        $('#reportsDriverStopDate').data("DateTimePicker").minDate(e.date);

        startDate = moment(e.date._d).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
        calculateDriverDistanceTraveled(startDate, stopDate);
    });
    $("#reportsDriverStopDate").on("dp.change", function (e) {
        $('#reportsDriverStartDate').data("DateTimePicker").maxDate(e.date);

        stopDate = moment(e.date._d).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
        calculateDriverDistanceTraveled(startDate, stopDate);
    });

    $("#reportsDriverName").on("change", function (e) {
        calculateDriverDistanceTraveled(startDate, stopDate);
    })
}

function selectedDriverID() {
    var driverName;

    for (var i = 0; i < drivers.length; i++) {
        driverName = drivers[i].firstName + " " + drivers[i].lastName;
        
        if (driverName === $('#reportsDriverName').val()) {
            return drivers[i].id;
        }
    }
}

function calculateDriverDistanceTraveled(startDate, stopDate) {
    var distanceTraveled = 0;
    var driverID = selectedDriverID();

    for (var i = 0; i < vehicles.length; i++) {
        for (var j = 0; j < vehicles[i].trips.length; j++) {
            
            if (vehicles[i].trips[j].driver.id === driverID) {                
                if (startDate <= vehicles[i].trips[j].startDate && stopDate >= vehicles[i].trips[j].stopDate) {
                    distanceTraveled += vehicles[i].trips[j].distance;
                }
            }
        }
    }

    $('#reportsDriverDistanceTraveled').text(distanceTraveled);
}
