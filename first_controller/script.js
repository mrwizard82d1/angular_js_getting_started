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

MainController.inject = ['$scope'];
angular.module('first-controller', []).controller('MainController', MainController);

/*
 * Although I've now successfully registered the `MainController` function with the `first-controller` Angular app, I
 * now run into the (in)famous silently fail feature.
 *
 * My controller function, `MainController` does not define a `message` attribute on `$scope`. When Angular renders the
 * body element, it evaluates the binding expression {{message}} in `$scope`. Because I never defined the attribute,
 * `$scope.message` is `undefined`; however, Angular detects that condition and "helpfully" renders **nothing** - and
 * displays no error in the console to help diagnose the issue.
 *
 * One can only detect this error by examining the rendered page source in the developer tools. I put the binding
 * expression, `{{message}}` inside an `<h1></h1>` tag. The final source rendered by the browser of this element is:
 *
 *		<h1 class="ng-binding"></h1>
 *
 * That is, the element has **no** content.
 *
 * Sigh...
 */
 */
