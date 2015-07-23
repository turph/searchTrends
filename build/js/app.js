// Custom JS Application Code

// If using JSLint for syntax debugging, include the following
/*global $, console, alert, App*/

$(function() { 
	App.init();
});

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

var App = { 

	settings: { 
		name: "sos",	
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

var app = angular.module('sos', []);
	app.controller('navSlideCtrl', function($scope) {
		$scope.myVar = true;
		$scope.toggle = function() {
			$scope.myVar = !$scope.myVar;
		};
	});
	
	
	





	
	
	
	
	
	


