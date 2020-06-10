jQuery(document).ready(function($) {

// Wait for the DOM to be ready

	//Modal load
	//1000 = 1s
	$( "#custom-modal-container" ).delay(1000).fadeIn( "slow");

	// Modal closing trigger
	$("#close-custom-modal").click(function () {
		$("#custom-modal-container").fadeOut();
	});

	// Initialize form validation on the registration form.
	// It has the name attribute "registration"
	$("form[name='mc-embedded-subscribe-form']").validate({

		// errorElement: "span",

		// Specify validation rules
		rules: {
		  // The key name on the left side is the name attribute
		  // of an input field. Validation rules are defined
		  // on the right side
		  EMAIL: {
			required: false,
			// Specify that email should be validated
			// by the built-in "email" rule
			email: true
		  },

		},
		// Specify validation error messages
		messages: {
		  EMAIL: "Introduce un correo válido.",
		},
		// Make sure the form is submitted to the destination defined
		// in the "action" attribute of the form when valid
		submitHandler: function(form) {
		  form.submit();
		}
	});


});