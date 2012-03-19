$(document).ready(function(){
	$('.logo').hover(
		function(){
			$(this).fadeTo(0, 0.6).fadeTo('slow', 1);
		},
		function(){
			$(this).fadeTo('fast', 1);
		}
	);
});
