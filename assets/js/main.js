$(document).ready(function(){

	// window.alert('it is working');
	$nav = $('.nav');
	$toggleClass = $('.toggle-collpase');
	$toggleClass.click(function(){
	// window.alert('it is working');
	$nav.toggleClass('collapse');
	});
	// Owl-carousel
	$('.owl-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:2000,
		nav:true,
		nextText:[$('.owl-navigation .owl-nav-prev'),
			$('.owl-navigation .owl-nav-next')
		]
	});

});
