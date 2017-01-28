// Code goes here

/*
 * This script illustrates using functions as abstractions.
 */

// Begin by defining a function to do "real" work.
var work = function() {
	console.log("Working hard. Oops!");
	// Our "real work" now raises an exception.
	console.log(foo);
}

/*
 * AngularJS uses functions to abstract a framework. Just like an
 * object-oriented framework often uses abstract functions to define
 * placeholders for functions defined by derived classes, AngularJS (and
 * other JavaScript packages) use higher-level functions, for example,
 * functions taking functions as arguments, as a placeholder. I, the
 * consumer of the framework/package/module, define a function to do the
 * work needed by my application. I then pass that function as an
 * argument to a framework function.
 *
 */
var doWork = function(f) {

	// Notice that the framework function invokes the application
	// function in the midst of doing other work. In this case, it
	// simply logs the fact that it is starting work and when work ends.
	// Additionally, it wraps the supplied function in a `try-catch`
	// block, perhaps to provide a common mechanism to handle errors.

	console.log("Starting to do work.")

	try {
		f();
	} catch (ex) {
		// However, the `try-catch` block prevents the exception raised
		// by `work` from propogating up to the browser.
		console.log(ex);
	}

	console.log("Ending the work to be done.")

}

/*
 * Finally, at some later time, the framework invokes its function (in
 * this example, `doWork`). This invocation performs the work of the
 * framework *in addition to* the application work performed by `work`.
 */
doWork(work);

