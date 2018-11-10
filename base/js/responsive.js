// Responsive Mobiles
$(window).on('load resize', function(){          
	var ww = $('body').width();
	 if(ww <= 767){
	  $('.navigation').find('ul').slideUp(); 
	  if(!$(".navigation .child-trigger").length){
		$(".navigation ul li")
		.has( "ul" ).closest("li").children("a")
		.prepend("<span class='child-trigger'></span>");
	}
	}else{
	  $(".navigation ul li").find('span.child-trigger').remove();
	}        
	
	$(".child-trigger").click(function(e){
		e.stopPropagation();
		$(this).parent('a').next("ul").slideToggle();
		$(this).parent('a').toogleClass("active");
	});

  $('.toggle').click(function(e){
		e.stopPropagation();
	  $(this).next('ul').slideToggle();
  }); 
});