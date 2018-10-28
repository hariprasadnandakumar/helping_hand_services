$(document).ready(function(){

  $('.home-hero-banner').css({
    'opacity':'1'
  });

  $('.home-hero-content-text-h1').css({
    'opacity':'1',
    'transform':'translateY(0%)'
  });

  $('.home-hero-content-cta-btn').css({
    'opacity':'1',
    'transform':'translateY(0%)'
  });

});


$(window).scroll(function(){
  var st = $(this).scrollTop();

  if(st>10){
    $("header").css({
      'top':'0px',
      'background-color':'rgba(255,255,255,0.95)'
    });
  }
  else if(st<100){
    $("header").css({
      'top':'-75px',
      'background-color':'rgba(255,255,255,0.35)'
    });
  }
});
