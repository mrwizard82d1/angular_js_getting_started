// Code goes here

/*
 * Time to display not just simple data, but data from an object.
 */
var MainController = function($scope) {
	// Define a new, private object, bound to `person`
	var person = {
		salutation: "Mr.",
		lastName: "Wizard",
		imageSource: "mrwizard_1.jpeg"
	};

	$scope.message = "Hello, Angular World!";
	// Add the internal (private) `person` object to the scope of the controller
	$scope.person = person;
}

MainController.inject = ['$scope'];
angular.module('first-controller', []).controller('MainController', MainController);

/*
 * This controller now works by making simple text, `message`, and a JavaScript object, `person`, available to the
 * controller.
 *
 */
