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
	 *
	 * For production code, I need to make one additional change. Most production code preprocesses the JavaScript sent
	 * the browser using minification. This preprocessing reduces the page download size; however, a "side-effect" is to
	 * change the names of local variables. For example, `$scope` might become the single letter 'n'. Although this
	 * change is intended by the minifier, when Angular finds the controller, it will look discover that it need **not**
	 * inject `$scope` and `$http` (because those named parameters are **not** arguments to `MainController`). But `n`
	 * and, for example, `x` are. Because we do not inject `$scope` and `$http`, the application will fail. 
	 *
	 * To address this issue, Angular has an alternative syntax for registering a controller: instead of simply passing
	 * the controller function, `MainController`, as the second argument to `controller`, pass an array. The last
	 * argument of the array is **still** `MainController`; however, preceeding arguments are the string names of the
	 * variables that AngularJS must pass when invoking the controller - even if it finds no parameters named `$scope`
	 * and `$http` in the function definition.
	 *
	 * (I think this reasoning might apply to other constructs I observed previously where we seemed to supply
	 * "meaningless" strings with the same values as the names of meaningfull parameters.)
	 */
	app.controller('MainController', ['$scope', '$http', MainController]);
}());

/*
 * And we're now back to working code. :)
 */
