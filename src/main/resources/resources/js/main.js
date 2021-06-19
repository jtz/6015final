/*global $*/

$(function () {

    "use strict";

    /*==================================
        * Author        : Ideas_Factory
        * Template Name : Karizma - Modern vCard / Resume / CV / Portfolio
    ==================================== */

    /*=========== TABLE OF CONTENTS ===========

        01. Preloader
        02. Isotope Plugin
        03. Functions
        04. Menu
        05. responsiveSlides plugin
        06. Form Validation
        07. Window Resize
        08. MagnifPopup Plugin
        09. Type Plugin
        10. fitText plugin
        11. Slick plugin
        12. Jquery.matchHeight Plugin
        13. Jquery.pogo-slider Plugin
        14. Jquery.mb.YTPlayer Plugin

    ======================================*/

    var $grid = $('.grid');

    $(window).on('load', function () {

        /*--------------------------------
            01. Preloader
        ----------------------------------*/
        $('.startLoad').fadeOut('slow');


        /*--------------------------------
            02. Isotope Plugin
        ----------------------------------*/
        if ( $grid.length ) {

            $grid.isotope({
                // options...
                itemSelector: '.grid .item',
                percentPosition: true,
                masonry: {
                    // use element for option
                    columnWidth: '.grid-sizer'
                }
            });

        }

    });//--- window(load) ---//



    /*--------------------------------
            09. Type Plugin
        ----------------------------------*/
    var type_d = "#typed";

    if ($(type_d).length) {

        var typed = new Typed(type_d, {
            stringsElement: '#typed-strings',
            typeSpeed: 40,
            backSpeed: 0,
            backDelay: 1500,
            startDelay: 1000,
            fadeOut: false,
            loop: true
        });

    }

    /*----------------------------------------------
        10. fitText plugin
    -----------------------------------------------*/
    function fitMyText(){

        var fit__text = $(".fit__text");

        if ( fit__text.length !== 0 ){

            fit__text.fitText(1, { maxFontSize: 45 });

        }

    }
    fitMyText();

})