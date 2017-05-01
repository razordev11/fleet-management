function initializeDriversPage() {
    for (var i = 0; i < drivers.length; i++) {
        addDriverToTable(drivers[i]);
    }

    $("[data-toggle=tooltip]").tooltip();
}

function addDriver() {
    var newDriver = {
        "firstName": $("#addDriverFirstName :input").val(),
        "lastName": $("#addDriverLastName :input").val(),
        "id": $("#addDriverID :input").val(),
        "address": $("#addDriverAddress :input").val(),
        "email": $("#addDriverEmail :input").val(),
        "phoneNumber": $("#addDriverPhoneNumber :input").val(),
        "distanceTraveled": 0
    };

    drivers.push(newDriver);
    addDriverToTable(newDriver);
    document.getElementById('addDriverForm').reset();

    localStorage.setItem('localStorageDrivers', JSON.stringify(drivers));
}

function addDriverToTable(driver) {
    var editSpan = $('<span>').addClass('glyphicon glyphicon-pencil');
    var deleteSpan = $('<span>').addClass('glyphicon glyphicon-trash');
    var editButton = $('<button>').addClass('btn btn-primary btn-md').attr('data-toggle', 'modal').attr('data-title', 'Edit').attr('data-target', '#editDriverModal').append(editSpan).click(editDriver);
    var deleteButton = $('<button>').addClass('btn btn-danger btn-md').append(deleteSpan).click(deleteDriver);
    var editDriverButton = $('<p>').addClass('operations').attr('data-placement', 'top').attr('data-toggle', 'tooltip').attr('title', 'Edit').append(editButton);
    var deleteDriverButton = $('<p>').addClass('operations').attr('data-placement', 'top').attr('data-toggle', 'tooltip').attr('title', 'Delete').append(deleteButton);

    $('#driversTable').find('tbody').append($('<tr>').append($('<td>').attr('data-label', 'First name').text(driver.firstName)));
    $('#driversTable tr:last').append($('<td>').attr('data-label', 'Last name').text(driver.lastName));
    $('#driversTable tr:last').append($('<td>').attr('data-label', 'ID').text(driver.id));
    $('#driversTable tr:last').append($('<td>').attr('data-label', 'Address').text(driver.address));
    $('#driversTable tr:last').append($('<td>').attr('data-label', 'Email').text(driver.email));
    $('#driversTable tr:last').append($('<td>').attr('data-label', 'Phone number').text(driver.phoneNumber));
    $('#driversTable tr:last').append($('<td>').attr('data-label', 'Distance traveled').text(driver.distanceTraveled));
    $('#driversTable tr:last').append($('<td>').attr('data-label', 'Edit driver').append(editDriverButton));
    $('#driversTable tr:last').append($('<td>').attr('data-label', 'Delete driver').append(deleteDriverButton));
}

function editDriver() {
    var rowID = $(this).closest('tr').index();

    $('#editDriverFirstName :input').attr('value', drivers[rowID].firstName);
    $('#editDriverLastName :input').attr('value', drivers[rowID].lastName);
    $('#editDriverID :input').attr('value', drivers[rowID].id);
    $('#editDriverAddress :input').attr('value', drivers[rowID].address);
    $('#editDriverEmail :input').attr('value', drivers[rowID].email);
    $('#editDriverPhoneNumber :input').attr('value', drivers[rowID].phoneNumber);
    $('#editDriverDistanceTraveled :input').attr('value', drivers[rowID].distanceTraveled);

    console.log('Edit id ' + rowID);

    $('#editDriverButton').click(function () {
        var driverRow = $("#driversTable tbody")[0].rows[rowID];

        drivers[rowID].firstName = $('#editDriverFirstName :input').val();
        drivers[rowID].lastName = $('#editDriverLastName :input').val();
        drivers[rowID].id = $('#editDriverID :input').val();
        drivers[rowID].address = $('#editDriverAddress :input').val();
        drivers[rowID].email = $('#editDriverEmail :input').val();
        drivers[rowID].phoneNumber = $('#editDriverPhoneNumber :input').val();
        drivers[rowID].distanceTraveled = Number($('#editDriverDistanceTraveled :input').val());

        driverRow.cells[0].innerHTML = drivers[rowID].firstName;
        driverRow.cells[1].innerHTML = drivers[rowID].lastName;
        driverRow.cells[2].innerHTML = drivers[rowID].id;
        driverRow.cells[3].innerHTML = drivers[rowID].address;
        driverRow.cells[4].innerHTML = drivers[rowID].email;
        driverRow.cells[5].innerHTML = drivers[rowID].phoneNumber;
        driverRow.cells[6].innerHTML = drivers[rowID].distanceTraveled;

        localStorage.setItem('localStorageDrivers', JSON.stringify(drivers));
    });
}

function deleteDriver() {
    var driverRow = $(this).closest('tr');

    //$('#deleteDriver').click(function () {
    var rowID = driverRow.index();
    drivers.splice(rowID, 1);
    driverRow.remove();
    localStorage.setItem('localStorageDrivers', JSON.stringify(drivers));
    //});
}
