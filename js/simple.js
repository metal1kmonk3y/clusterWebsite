var main = function() {
 
  
  $("a").attr('target', '_blank');
  $("a.nav-link").removeAttr('target');

 
};

$(document).ready(main);