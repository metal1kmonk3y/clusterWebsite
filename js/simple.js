var main = function() {
  //links open in a new window
  $("a").attr('target', '_blank');
  //except for nav links
  $("a.nav-link").removeAttr('target');
  $("#backToTop").removeAttr('target');
};

$(document).ready(main);