// Code goes here

/*
 * And now for modules completely different...
 *
 * My `first-controller` app put my controller in the global namespace; however, this action is not necessary. The
 * tutorial put the entire script inside an IIFE (immediately invoked function expression).
 *
 * This action removes my definitions from the global namespace, but the application no longer works. :)
 */
(function() {
	var MainController = function($scope, $http) {

		$scope.message = "Hello, Angular World!";

		var whenGetComplete = function(response) {
			$scope.person = response.data;
		}

		var ifErrorResponse = function(reason) {
			$scope.error = "Oops! Could not get person."
		}

		$http.get("https://api.github.com/users/odetocode").then(whenGetComplete, ifErrorResponse);
	}

	MainController.inject = ['$scope', '$http'];
	angular.module('first-controller', []).controller('MainController', MainController);


}());
