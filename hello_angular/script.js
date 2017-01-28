// Code goes here

/*
 * Although the following code work, it does not scale well. The problem
 * is that each of the names, `createWorker` and `worker` are
 * **global**. In our current situation, having these two variables in
 * the global namespace causes no problems. 
 *
 * Now imagine a situation in which this script is part of many
 * different scripts bundled together on a page. Unfortunately, naming a
 * variable, `worker` and naming a function, `createWorker` is
 * **common**. Many of our team members have similar names in our code. 
 *
 * When we attempt to run this code together with our co-workers, we now
 * have a problem. When the JavaScript interpreter encounters the name,
 * `worker`, which value is it it bound to? If my teammates script
 * changed the value to which `worker` is bound **before** I evaluate
 * the expression `worker.job1()`, what will happen? We just do not
 * know. :()
 */

/*
 * Adding an enclosing scope can reduce **many* global names to a single
 * name. 
 */
var program = function() {
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
}

/*
 * We now invoke a **single** function to do all our work. Notice that
 * our script still has the same **behavior** as the previous versions;
 * however, it "pollutes" the global scope far, far less because it only
 * defines a single, global name.
 */
program();
