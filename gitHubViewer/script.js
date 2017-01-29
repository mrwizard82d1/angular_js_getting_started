// Code goes here

/*
 * Time to display not just simple data, but data from an object.
 */
var MainController = function($scope, $http) {

	$scope.message = "Hello, Angular World!";

	var whenGetComplete = function(response) {
		$scope.person = response.data;
	}

	var ifErrorResponse = function(reason) {
		$scope.error = "Oops! Could not get person."
	}

	/**
	 * The function, `$http.get` is asynchronous. It returns a promise. A promise is an object with a `then` method. We
	 * supply a callback function invoked when the response is returned to our request. 
	 *
	 * In our situation, the callback function simply sets the `$scope.person` to `response.data`.
	 *
	 * If an error occurs, for example because I incorrectly typed the resource, I invoke the error callback,
	 * `ifErrorResponse`. This function sets `$scope.error` to the error message.
	 */
	$http.get("https://api.github.com/users/odetocode").then(whenGetComplete, ifErrorResponse);
}

/*
 * Aha! I just figured out the purpose of the call to `inject`. AngularJS support dependency injection. Calling the
 * `inject` method injects objects (dependencies) into the controller.
 */
MainController.inject = ['$scope', '$http'];
angular.module('first-controller', []).controller('MainController', MainController);

/*
 * This controller now works by making simple text, `message`, and a JavaScript object, `person`, available to the
 * controller.
 *
 */
