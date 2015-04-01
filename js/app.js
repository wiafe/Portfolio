var myApp = angular.module('myApp', ["ngRoute", "firebase", "appControllers"]);

// Where dependencies go
var appControllers = angular.module("appControllers", 
	["firebase"]);

//re-routing pages gives the single page feel
myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/projects', {
			templateUrl: 'views/projects.html',
			controller: 'RegistrationController'
		}).
		when('/welcome', {
			templateUrl: 'views/welcome.html',
			controller: 'RegistrationController'
		}).
		when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'RegistrationController'
		}).
		when('/skills', {
			templateUrl: 'views/skills.html',
			controller: 'MeetingsController'
		}).
		otherwise({
			redirectTo: '/welcome' //starts at login.html if they haven't logged in!
		});
}]);