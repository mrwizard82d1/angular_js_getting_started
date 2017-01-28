// Code goes here

// Imagine a situation in which an error is occurring on the page: the
// alert back shows '5' instead of the expected '4'. Use the Developer
// tools to diagnose the error.
//
// The general process:
// * Open the Developer Tools windows
// * Select the "Sources" window
// * Search for the file of interest (in this case `script.js`). (Yes,
//   this process assumes you have some idea about the file of
//   interest.) 
// * Put a break point on the line of interest. 
//   * Click to the left of the line number. A blue indicator will
//   appear.
// * Refresh the page. 
// * When it stops at the breakpoint
//   * Hover over variables of interest to display their values.
//     * Observe that `result` is 5
//     * Note that `result` is 2 + `operand`
//     * Observe that `operand` is 3
//     * Voila! You've found the problem.
// * Correct the issue and refresh the page
// * Remember that `F8` will continue execution.
var operand = 3;
var result = 2 + operand;
alert(result);
