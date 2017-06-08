var drivers = initializeDriversToLocalStorage();
var vehicles = initializeVehiclesToLocalStorage();

$(document).ready(function () {
    // $('.menu-list ul li').removeClass("active");
    // $('.sub-menu li').removeClass("active");
    // $('#homePageHeader').addClass("active");
    initializeReportsPage();

    $("#homePageHeader").click(function () {
        $('.menu-list ul li').removeClass("active");
        $('.sub-menu li').removeClass("active");
        $(this).addClass("active");
    });

    $("#driversPageHeader").click(function () {
        $('.menu-list ul li').removeClass("active");
        $('.sub-menu li').removeClass("active");
        $(this).addClass("active");
    });

    $("#addDriverHeader").click(function () {
        $('.menu-list ul li').removeClass("active");
        $('.sub-menu li').removeClass("active");
        $(this).addClass("active");
    });

    $("#vehiclesPageHeader").click(function () {
        $('.menu-list ul li').removeClass("active");
        $('.sub-menu li').removeClass("active");
        $(this).addClass("active");
    });

    $("#addVehicleHeader").click(function () {
        $('.menu-list ul li').removeClass("active");
        $('.sub-menu li').removeClass("active");
        $(this).addClass("active");
    });

    $("#reportsPageHeader").click(function () {
        $('.menu-list ul li').removeClass("active");
        $('.sub-menu li').removeClass("active");
        $(this).addClass("active");

        reportsViewVehicleDistanceTraveled();
        reportsViewDriverDistanceTraveled();
    });
});

function initializeDriversToLocalStorage() {
    if (localStorage.getItem('localStorageDrivers') === null || localStorage.getItem('localStorageDrivers') === '[]') {
        // When table empties, localStorageDrivers is '[]'; here it repopulates
        // Put the object into local storage
        localStorage.setItem('localStorageDrivers', JSON.stringify(allDrivers));
    }
    // Retrieve the object from storage
    var retrievedObject = JSON.parse(localStorage.getItem('localStorageDrivers'));

    return retrievedObject;
}

function initializeVehiclesToLocalStorage() {
    if (localStorage.getItem('localStorageVehicles') === null ||
        localStorage.getItem('localStorageVehicles') === '[]') {
        // When table empties, localStorageVehicles is '[]'; here it repopulates
        // Put the object into local storage
        localStorage.setItem('localStorageVehicles', JSON.stringify(allVehicles));
    }
    // Retrieve the object from storage
    var retrievedObject = JSON.parse(localStorage.getItem('localStorageVehicles'));

    return retrievedObject;
}
