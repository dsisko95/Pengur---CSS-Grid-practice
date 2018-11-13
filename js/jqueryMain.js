/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint vars: true */
$(document).ready(function () {
    'use strict';
    var i;
    $('input').iCheck({
        checkboxClass: 'icheckbox_minimal-orange',
        radioClass: 'iradio_minimal-orange',
        increaseArea: '20%' // optional
    });
    $('.toggleNavBar').click(function () {
        $('#menu').toggle(300);
        $(".line:nth-child(2)").toggle();
        $(".line:nth-child(1)").toggleClass("navBarOpen");
        $(".line:nth-child(3)").toggleClass("navBarOpen1");
    });
    $('a[href*=\\#]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1500) {
            $('#sideScroll').fadeIn();
        } else {
            $('#sideScroll').fadeOut();
        }
    });
    $("#sideScroll").click(function (event) {
        $('html, body').animate({
            scrollTop: '0px'
        }, 2800);
        for (i = 0; i < 3; i += 1) {
            $('#sideScroll img:last-child').fadeOut();
            $('#sideScroll img:last-child').fadeIn();
        }
    });
    $(window).resize(function () {
        if ($(window).width() >= 992) {
            $('#menu').show();
        }
    });
});
