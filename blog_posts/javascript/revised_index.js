console.log('Got here.');
$(document).ready(function () {
console.log('Ready!');

	$('#section_to_hide').hide();

	

	$('#portfolio_title').mouseenter(function(){
		$('#section_to_hide').show();
	});
    	// $('#portfolio_title').click(function(e){
    	// 	$('.section_to_hide').slideDown();
    	// });



});