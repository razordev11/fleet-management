$(document).ready(function () {
    // $('.menu-list ul li').removeClass("active");
    // $('.sub-menu li').removeClass("active");
    // $('#homePageHeader').addClass("active");
    
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
    });
});
