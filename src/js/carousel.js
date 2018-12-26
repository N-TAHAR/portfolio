$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin:10,
      center: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
      }
    });
  });