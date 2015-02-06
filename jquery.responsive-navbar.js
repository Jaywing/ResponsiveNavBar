/*
 * Responsive nav-bar
 *
 * Dependancies:
 *   jQuery
 *
 * Author:
 *   James Taylor
 *
 * Date:
 *   06/02/2015
 *
 * HTML Pattern:
   <nav class="nav-bar js-nav-bar--responsive">
     <a href="#nav-menu" class="nav-bar__trigger">Menu</a>
     <ul id="nav-menu" class="nav-bar__menu">
      <li class="nav-bar__item"><a href="#">Menu item</a></li>
      ......
    </ul>
   </nav>
 *
 */

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
