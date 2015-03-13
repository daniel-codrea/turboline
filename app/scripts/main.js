'use strict';

var currentDate = new Date();
$('#currentYear').html((currentDate).getFullYear());

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
        console.log(slider);
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
    interval: 6500 
});

$('#carousel-marci').carousel({
    interval: 7500 
});

$('.carousel-round-images').carousel({
    interval: 4500 
});

$('.carousel-round-images-1').carousel({
    interval: 5500 
});

$('.carousel-round-images-2').carousel({
    interval: 4500 
});
$('.carousel-round-images-3').carousel({
    interval: 5500 
});

$('#carousel-marci').find('img').each( function () {
    $(this).hover( function () {
        $(this).toggleClass('greyscaled');
    });
});

// validate contact form
$(function() {
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10,
                digits: true,
            },
            message: {
                required: true,
                minlength: 4
            }
        },
        messages: {
            name: {
                required: 'Va rugam sa va precizati numele complet.',
                minlength: 'Numele dumneavoastra trebuie sa contina cel putin 2 caractere.'
            },
            email: {
                required: 'Va rugam sa folositi o adresa de email valida.'
            },
            phone: {
                required: 'Va rugam sa precizati un numar de telefon.',
                minlength: 'Numarul de telefon trebuie sa contina cel putin 10 caractere',
                digits: 'Va rugam sa folositi doar cifre de la 0 la 9, fara alt tip de caractere'
            },
            message: {
                required: 'Va rugam sa transmiteti un mesaj.',
                minlength: 'Mesajul dumneavoastra trebuie sa contina cel putin 4 caractere'
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:'POST',
                data: $(form).serialize(),
                url:'../send_mail.php',
                success: function() {
                    $('#contactForm :input').attr('disabled', 'disabled');
                    $('#contactForm').fadeTo( 'slow', 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contactForm').fadeTo( 'slow', 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});



