// binding a controller to myApp

myApp.controller('NameController',
	function($scope, $location) {

	//Using Services - redirects user after login
        $scope.login = function() {
            $location.path('/welcome');
        };

        this.user = {
            firstname: "Randy"
        };

	//$scope.register = function() {
	//	$location.path('/meetings');
	//}
		
	
	// Accessing and setting variables(functions) in login.html
	// $scope.login = function() {
	// 	alert($scope.user.email);


	// Testing for eventhandlers
	// $scope.$on('$viewContentLoaded', function() {
	// 	console.log($scope.myform);
	// })
}); // RegistrationController
