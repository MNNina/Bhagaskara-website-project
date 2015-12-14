/**
 * Created by Ninja on 2015-12-03.
 */
$(document).ready(function () {

    function fixnav(){
        var wrap = $("#navigation");
        var fixnav = wrap.offset().top

        $(window).on("scroll", function() {
            var windowScroll = $(window).scrollTop();
            //console.log(windowScroll);
            if (windowScroll > fixnav) {
                wrap.addClass("fix-nav");
            } else {
                wrap.removeClass("fix-nav");
            }
        });

    }
    fixnav();


    function animatedMenu(){
        var allIcons = $(".animatedMenu");
        // allIcons --- find icons
        var allA  = $(allIcons).find("a");
          $(allA).on('click', function(){
              var href = $(this).attr("href");
              console.log(href);

              $('html, body').animate({
                  scrollTop: $(href).offset().top
              }, 1000);

          });






    }
    animatedMenu();


     function checkSize(ileDzieciMaArrayBoxes) {
         var arrayBoxes = $(".box-item");
         var first = arrayBoxes[0];
         var content = $('.content-slider');
         var width = $(first).outerWidth();
         var szerokoscCala = width * ileDzieciMaArrayBoxes
         content.css('width', szerokoscCala);
         arrayBoxes.css('width', szerokoscCala / ileDzieciMaArrayBoxes)

     }

    function slider(){
        checkSize(3);

        $(".arr-l").on('click', function(event){
            event.preventDefault();
            var arrayBoxes = $(".box-item");

            console.log(arrayBoxes);
            var first = arrayBoxes[0];
            console.log(first);
            var width = $(first).outerWidth();
            console.log(width);
            //pobieram ile elementów ma tablica
            var arrayLenght = arrayBoxes.length;
            //wybieram sobie ostatni elemenet
            var lastElement = arrayBoxes[arrayLenght-1];
            // wklejam pierwszy element na koniec tablicy
            arrayBoxes.push(first);
            console.log(arrayBoxes);
            //musze dodac ostatni element z tablicy do htmla
            checkSize(arrayBoxes.length);
            var sklonowanyElement = $(lastElement).clone().prependTo('.content-slider');
            sklonowanyElement.css();




            $(".box-item").css('right', width);



        });
        $(".arr-r").on('click', function(event){
            event.preventDefault();
            console.log("prawa krowa jest fiotelowa");

        });



    }
    //slider()
    function automaticSlider(){
       var slider = $(".slider-background");
        var dzieciaki = slider.children();
        var iloscDzieci = dzieciaki.length;
        var szerDzieciaka = $(dzieciaki[0]).outerWidth();
        var startSlide = 1;
        setInterval(function(){

            slider.animate({
                right: szerDzieciaka*startSlide
            })

            console.log(startSlide);
            if(startSlide >= iloscDzieci-1){
                startSlide=0;
            }
            startSlide++;

        }, 3000 );
    }


        //$('.button2').on('click', function(){
        //    if(startSlide <= 1){
        //        startSlide=iloscDzieci-1;
        //    }
        //    else {
        //        startSlide--;
        //    }
        //
        //    console.log(startSlide)
        //    slider.animate({
        //        right: szerDzieciaka*startSlide
        //    });
        //
        //    startSlide;

        //});




    automaticSlider();

   function gallery(){
    var photoArray = $('.photo-item');

    photoArray.mouseenter(function(){
        var nakladka = $(this).children('.nakladka');
        nakladka.show();
        console.log(this);
    });
       photoArray.mouseleave(function(){
           var nakladka = $(this).children('.nakladka');
           nakladka.hide();
           console.log(this);

       });

       $('.nakladka').on('click', function(){
           var bigImg =$(this).parent().next();
           bigImg.show();

          // var h3 = $(this).parent().siblings('h3');
           //console.log(h3)
       });

       $('.big-img').on('click', function(){
           $('.big-img').hide();
       });

   };
    gallery()




});
