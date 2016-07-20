var main = function() {
  //links open in a new window
  $("a").attr('target', '_blank');
  //except for nav links
  $("a.nav-link").removeAttr('target');
  $("#backToTop").removeAttr('target');
  
   //when window is resized change body padding
  $(window).resize(function() {
    var width = $(window).width(); 
    $("body").append(width);
    if(width > 750 ){
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