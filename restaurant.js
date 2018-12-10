$(document).ready(function(){
$('.list').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    slickPrev: true,
    slickNext: true,

responsive: [{
    breakpoint: 1024,
    settings: {
    slidesToShow: 4,
    slidesToScroll: 4,
    // centerMode: true,
}

}, {
breakpoint: 900,
settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    infinite: true,
}

}, {
breakpoint: 670,
settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    infinite: true, 
}

}, {
breakpoint: 499,
settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
}
}]

});


$('.owl-carousel').owlCarousel({
loop:true,
margin:10,
nav:true,
responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}
})

new WOW().init();

});
