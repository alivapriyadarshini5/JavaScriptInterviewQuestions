//Hoisting
//It is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
//only declaration is hoisted not initialization

//Example
console.log(x); // Output: undefined
var x = 10;

console.log(sayHello()); // Output: Hello
function sayHello() {
  return "Hello";
}

//Arrow function , let and const are not hoisted in JS
