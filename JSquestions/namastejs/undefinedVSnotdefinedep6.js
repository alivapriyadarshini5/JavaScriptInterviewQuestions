//undefined vs not defined
//undefined means the variable has been declared, but its value has not been assigned.
//null means an empty value or a blank value.

//Not defined means a variable does not exist.
//null is an assignment value. It can be assigned to a variable as a representation of no value.

//example
var a;
console.log(a);
console.log(typeof a);

//why js is loosely typed ?
//we can assign any data type to a variable in js.so it is called loosely typed.
//example
var x = 5; // x is a number
console.log(x); // Output: 5

x = "Hello"; // x is now a string
console.log(x); // Output: Hello

x = true; // x is now a boolean
console.log(x); // Output: true
