$(window).on("load", function(){


    $(".loader .inner").fadeOut(600, function(){

        $(".loader").fadeOut(750);

    });

    $(".items").isotope({
        filter:'*',
        animationOptions:{
            duration:1500,
            easing:'linear',
            queue:false
        }
 

    });


})






$(document).ready(function(){

    $('#slides').superslides({
        animation:'fade',//photo change effection 
        play:5000 ,//auto change backgoround every 5 sec
        pagination:false //分頁
    });

    // subtitle for webpage 
    var typed = new Typed(".typed", {
        strings: ["Software Engineer.", "Web Developer.", "Looking for internship.", "Foodie."],
        typeSpeed: 70,
        loop: true,
        startDelay:1000,
        showCursor:false
    });


    $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });


    // $('.chart').easyPieChart({
    //     easing:'easeInOut',
    //     barColor:'#fff',
    //     trackColor:false,
    //     scaleColor:false,
    //     lineWidth: 4,
    //     size : 152,
    //     onStep: function(from, to, percent){
    //         $(this.el).find('.percent').text(Math.round(percent));
    //     }
    // });

    var skillsTopOffset = $(".skillsSection").offset().top;
    // console.log(skillsTopOffset);
    
    $(window).scroll(function(){

        // console.log(window.pageYOffset);

        if(window.pageYOffset > skillsTopOffset - $(window).height()+200){

            $('.chart').easyPieChart({
                easing:'easeInOut',
                barColor:'#fff',
                trackColor:false,
                scaleColor:false,
                lineWidth: 4,
                size : 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });




        }




    });



    $("[data-fancybox]").fancybox();

    // $(".items").isotope({
    //     filter:'*',
    //     animationOptions:{
    //         duration:1500,
    //         easing:'linear',
    //         queue:false
    //     }
 

    // });


    $("#filters a").click(function(){

        $("#filters.current").removeClass("current");
        $(this).addClass("current");


        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter:selector,
            animationOptions:{
                duration:1500,
                easing:'linear',
                queue:false
            }
     
    
        });

        return false; // don't do anything else




    });

    // $("#navigation li a").click(function(e){
    //     e.preventDefault();
    //     var targetElement = $(this).attr("herf");

    //     var targetPosition = $(targetElement).offset().top;

    //     $("html, body").animate({ scrollTop : targetPosition - 50}, "slow");



    // });



    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation(){

        var body = $("body");
        if ($(window).scrollTop() >= navTop){

            body.css("padding-top", nav.outerHeight() + "px");

            body.addClass("fixedNav");
        }else{
            body.css("padding-top",0);
            body.removeClass("fixedNav");
        }

        
    }
 
});

