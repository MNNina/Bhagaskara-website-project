/**
 * Created by Ninja on 2015-12-03.
 */
$(document).ready(function () {
    //$('._f').slick('slickAdd',"<div></div>");

// Get the current slide
    //var currentSlide = $('._f').slick('._f');





    var navi = $('#nav1').offset().top;
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > navi - 10) {
            $('#nav').addClass('fixed');
        } else {
            $('#nav').removeClass('fixed');
        }

        if ($(window).scrollTop() > navi) {
            $('#nav').addClass('fixed-change');
        } else {
            $('#nav').removeClass('fixed-change');
        }

    });
});
