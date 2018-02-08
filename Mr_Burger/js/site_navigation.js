

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
	
	var moveSlide = function(index){
		
		var position = (index * -100) + '%';
		
	//	console.log($('.point__item').eq(reqDotIndex).attr('class'));

		$('.maincontent').css({
		  'transform': 'translateY(' + position + ')',
		  '-webkit-transform': 'translateY(' + position + ')'
		})		
		
		$('.section').eq(index).addClass('active_section')
		.siblings().removeClass('active_section');
		
		$('.point__item').eq(index).addClass('active_dot')
        .siblings().removeClass('active_dot');
		
	//	console.log($('.point__item').eq(index).attr('class'));
		
	};	
	
	
	generateDots();
	
	$('body').on('click', '.point__item', function() {
		var $this = $(this);
		
		moveSlide($this.index());
		
	})
	
	
	//menu_navigation	
		
	$('.nav__link').on('click', function(e) {
		e.preventDefault()
	    var $this = $(this);
		reqSlide = parseInt($(this).attr("data-goto"));
		moveSlide(reqSlide);
	})
	
	$('.order-link').on('click', function(e) {
		e.preventDefault()
	    var $this = $(this);
	//	console.log('page: ', $(this).attr("data-goto"))
		reqSlide = parseInt($(this).attr("data-goto"));
		moveSlide(reqSlide);
	})
	
})

//menu_navigation



//onepage
$(document).ready(function() {
  var sections = $('.section');
  var  display = $('.maincontent');
    inScroll = false;

 /* var md = new MobileDetect(window.navigator.userAgent),
    isMobile = md.mobile();*/

  var performTransition = function (sectionEq) {

    if (inScroll) return

    inScroll = true;
	
	if(sectionEq == 8){
		sectionEq = 7;
	}
	
//	console.log('sectionEq: ', sectionEq);

    var position = (sectionEq * -100) + '%';

    display.css({
      'transform': 'translateY(' + position + ')',
      '-webkit-transform': 'translateY(' + position + ')'
    })

    sections.eq(sectionEq).addClass('active_section')
      .siblings().removeClass('active_section');

    setTimeout(function () {
      inScroll = false;
      $('.point__item').eq(sectionEq).addClass('active_dot')
        .siblings().removeClass('active_dot');
    }, 1300);
  }

  var defineSections = function (sections) {
    var activeSection = sections.filter('.active_section');
    return {
      activeSection: activeSection,
      nextSection: activeSection.next(),
      prevSection: activeSection.prev()
    }
  }

  var scrollToSection = function (direction) {
    var section = defineSections(sections);

    if (direction == 'up' && section.nextSection.length) { //скроллим вверх
      performTransition(section.nextSection.index());
    }

    if (direction == 'down' && section.prevSection.length) { //скроллим вниз
      performTransition(section.prevSection.index());
    }
  }

  $('.wrapper').on({
    wheel: function (e) {
      var deltaY = e.originalEvent.deltaY;
      var direction = deltaY > 0 ?
        'up' :
        'down';

      scrollToSection(direction)
    },

    touchmove: function (e) {
      e.preventDefault();
    }
  });


  $(document).on('keydown', function (e) {
    var section = defineSections(sections);

    switch (e.keyCode) {
      case 40: //вверх
        if (section.nextSection.length) {
          performTransition(section.nextSection.index());
        }
        break;
      case 38: //вниз
        if (section.prevSection.length) {
          performTransition(section.prevSection.index());
        }
        break;

    }
  });

  $('[data-scroll-to]').on('click', function (e) {
    e.preventDefault()

    var elem = $(e.target);
    var sectionNum = parseInt(elem.attr('data-scroll-to'));

    performTransition(sectionNum);
  });

  if (isMobile) {
    $(window).swipe({
      swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        scrollToSection(direction);
      }
    });
  }

});
