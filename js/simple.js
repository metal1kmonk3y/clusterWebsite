var main = function() {
  //links open in a new window
  $("a").attr('target', '_blank');
  //except for nav links
  $("a.nav-link").removeAttr('target');
  $("#backToTop").removeAttr('target');
  
  
  
 $("#topMenu, #backToTop").click(function(){
    $("body").append("Some appended text."); 
    
     

    $('html, body').animate({scrollTop: 'href'}, 100);
    $('html, body').animate({scrollTop: '-=150'}, 100);

 })
 
 
 
  //when window is resized change body padding
  $(window).resize(function() {
    
    if($(window).width() > 750 ){
      $("body").css("padding-top", 100); 
      window.location.reload();
    }
    else {
      $("body").css("padding-top", 400); 
      window.location.reload();
    }
  });
};

$(document).ready(main);