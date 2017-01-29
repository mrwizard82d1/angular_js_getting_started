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
	/*
	 * Begin by defining the Angular app.
	 *
	 * The name must be equal to the value of the `ng-app` attribute in the `html` tag on the page.
	 *
	 * In addition, notice the empty array second argument. Forget this argument and you are no longer **definining** a
	 * module but getting a module. If I had defined my application in **another** script, I would simply reference the
	 * application using the single argument form, but I have chosen, for simplicity (and similarity to the tutorial
	 * code), to define it in the same file as my controller.
	 */
	var app = angular.module('gitHubViewer', []);

	/*
	 * The code defining the controller is exactly the same as previously.
	 */
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

	/*
	 * Having defined my controller, the value referenced by the variable `MainController`, I now register that
	 * controller with the application.
	 */
	app.controller('MainController', MainController);
}());

/*
 * And we're now back to working code. :)
 */
