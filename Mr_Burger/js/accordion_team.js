$(document).ready(function() {
	$('.member_name').on('click', function(e) {
    e.preventDefault();

    var $this = $(this);
	memberBlock = $this.parent();
	clicked = memberBlock.index();
	container = $this.closest('.team_list');
	blocks = $('.team_member', container);
	items = $('.member_info', container);
	activeItem = $('li.team_member.active').index();
	
	
	if (activeItem >= 0){
		console.log ('activeItem: ', activeItem)
		items.eq(activeItem).slideUp(600);
		blocks.eq(activeItem).toggleClass('active'); //закрыли и выключили
		if (clicked != activeItem){
			items.eq(clicked).slideDown(600);
			blocks.eq(clicked).toggleClass('active'); //открыли и включили
			
		}
	}
	
	else{
		items.eq(clicked).slideDown(600);
		blocks.eq(clicked).toggleClass('active'); //открыли и включили впервые
			
	}
  })
})