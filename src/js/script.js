$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });
});
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
});





