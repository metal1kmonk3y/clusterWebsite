var main = function() {
  //links open in a new window
  $("a").attr('target', '_blank');
  //except for nav links
  $("a.nav-link").removeAttr('target');
  $("#backToTop").removeAttr('target');
  
  
  
 $("#topMenu, #backToTop").click(function(){
    $('html, body').animate({scrollTop: 'href'}, 100);
    $('html, body').animate({scrollTop: '-=150'}, 100);

 })
 
 
 
  //when window is resized change body padding
  $(window).resize(function() {
    
    if($(window).width() > 750 ){
      $("body").css("padding-top", 112); 
      window.location.reload();
    }
    else {
      $("body").css("padding-top", 424); 
      window.location.reload();
    }
  });
};

$(document).ready(main);