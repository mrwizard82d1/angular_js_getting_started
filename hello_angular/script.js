// Code goes here

/*
 * This script illustrates using functions as abstractions.
 */

// Begin by defining a function to do "real" work.
var work = function() {
  console.log("working hard!")
}

// The preceeding assignment **does not** actually invoke the function.
// The `function` keyword simply **defines** a value to be a function;
// that is, something one can invoke like `work()`.
//
// To actually invoke the function we defined, one must invoke or call
// it.
work();
