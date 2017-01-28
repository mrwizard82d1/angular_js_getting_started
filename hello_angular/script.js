// Code goes here

/*
 * This script is an example of the "revealing module pattern."
 *
 * In this pattern, one **does not** write functions inline; instead,
 * one writes functions that return objects (the "module") containing
 * the functions exposed by the modules.
 */

/*
 * The function, `createWorker`, is a function returning an object (a
 * module) that contains the behavior exposed by our API.
 */
var createWorker = function() {

	/*
	 * `task1` is the name of an **internal** function. It is **not**
	 * exposed to consumers of the returned value.
	 */
	var task1 = function() {
		console.log("task1");
	}

	/*
	 * Similarly, `task2` is another internal function. Because of
	 * JavaScript scoping rules, its name is only available in the scope
	 * of `createWorker` (and any enclosed scopes).
	 */
	var task2 = function() {
		console.log("task2");
	}

	/*
	 * Finally, we return an object. The returned object exposes two
	 * members, `job1` and `job2` which are bound to the internal
	 * functions that do our work. 
	 */
	return {
		job1: task1,
		job2: task2
	}
}

var worker = createWorker();

/*
 * We invoke `task1` and `task2`, from the global scope but we
 * "see" neither `task1 nor `task2`. But we do see their result. :)
 */
worker.job1();
worker.job2();
