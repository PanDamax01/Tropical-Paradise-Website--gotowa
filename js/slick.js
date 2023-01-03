$(document).ready(function () {
    $('.reviews__boxes').slick({
        slidesToShow: 1, //o 1 slide sie przewija
        slidesToScroll: 1,
        autoplay: true,  //same sie przesuwają
        autoplaySpeed: 2500,
        arrows: false, //brak szczałek
        mobileFirst: true, //1 karta na mobile first
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }],

    });
})