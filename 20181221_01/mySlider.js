document.write("<script type='text/javascript' src='./bxslider/dist/jquery.bxslider.min.js'></script>");

jQuery(document).ready(function($){
	$('.bxslider').bxSlider({
		mode: 'vertical',
		slideMargin: 0,
		slideWidth: 640,
		sliideHeight: 360,
		minSlides: 1
		// caption: true
	});
});