// Code goes here

/*
 * AngularJS invokes a function with the same name as the value of the `ng-controller` attribute on an HTML tag. 
 *
 * AngularJS invokes this function with a single parameter, `$scope`, (yes, this is a valid JavaScript variable name).
 * The value of this parameter is the JavaScript scope (environment) used when evaluating AngularJS binding expressions
 * in the scope of the tag containing the `ng-controller="MainController"` attribute.
 */
var MainController = function($scope) {

}

/*
 * I'm uncertain of the purpose of the `inject` call. I believe this function adds the variable `$scope` to the
 * controller when I register a controller function defined **outside** the scope of `angular.module`.
 *
 * After injecting the `$scope` variable, I register my function with the Angular application (`first-controller`).
 * This registration requires adding a value, `first-controller` to the `ng-app` attribute in my page. Additionally,
 * this registration allows me more indirection, I must use the name, a string, "MainController" because that name
 * agrees with the value of the `ng-controller` attribute defined on the `body` element; however, I could then name the
 * function whatever I wanted. (I'm uncertain if I could use an anonymous function if I had defined the controller
 * function inside the `angular.module` function.)
 */
MainController.inject = ['$scope'];
angular.module('first-controller', []).controller('MainController', MainController);
