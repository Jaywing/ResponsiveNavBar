$( function() {
  "use strict";
  
  // init js-nav-bar--responsive
  $('.js-nav-bar--responsive').each(function () { // cycle through each responsive nav-bar on the page
    var $navbar = $(this); // cache this nav-bar
    
    $navbar.find('.nav-bar__trigger').click(function (e) { // enable the nav-bar trigger
      e.preventDefault();
      $navbar.toggleClass('nav-bar--active');
    });
    
    $navbar.addClass('js-nav-bar--ready'); // enable the nav-bar with a "ready" class
    
  });

});
