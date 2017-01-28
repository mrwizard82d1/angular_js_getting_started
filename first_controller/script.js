// Code goes here

/*
 * AngularJS invokes a function with the same name as the value of the `ng-controller` attribute on an HTML tag. 
 *
 * AngularJS invokes this function with a single parameter, `$scope`, (yes, this is a valid JavaScript variable name).
 * The value of this parameter is the JavaScript scope (environment) used when evaluating AngularJS binding expressions
 * in the scope of the tag containing the `ng-controller="MainController"` attribute.
 *
 * This commit investigates using an anonymous function for the controller.
 */
angular.module('first-controller', []).controller('MainController', ['$scope', function($scope) {
	$scope.message = "Hello, Angular World!";
}]);

