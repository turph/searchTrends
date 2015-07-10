// Custom JS Application Code

// If using JSLint for syntax debugging, include the following
/*global $, console, alert, App*/

$(function() { 
	App.init();
});

var App = { 

	settings: { 
		name: "My Application",	
		version: "1.0.0",
		ga: {
			urchin: "UA-XXXXXX-XX",
			url: "yourdomain.com"
		}
	},

	listen: function() { 
		// Application Listeners can be loaded here for easy configuration		
		console.log("Ready and Listening");
	},	

	init: function() {
		// Kick off the listeners
		this.listen();
		// Application has been initalized
		console.log(this.settings.name + "(v" + this.settings.version + ") Started");	
	}

};

// Sticky header navigation
var offset = $( ".navRow" ).offset();
var sticky = document.getElementById("navRow");
$(window).scroll(function() {
	if ( $('body').scrollTop() >= 50){
		$('.navRow').addClass('fixed');
	} else {
		$('.navRow').removeClass('fixed');
	}
});

// Slide out site navigation

$(function() {
	$('#siteNav-btn').click(function() {
		$('.siteNavPanel').toggleClass("slide-out");
	});
});

// Dynamic sized charting iFrames
$(function() {
	$('.fullWidthChart').css('height', $(window).height()+'px');
});