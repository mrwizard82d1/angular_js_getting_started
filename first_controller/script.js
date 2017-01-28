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
 * When you attempt to load this page, it **still** fails. Beginning with Angular 1.3, the framework will no longer
 * search the global scope. For details, see this post on StackOverflow:
 * http://stackoverflow.com/questions/25111831/controller-not-a-function-got-undefined-while-defining-controllers-globally
 *
 * In addition to explaining the change to the framework, this post also describes how to register the function as a
 * controller. 
 */
