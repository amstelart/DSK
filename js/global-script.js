$( document ).ready(function() {

  $("#main-slider").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    animateOut: 'fadeOut',
    autoplay: true,
    loop: true,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 3px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 3px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    center: true
  });

  $(".plan-carousel").owlCarousel({
    items:1,
    loop:false,
    dots: false,
    nav: false,
    center:true,
    animateOut: 'fadeOut',
    margin:10,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: '#floor-01'
  });

  $('.owl-hash-nav .btn').click(function () {
    $('.owl-hash-nav .btn').removeClass('btn--active');
    $(this).addClass('btn--active');
  });

});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
