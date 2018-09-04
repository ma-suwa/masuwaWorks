$(function(){

  //contents_up
  $(window).on('load', function() {
    var windowHeight = $(window).height();
    if ($(this).scrollTop() < windowHeight/2) {
      $('body, html').animate({ scrollTop: windowHeight/2 }, 1000);
    }
  });

  //fadein
  $(window).scroll(function (){
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200){
          $(this).addClass('scrollin');
      }
    });
  });

});
