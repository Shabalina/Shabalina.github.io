$(document).ready(function() {
	
	var generateDots = function () {
		$('.section').each(function() {
			console.log('here in cycle');
			var dot = $('<li>', {
				attr: {
					class: 'point__item'
				},
				html: '<a class="point__slide__link" href="#">'
			});
			
			$('.points').append(dot);
		})
	}
	
	var moveClass = function(dotIndex) {
		
		dots = $('.point__item', '.points');
		reqDot = dots.eq(dotIndex);	
		activeDot = dots.filter('.active_dot');
		
		activeDot.removeClass('active_dot');
		reqDot.addClass('active_dot');
		}
	
	
	generateDots();
//	moveClass(0);
	
	$('body').on('click', '.point__item', function() {
		var $this = $(this);
		reqDotIndex = $this.index();
		sections = $('.section', '.maincontent')
		shift = -reqDotIndex*(100/sections.length) + '%';
		console.log(shift);
		
		$('.maincontent').css({"-webkit-transform":"translateY(" + shift +")",
		    "-webkit-transition": ".5s"})		
		
		moveClass(reqDotIndex);
		
	});
	
/*	$(window).scroll(function() {
		var height = $(window).scrollTop();
		activeSect = (height-1)%650;
		
		moveClass(activeSect);
	})*/
	
})
