$(document).ready(function() {
	
	var moveSlide = function(container, activeSlide, slideNum) {
		
		console.log("slideNum: ", slideNum);
		
		items = container.find('.burger_slide');
		reqItem = items.eq(slideNum);
		list = container.find('.burger_slide_list');
		duration = 500;
		
			
		list.animate({
			'left': -slideNum *100 + '%'
		}, duration, function(){
			activeSlide.removeClass('active_slide');
			reqItem.addClass('active_slide');
			
			}
		);
		
		
	}

	
	
	
	$('.arrow-scroll-slide').on('click', function(e) {
    e.preventDefault()    
	
		var $this = $(this);
		container = $this.closest('.section.burgers');
		items = $('.burger_slide', container);
		activeItem = items.filter('.active_slide');
		//existedItem, edgeItem, reqItem;
		
		if ($this.hasClass('arrow-scroll-right')) {//forward
			existedItem = activeItem.next();
			edgeItem = items.first();						
		}
		
		if ($this.hasClass('arrow-scroll-left')) {//forward
			existedItem = activeItem.prev();
			edgeItem = items.last();	
		}
		
		reqItem = existedItem.length ? existedItem.index() : edgeItem.index();
		
		
		moveSlide(container, activeItem, reqItem);	

	})	  
	

});
