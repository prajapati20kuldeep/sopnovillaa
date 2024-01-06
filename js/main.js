(function ($) {
"use strict";
    /*--
        Counter UP
    -----------------------------------*/
    $('.counter').counterUp({
        delay: 20,
        time: 3000
    });
    /*--
        Menu Sticky
    -----------------------------------*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        var sticky = $('.header-bottom');
        if ($(window).width > 767) {
            if (scroll < 350) {
                sticky.removeClass('stick');
            } else{
                sticky.addClass('stick');
            }
        } else {
            if (scroll < 200) {
                sticky.removeClass('stick');
            } else{
                sticky.addClass('stick');
            }
        }
    });
    /*--
        Search Toggle
    -----------------------------------*/
    $('.search-toggle').on('click', function(){
        $('.header-search-form').toggleClass('active');
    })
    /*--
        One Page Menu
    -----------------------------------*/
    var TopOffsetId = $('.header-bottom').height() - -19;
    $('.onepage-nav nav').onePageNav({
        currentClass: 'active',
        scrollThreshold: 0.2,
        scrollSpeed: 1000,
        scrollOffset: TopOffsetId,
    });
    /*--
        Bootstrap Menu Fix For Mobile
    -----------------------------------*/
    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });
    /*--
        Hero Slider
    -----------------------------------*/
    $('.hero-slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        customPaging : function(slider, i) {
            // var thumb = $(slider.$slides[i]).data('thumb');
            return '<button class="overlay"></button>';
        },
        responsive: [
            {
              breakpoint: 767,
              settings: {
                  dots: false,
                  autoplay: true,
                  autoplaySpeed: 5000,
              }
            }
        ]
    });
    /*--
        Amenities Border Line
    -----------------------------------*/
    $('.amenities-content ul li').each(function(){

        var aLBorder = $(this).find('.left').width();
        var aRBorder = $(this).find('.right').width();

        $(this).find('.border').css({
            left: (aLBorder + 10),
            right: (aRBorder + 10),
        })
    }) 
    /*--
        Testimonial Slider
    -----------------------------------*/
    $('.testimonial-slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
    });
    /*--
        Blog Slider
    -----------------------------------*/
    $().slick({
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        responsive: [
            {
              breakpoint: 950,
              settings: {
                  slidesToShow: 2,
              }
            },
            {
              breakpoint: 750,
              settings: {
                  slidesToShow: 1,
              }
            }
        ]
    });
    /*--
        Magnific Popup
    -----------------------------------*/
    /*-- Video --*/
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });
    /*-- Image --*/
    $('.image-popup').magnificPopup({
        type: 'image',
    });
    /*-- Gallery --*/
    $('.gallery-popup').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }	
    });
    /*-- Video Gallery --*/
    $('.video-gallery-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        },
        gallery:{
            enabled:true
        }	
    });
    /*--
        Smooth Scroll
    -----------------------------------*/
    $('[data-scroll]').on('click', function(e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
            speed: 1000,
            scrollTarget: link.hash,
            offset: -90,
        });
    });
    /*--
        Scroll Up
    -----------------------------------*/
    $.scrollUp({
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade',
        scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
    });
    /*--
        Ajax Contact Form
    -----------------------------------*/
    $(function() {
        // Get the form.
        var form = $('#contact-form');
        // Get the messages div.
        var formMessages = $('.form-messege');
        // Set up an event listener for the contact form.
        $(form).submit(function(e) {
            // Stop the browser from submitting the form.
            e.preventDefault();
            // Serialize the form data.
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                // Set the message text.
                $(formMessages).text(response);
                // Clear the form.
                $('#contact-form input:not([type="submit"]), #contact-form textarea').val('');
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');
                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
        });
    });
 

})(jQuery);	