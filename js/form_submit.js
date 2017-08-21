var validator = function(){
	var checkData = function(form){
		
		var flag = true;
		var fields = form.querySelectorAll("input, textarea");
		for (var i=0; i<fields.length; i++) {
	//	fields.forEach(function(item, i) {			
			//	if (item.value == "") {
				if (fields[i].value == "") {
				//	showEmptyError(item)
					showEmptyError(fields[i])
					flag = false;
				}

			/*	if (item.getAttribute("type") && !item.value.isNumeric()){
					showWrongNumberError(item)
					flag = false;
				}*/
			}

		return flag;

	}

	var showEmptyError = function(field){
		field.classList.add("show_error");
		console.log(field.getAttribute("data-error"));
		$(field).qtip({
			overwrite: false, // Make sure the tooltip won't be overridden once created
			content: field.getAttribute("data-error"),
			show: {
				event: event.type, // Use the same show event as triggered event handler
				ready: true // Show the tooltip immediately upon creation
			}
		}, event); // Pass through our live event to qTip
	}

	var showWrongNumberError = function(field){
		field.classList.add("show_error");
		$(field).qtip({
			overwrite: false, // Make sure the tooltip won't be overridden once created
			content: "Заполните поле цифрами, буквы и доугие символы недопустимы",
			show: {
				event: event.type, // Use the same show event as triggered event handler
				ready: true // Show the tooltip immediately upon creation
			}
		}, event); // Pass through our live event to qTip
	}
	
	return {
		init: function(form){
			checkData(form);
		}
	}
}



$(document).ready(function() {
	$('form').on('submit', function(e) {
	e.preventDefault(); 
    validator().init(this);

  });
  
	
})