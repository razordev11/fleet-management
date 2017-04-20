var drivers = initializeDriversToLocalStorage();
var vehicles = initializeVehiclesToLocalStorage();

$(document).ready(function () {
    $("#homePage").show();
    $("#driversPage").hide();
    $("#addDriverPage").hide();
    $("#vehiclesPage").hide();
    $("#addVehiclePage").hide();
    $("#viewVehicleTripsPage").hide();
    $("#reportsPage").hide();
    $('.menu-list ul li').removeClass("active");
    $('.sub-menu li').removeClass("active");
    $('#homePageHeader').addClass("active");

    initializeDriversPage();
    initializeVehiclesPage();
    initializeReportsPage();

    $("#homePageHeader").click(function () {
        $("#homePage").show();
        $("#driversPage").hide();
        $("#addDriverPage").hide();
        $("#vehiclesPage").hide();
        $("#addVehiclePage").hide();
        $("#viewVehicleTripsPage").hide();
        $("#reportsPage").hide();
        $('.menu-list ul li').removeClass("active");
        $('.sub-menu li').removeClass("active");
        $(this).addClass("active");
    });

    $("#driversPageHeader").click(function () {
        $("#homePage").hide();
        $("#driversPage").show();
        $("#addDriverPage").hide();
        $("#vehiclesPage").hide();
        $("#addVehiclePage").hide();
        $("#viewVehicleTripsPage").hide();
        $("#reportsPage").hide();
        $('.menu-list ul li').removeClass("active");
        $('.sub-menu li').removeClass("active");
        $(this).addClass("active");
    });

    $("#addDriverHeader").click(function () {
        $("#homePage").hide();
        $("#driversPage").hide();
        $("#addDriverPage").show();
        $("#vehiclesPage").hide();
        $("#addVehiclePage").hide();
        $("#viewVehicleTripsPage").hide();
        $("#reportsPage").hide();
        $('.menu-list ul li').removeClass("active");
        $('.sub-menu li').removeClass("active");
        $(this).addClass("active");
    });

    $("#vehiclesPageHeader").click(function () {
        $("#homePage").hide();
        $("#driversPage").hide();
        $("#addDriverPage").hide();
        $("#vehiclesPage").show();
        $("#addVehiclePage").hide();
        $("#viewVehicleTripsPage").hide();
        $("#reportsPage").hide();
        $('.menu-list ul li').removeClass("active");
        $('.sub-menu li').removeClass("active");
        $(this).addClass("active");
    });

    $("#addVehicleHeader").click(function () {
        $("#homePage").hide();
        $("#driversPage").hide();
        $("#addDriverPage").hide();
        $("#vehiclesPage").hide();
        $("#addVehiclePage").show();
        $("#viewVehicleTripsPage").hide();
        $("#reportsPage").hide();
        $('.menu-list ul li').removeClass("active");
        $('.sub-menu li').removeClass("active");
        $(this).addClass("active");
    });
    
    $("#reportsPageHeader").click(function () {
        $("#homePage").hide();
        $("#driversPage").hide();
        $("#addDriverPage").hide();
        $("#vehiclesPage").hide();
        $("#addVehiclePage").hide();
        $("#viewVehicleTripsPage").hide();
        $("#reportsPage").show();
        $('.menu-list ul li').removeClass("active");
        $('.sub-menu li').removeClass("active");
        $(this).addClass("active");
        
        reportsViewVehicleDistanceTraveled();
        reportsViewDriverDistanceTraveled();
    });
});

function initializeDriversToLocalStorage() {
    if (localStorage.getItem('localStorageDrivers') === null) {
        // Put the object into local storage
        localStorage.setItem('localStorageDrivers', JSON.stringify(allDrivers));
    }
    // Retrieve the object from storage
    var retrievedObject = JSON.parse(localStorage.getItem('localStorageDrivers'));

    return retrievedObject;
}

function initializeVehiclesToLocalStorage() {
    if (localStorage.getItem('localStorageVehicles') === null) {
        // Put the object into local storage
        localStorage.setItem('localStorageVehicles', JSON.stringify(allVehicles));
    }
    // Retrieve the object from storage
    var retrievedObject = JSON.parse(localStorage.getItem('localStorageVehicles'));

    return retrievedObject;
}
