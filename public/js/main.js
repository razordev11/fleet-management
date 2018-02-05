$(document).ready(function () {
    var currentPathname = window.location.pathname

    if (currentPathname == "") {
        $("#homePageHeader").addClass("active");
    } else if (currentPathname == "/drivers") {
        $("#driversPageHeader").addClass("active");
        $("#driversMenu").addClass("in");
        $("#driversTab").addClass("active");
    } else if (currentPathname == "/drivers/create") {
        $("#addDriverHeader").addClass("active");
        $("#driversMenu").addClass("in");
        $("#driversTab").addClass("active");
    } else if (currentPathname == "/vehicles") {
        $("#vehiclesPageHeader").addClass("active");
        $("#vehiclesMenu").addClass("in");
        $("#vehiclesTab").addClass("active");
    } else if (currentPathname == "/vehicles/trips") {
        $("#allTripsHeader").addClass("active");
        $("#vehiclesMenu").addClass("in");
        $("#vehiclesTab").addClass("active");
    } else if (currentPathname == "/vehicles/create") {
        $("#addVehicleHeader").addClass("active");
        $("#vehiclesMenu").addClass("in");
        $("#vehiclesTab").addClass("active");
    } else if (currentPathname == "/vehicles/trips/create") {
        $("#addTripHeader").addClass("active");
        $("#vehiclesMenu").addClass("in");
        $("#vehiclesTab").addClass("active");
    } else if (currentPathname == "/reports") {
        $("#reportsPageHeader").addClass("active");
        $("#reportsMenu").addClass("in");
        $("#reportsTab").addClass("active");
    } else if (currentPathname == "/users/login") {
        $("#login").addClass("active");
    } else if (currentPathname == "/users/register") {
        $("#register").addClass("active");
    }
});
