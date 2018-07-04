
$(document).ready(function(){
	$('.toggle').click(function(){
		$(this).parents('.navigation').find('ul li').slideToggle();
	});
});