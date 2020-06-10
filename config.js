jQuery(document).ready(function($) {



$(window).load(function() {
	$('#demo_slider').flexslider({
		animationLoop: true,
		slideshow: true, 
		slideshowSpeed: 3000, 
		animationSpeed: 600,
		directionNav: true,
		controlNav: true,
		prevText: "",
		nextText: "",
	});
});

$(window).load(function() {
	$('#home-slider').flexslider({
		animationLoop: true,
		slideshow: true, 
		slideshowSpeed: 3000, 
		animationSpeed: 600,
		directionNav: true,
		controlNav: true,
		prevText: "",
		nextText: "",
	});
});


/* Basic Carousel slider configuration */
$(window).load(function() {

	container_width = $( window ).width();

	// tiny helper function to add breakpoints
	function getGridSize() {
	return (window.innerWidth < 321) ? 1 :
		(window.innerWidth < 600) ? 2 :
		(window.innerWidth < 900) ? 2 :
		(window.innerWidth < 1280) ? 3 : 3;
	}

	item_size = container_width / 3;
	// item_size = 640;
	$('#slider_basic_carrusel').flexslider({
		// selector: ".slides > li",
		// namespace: "flex-", //changes prefix of js generated elements
		animationLoop: true,
		slideshow: false,
		animation: "slide",
		slideshowSpeed: 4000, //time between slides
		animationSpeed: 600, //transition time
		randomize: false,
		pauseOnHover: false,
		controlNav: false, //bullets control
		directionNav: true, //arrows control
		prevText: "",
		nextText: "",
		itemWidth: item_size, //Item width is equal to container width divided by number of items. Not necesary to add margin to container width.
		itemMargin: 0, //Margin should be added in css too in .slide > li.
		minItems: getGridSize(),
		maxItems: getGridSize(),
	});
});


});