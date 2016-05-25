$(document).ready(function() {

	$('button').on('click',function(){

	    $(this).toggleClass('red');

	});

	$('button').hover(function(){

		$(this).toggleClass('green');

	});

	$(document).keypress(function(e) {
	    
	    if(e.which == 13) {

	        $('body').append('<button class="blue2">button</button>');
	    
	    }

	});
				      
});