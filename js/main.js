$().ready(function(){
    "use strict";


var myHeader=$('.header'),
mySlider = $('.bxslider');


//function to add class active in navbar
//start function to add active in project

$('.navbar li,.project ul li').on('click',function(){
"use strict";
$(this).addClass("active").siblings().removeClass("active");
});


//function to adjust header height

myHeader.height($(window).height());

$(window).on("resize",function(){
    "use strict";
    myHeader.height($(this).height());

    mySlider.each(function () {

        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

    });
});


// Adjust Bxslider List Item Center
    
    mySlider.each(function () {       
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });
    
// Trigger The Bx Slider
    
    mySlider.bxSlider({
        pager: false        
    });

//function to make smooth scroll

    $('.navbar .nav li a').on("click",function(){
        "use strict";
        console.log( $("#"+$(this).data('value')) );
        $("html,body").animate({
            scrollTop: $("#"+$(this).data('value')).offset().top+50
        },1000);
    });

//function to add slider

    (function autoSlider(){
        "use strict";
        $('.over .active').each(function(){
            if(! $(this).is(":last-child")){
                $(this).delay(2000).fadeOut(1000,function(){
                    $(this).removeClass("active").next().addClass("active").fadeIn();
                    autoSlider();
                });
            }
            else{
                $(this).delay(2000).fadeOut(1000,function(){
                    $(this).removeClass("active");
                    $(".over div").eq(0).addClass("active").fadeIn();
                    autoSlider();
                });
            }
        });
    })();


//function to tabs

    $(".project ul li").on("click",function(){
        "use strict";
        if($(this).attr("data-value") == "all"){
            $(".work").show();
        }
        else{
            $(".work").hide();
            $($("."+$(this).attr("data-value"))).show();
        }
    });

// Trigger MixitUp
    
    $('#Container').mixItUp();
    // Trigger Nice Scroll
    $('html').niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: '10px',
        cursorborder: '1px solid #1abc9c',    
        cursorborderradius: 0
    });
});