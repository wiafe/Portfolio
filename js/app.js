var myApp = angular.module('myApp', ["ngRoute", "firebase", "appControllers"]);

// Where dependencies go
var appControllers = angular.module("appControllers", 
	["firebase"]);

myApp.controller('HelloController', function($scope, $location) {

    $scope.user = {
        firstname: ''
    }
});

//re-routing pages gives the single page feel
myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/projects', {
			templateUrl: 'views/projects.html',
			controller: 'NameController'
		}).
		when('/welcome', {
			templateUrl: 'views/welcome.html',
			controller: 'NameController'
		}).
		when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'NameController'
		}).
        when('/massage', {
            templateUrl : 'views/partials/massage.html',
            controller  : 'NameController'
        }).
        when('/extra', {
            templateUrl: 'views/extra.html',
            controller: 'NameController'
        }).
		when('/skills', {
			templateUrl: 'views/skills.html',
			controller: 'NameController'
		}).
        when('/hello', {
            templateUrl: 'views/hello.html',
            controller: 'NameController'
        }).
		otherwise({
			redirectTo: 'hello'
		});
}]);