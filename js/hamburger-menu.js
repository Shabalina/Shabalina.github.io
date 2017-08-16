$(document).ready(function() {
	$('.hamburger-menu-link').on('click', function(e) {
    e.preventDefault()

    $('.hamburger-menu').fadeIn(800);

  });
  
	$('.hamburger-menu__close').on('click', function(e) {
    e.preventDefault()

    $('.hamburger-menu').fadeOut(800);

  });
})