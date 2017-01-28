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
	 * Remember that any variables defined in this function are
	 * only visible within this function; that is, they are private. But
	 * they **are** visible to functions defined within this function.
	 */
	var workerCount = 0;

	/*
	 * `task1` is the name of an **internal** function. It is **not**
	 * exposed to consumers of the returned value.
	 *
	 * `task1` increments the local (private) variable `workerCount` and
	 * then logs its value.
	 */
	var task1 = function() {
		workerCount++;
		console.log("task1", workerCount);
	}

	/*
	 * Similarly, `task2` is another internal function. Because of
	 * JavaScript scoping rules, its name is only available in the scope
	 * of `createWorker` (and any enclosed scopes).
	 *
	 * Similarly, `task2` increments the private variable `workerCount`.
	 *
	 */
	var task2 = function() {
		workerCount++;
		console.log("task2", workerCount);
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
 *
 * Invoking `job1` and `job2` increments the variable `workerCount`
 * which is only local to the `createWorker` function.
 */
worker.job1();
worker.job2();
worker.job2();
worker.job2();
