/*------------------------------------------------------------------
[Master Custom JS] - [Table of contents]

1. Preloader
2. Swiper SLider
3. Nice Select
4. Back To Top
5. Nav On Mobile
6. Change Heart Icons
------------------------------------------------------------------- */


(function ($) {
    'use strict';

    /*---------------------------------------------*/
    /*--- 1. Preloader ---*/
    /*---------------------------------------------*/
    jQuery(window).ready(function(){
        $( '.mt_preloader_holder' ).fadeOut( 1000, function() {
            $( '.mt_preloader_holder' ).fadeOut(1000);
        });
    });


    // bind submit handler to form
    jQuery(document).ready(function () {
        var options = { 
            target:        '.enefti-submission-result',  // your response show in this ID
            success:       eneft_contact_response 
        };
        // bind to the form's submit event
        jQuery('#contact-form').submit(function() { 
            jQuery(this).ajaxSubmit(options); 
            return false; 
        }); 

        function eneft_contact_response(responseText, statusText, xhr, $form){
            if(responseText=='success'){
                $('.enefti-submission-result').html('<div class="alert alert-success" role="alert"><strong>Thank you!</strong> Your Message has been submitted!</div>');
            }else{
                $('.enefti-submission-result').html('<div class="alert alert-warning" role="alert"><strong>Error!</strong> There was a problem processing your submission. Try again later.</div>');
            }

        }
    });

    /*---------------------------------------------*/
    /*--- 2. Swiper Slider ---*/
    /*---------------------------------------------*/
    $(document).ready(function () {
        MTSwipperCarousel.init();
    });

    var MTSwipperCarousel = {
        init: function () {
            var sliders = $('.mt-addons-swipper');

            if (sliders.length) {
                sliders.each(function (i) {

                    // Getting swiper attrs
                    var thisItem = $(this),
                        thisItem_id = thisItem.attr('id'),
                        thisItem_id_attr = thisItem.attr('data-swiper-id'),
                        autoplay = thisItem.attr('data-swiper-autoplay'),
                        delay = thisItem.attr('data-swiper-delay'),
                        slides_per_view = thisItem.attr('data-swiper-desktop-items'),
                        slides_per_view_mobile = thisItem.attr('data-swiper-mobile-items'),
                        slides_per_view_tablet = thisItem.attr('data-swiper-tablet-items'),
                        space_between = thisItem.attr('data-swiper-space-between-items'),
                        allow_touch_move = thisItem.attr('data-swiper-allow-touch-move'),
                        effect = thisItem.attr('data-swiper-effect'),
                        grab_cursor = thisItem.attr('data-swiper-grab-cursor'),
                        infinite_loop = thisItem.attr('data-swiper-infinite-loop'),
                        centered_slides = thisItem.attr('data-swiper-centered-slides'),
                        navigation = thisItem.attr('data-swiper-navigation'),
                        pagination = thisItem.attr('data-swiper-pagination');



                    if (autoplay === 'true') {
                        autoplay = true;
                    }else{
                        autoplay = false;
                    }
                    if (delay != '') {
                        delay = parseInt(delay, 10);
                    }
                    if (slides_per_view_mobile === '') {
                        slides_per_view_mobile = '1';
                    }
                    if (slides_per_view_tablet === '') {
                        slides_per_view_tablet = '2';
                    }
                    if (space_between === '') {
                        space_between = 30;
                    }else{
                        space_between = parseInt(space_between, 10);
                    }
                    if (allow_touch_move === 'true') {
                        allow_touch_move = true;
                    }else{
                        allow_touch_move = false;
                    }
                    if (grab_cursor === 'true') {
                        grab_cursor = true;
                    }else{
                        grab_cursor = false;
                    }
                    if (infinite_loop === 'true') {
                        infinite_loop = true;
                    }else{
                        infinite_loop = false;
                    }
                    if (navigation === 'true') {
                        navigation = true;
                    }else{
                        navigation = false;
                    }
                    if (pagination === 'true') {
                        pagination = true;
                    }else{
                        pagination = false;
                    }
                    // alert(effect);

                    const swiper = new Swiper("#"+thisItem_id,
                        {
                            autoplay        : autoplay,
                            delay           : delay,
                            slidesPerView   : slides_per_view,
                            // grid: {
                            //   rows: 2,
                            // },
                            effect: effect,
                            grabCursor: grab_cursor,
                            centeredSlides: centered_slides,
                            creativeEffect: {
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ["100%", 0, 0],
                                },
                            },
                            coverflowEffect: {
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            },
                            cubeEffect: {
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            },
                            direction : 'horizontal',
                            loop: infinite_loop,
                            pagination: {
                                el: "#"+thisItem_id+" .swiper-pagination",
                                clickable: true,
                                dynamicBullets: true,
                                // renderBullet: function (index, className) {
                                //   return '<span class="' + className + '">' + (index + 1) + "</span>";
                                // },
                            },
                            allowTouchMove: allow_touch_move,
                            navigation: {
                                nextEl: "#"+thisItem_id+" .swiper-button-next",
                                prevEl: "#"+thisItem_id+" .swiper-button-prev",
                            },
                            spaceBetween: space_between,
                            breakpoints: {
                                // when window width is >= 320px
                                320: {
                                    slidesPerView: slides_per_view_mobile,
                                    // spaceBetween: 30
                                },
                                640: {
                                    slidesPerView: slides_per_view_tablet,
                                    // spaceBetween: 30
                                },
                                // when window width is >= 480px
                                768: {
                                    slidesPerView: slides_per_view_tablet,
                                    // spaceBetween: 30
                                },
                                // when window width is >= 640px
                                1024: {
                                    slidesPerView: slides_per_view,
                                    // spaceBetween: 30
                                }
                            }
                        }
                    );
                });
            }
        }
    };




    /*---------------------------------------------*/
    /*--- 3. Nice Select ---*/
    /*---------------------------------------------*/
    $(document).ready(function () {
        MTNiceSelect.init();
    });

    var MTNiceSelect = {
        init: function () {
            var nice_selects = $('.enefti-select');

            if (nice_selects.length) {
                nice_selects.each(function (i) {
                    // Getting swiper attrs
                    var thisItem = $(this);
                    jQuery(thisItem).niceSelect();
                });
            }
        }
    };


    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 400,
    //grab the "back to top" link
    $back_to_top = jQuery('.back-to-top');

    //hide or show the "back to top" link
    jQuery(window).scroll(function(){
        ( jQuery(this).scrollTop() > offset ) ? $back_to_top.addClass('enefti-is-visible') : $back_to_top.removeClass('enefti-is-visible enefti-fade-out');
        if( jQuery(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('enefti-fade-out');
        }
     });


    /*---------------------------------------------*/
    /*--- 4. Back To Top ---*/
    /*---------------------------------------------*/

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });



    /*---------------------------------------------*/
    /*--- 5. Nav On Mobile ---*/
    /*---------------------------------------------*/

    document.querySelectorAll(".expand").forEach(element => element.addEventListener('click', ()=> {
        element.nextSibling.nextSibling.classList.toggle("active");
    }))


    function dropdownSearch()  {
        const searchDropdown = document.querySelector(".list")
        searchDropdown.classList.toggle("active");
    }

    jQuery('.mt-search-icon').on( "click", function() {
        jQuery('.enefti-header-searchform').toggleClass('visible');
    });



    /*---------------------------------------------*/
    /*--- 6. Change Heart Icons ---*/
    /*---------------------------------------------*/

    jQuery(document).ready(function(){
        jQuery( '.enefti-card-wrapper .fa-heart' ).on( "click", function(event) {
            jQuery(this).toggleClass("active");
        })
    });

    $('.enefti-single-nft-img-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    jQuery(".enefti-3d-play-btn").magnificPopup({
        type:"iframe",
        disableOn: 700,
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    const togglePassword = document.querySelector('#eye');
    const password = document.querySelector('#enefti-sign-in-pass');

    if(togglePassword && password){
        togglePassword.addEventListener("click", function () {
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
        });
    }
})(jQuery);
