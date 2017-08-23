$(document).ready(function() {
	$('.menu-acco__item').on('click', function(e) {
    e.preventDefault();

    var $this = $(this);
	menuBlock = $this.parent();
	clicked = menuBlock.index();
	container = $this.closest('.menu-accord');
	blocks = $('.menu_item', container);
	items = $('.menu-acco__info', container);
	activeItem = $('li.menu_item.menu_active').index();
	
	
	if (activeItem >= 0){
		console.log ('activeItem: ', activeItem)
		items.eq(activeItem).hide(300);
		blocks.eq(activeItem).toggleClass('menu_active'); //закрыли и выключили
		if (clicked != activeItem){
			items.eq(clicked).show(300);
			blocks.eq(clicked).toggleClass('menu_active'); //открыли и включили
			
		}
	}
	
	else{
		items.eq(clicked).show(300);
		blocks.eq(clicked).toggleClass('menu_active'); //открыли и включили впервые
			
	}
  })
})