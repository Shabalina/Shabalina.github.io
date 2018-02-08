$(document).ready(function() {
	$('.hamburger-menu-link').on('click', function(e) {
    e.preventDefault()

    $('.hamburger-menu').fadeIn(800);

  });
  
	$('.hamburger-menu__close').on('click', function(e) {
    e.preventDefault()

    $('.hamburger-menu').fadeOut(800);

  });

  $('.nav__link-hamburger').on('click', function(e) {
    e.preventDefault()

    $('.hamburger-menu').fadeOut(800);

  });
})

$(document).ready(function() {
  
  $('.ingredients_icon').on('click', function() {
    
    $('.ingredients_menu').slideToggle(300);
  });

});