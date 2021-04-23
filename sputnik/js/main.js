$(document).ready(function(){
    const slider = $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText: [],
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});