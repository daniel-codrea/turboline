'use strict';

var currentDate = new Date();
$('#currentYear').html((currentDate).getFullYear());

$(function() {
    $('a[href*=#]:not([href=#], .noJumpLink)').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 80)
                }, 1000);
                return false;
            }
        }
    });
  $('.nav a').on('click', function(){
    $('.nav li').removeClass('active');
    $(this).parent().addClass('active');
  });
});

$('.navbar-brand').click(function(){
	$('.navbar-collapse').removeClass('in');
	$('.navbar-collapse li').removeClass('active');
});

$('.navbar-collapse li a').click(function(){
	$('.navbar-collapse').removeClass('in');
});

$('.flexslider').flexslider({
    animation: 'fade',
    easing: 'jswing',
    controlNav: false,
    pauseOnHover: false,
    directionNav: false,
    slideshowSpeed: 8000,
    animationSpeed: 1800,
    start: function ( slider ) {
        $('li .caption_1').addClass('animated bounceInLeft');
    },
    before: function ( slider ) {
        if(slider.currentSlide === 0) {
            $('.caption_1').removeClass('animated bounceInLeft');
            $('.caption_2').addClass('animated bounceInRight');
            $('.caption_3').removeClass('animated rotateInDownLeft');
            $('.caption_4').removeClass('animated rollIn');
        } else if(slider.currentSlide === 1) {
            $('.caption_1').removeClass('animated bounceInLeft');
            $('.caption_2').removeClass('animated bounceInRight');
            $('.caption_3').addClass('animated rotateInDownLeft');
            $('.caption_4').removeClass('animated rollIn');
        } else if(slider.currentSlide === 2) {
            $('.caption_1').removeClass('animated bounceInLeft');
            $('.caption_2').removeClass('animated bounceInRight');
            $('.caption_3').removeClass('animated rotateInDownLeft');
            $('.caption_4').addClass('animated rollIn');
        } else if(slider.currentSlide === 3) {
            $('.caption_1').addClass('animated bounceInLeft');
            $('.caption_2').removeClass('animated bounceInRight');
            $('.caption_3').removeClass('animated rotateInDownLeft');
            $('.caption_4').removeClass('animated rollIn');
        }


    }
});

function run() {
    $('.progress_bar').animate({'width': '100%'}, 8000, run).width(0);
}
run();

$('#carousel-clients').carousel({
    interval: 1500 
})
