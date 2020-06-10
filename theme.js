jQuery(document).ready(function($) {

	//Aquí van los Jquerys y JS personalizados del tema

	// Reduce el header al hacer scrolldown; la animación se realiza con CSS
	/*$(window).on("scroll touchmove", function () {
		$('#header-wrapper').toggleClass('tiny', $(document).scrollTop() > 0);
		$('#header').toggleClass('tiny', $(document).scrollTop() > 0);
		$('#header-logo img').toggleClass('tiny', $(document).scrollTop() > 0);
		$('#header-social').toggleClass('u-remove', $(document).scrollTop() > 0);
		$('#header #searchform').toggleClass('u-remove', $(document).scrollTop() > 0);
		$('#header-main-nav').toggleClass('tiny', $(document).scrollTop() > 0);	
	});*/
	
	// Versión responsive del menú; oculta la navegación y en su defecto aparece un botón para mostrar u ocultarl la navegación
	/*$('.toggle-nav').click(function(e) {
        $(this).toggleClass('activo');
        $('#header-main-nav ul').toggleClass('activo'); 
        e.preventDefault();
    });*/

	/* Smooth scrolling */
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	// Pone la clase .active a cualquier link que haya en el documento que corresponda con el url actual
	var url = window.location.href;
	$('a[href="'+url+'"]').addClass('active');

	/* Add span expander to submenu */
	// $('.menu-item-has-children').append('<span class="submenu-expander">+</span>');
	
	/*$('.submenu-expander').on('click',function (e) {
		// $('#demo').append('<span>'+$('textbox').val()+'</span>');
	  $(this).closest(".sub-menu").hide();
	});*/

	$('#top-secondary-trigger').click(function(e) {
        $('#top-secondary').toggleClass('top-secondary-triggered');
        e.preventDefault();
	 });


});