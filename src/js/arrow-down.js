$(".homePage__arrow").click(function() {
  $('html,body').animate({
      scrollTop: $(".skillPage").offset().top},
      'slow');
});