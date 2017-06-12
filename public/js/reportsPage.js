var vehicles;
function initializeReportsPage() {
    $.ajax({
        url: '/reports/getdata',
        method: 'GET'
    }).then(function (res) {
        vehicles = res.vehicles;

    }).catch(function (err) {
        console.error(err);
    });

    $('.datetimepicker').datetimepicker();
    $('#reportsVehicleStartDate').datetimepicker();
    $('#reportsVehicleStopDate').datetimepicker();
    $('#reportsDriverStartDate').datetimepicker();
    $('#reportsDriverStopDate').datetimepicker();
    $(".reports-vehicle-registration-plate").select2({
        placeholder: 'No vehicles available'
    });
    $(".reports-driver-name").select2({
        placeholder: 'No drivers available'
    });

    reportsViewVehicleDistanceTraveled();
    reportsViewDriverDistanceTraveled();
}

function reportsViewVehicleDistanceTraveled() {
    var startDate;
    var stopDate;

    $("#reportsVehicleStartDate").on("dp.change", function (e) {
        $('#reportsVehicleStopDate').data("DateTimePicker").minDate(e.date);
        startDate = moment(e.date._d).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
        calculateVehicleDistanceTraveled(startDate, stopDate);
    });
    $("#reportsVehicleStopDate").on("dp.change", function (e) {
        $('#reportsVehicleStartDate').data("DateTimePicker").maxDate(e.date);
        stopDate = moment(e.date._d).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
        calculateVehicleDistanceTraveled(startDate, stopDate);
    });
    $("#reportsVehicleRegistrationPlate").on("change", function (e) {
        calculateVehicleDistanceTraveled(startDate, stopDate);
    });
}

function selectedVehicleRegistrationPlateIndex() {
    for (var i = 0; i < vehicles.length; i++) {
        if (vehicles[i].registrationPlate === $('#reportsVehicleRegistrationPlate').val())
            return i;
    }
}

function calculateVehicleDistanceTraveled(startDate, stopDate) {
    var index = selectedVehicleRegistrationPlateIndex();
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
    });
}

function calculateDriverDistanceTraveled(startDate, stopDate) {
    var distanceTraveled = 0;
    var selectedDriver = $('#reportsDriverName').val();
    var driverID = selectedDriver.substr(selectedDriver.indexOf(",") + 2);

    for (var i = 0; i < vehicles.length; i++) {
        for (var j = 0; j < vehicles[i].trips.length; j++) {
            if (vehicles[i].trips[j].driver.nationalId === driverID) {
                if (startDate <= vehicles[i].trips[j].startDate && stopDate >= vehicles[i].trips[j].stopDate) {
                    distanceTraveled += vehicles[i].trips[j].distance;
                }
            }
        }
    }
    $('#reportsDriverDistanceTraveled').text(distanceTraveled);
}