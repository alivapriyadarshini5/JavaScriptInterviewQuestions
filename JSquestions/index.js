//Question 0 :why js is loosely typed  ❓
//we can assign any data type to a variable in js.so it is called loosely typed.

// Question 1: null vs undefined ❓

//=>Undefined means the variable has been declared, but its value has not been assigned. Null means an empty value or a blank value..
//=>Undefined means a variable has been declared but has yet not been assigned a value. Null is an assignment value. It can be assigned to a variable as a representation of no value.
//=>In JS undefined is a type ,where as null is an object.
//=>UNDEFINED means a variable is declared but no value is assigned to it
var a;
console.log(a); //o/p:- undefined
console.log(typeof a); //o/p:- undefined
//=>Whereas,null in js is assign value.You can assign null to any variable
var a;
console.log(a); //o/p:- null
console.log(typeof a); //o/p:- object

// Question 2: map vs forEach ❓
const arr = [5, 7, 9, 8, 6];
const mapResult = arr
  ?.map((item) => {
    return item + 2;
  })
  .filter((item) => item > 7);

const forEachResult = arr?.forEach((ar, i) => {
  arr[i] = ar + 3;
});
// console.log(mapResult, forEachResult, arr);

//Question 3: What is JavaScript  ❓ What is the role of JavaScript engine ❓
//Ans-=>JavaScript is a programming language that is used for converting static web pages to interactive and dynamic web pages.
//=>A JS engine is a program present in web browsers that executes in JS code.

//Question 4: What are Client side and Server side  ❓
//Ans-=>A client is a device ,application or software component that requests and consumes services and resources from a server.
//=> A server is a device,device computer ,or software application that provides services, resources or functions to clients.

//Question 5: What is Scope in JS  ❓
//Ans-=> Scope determines where variables are defined and where they can be accessed.
//Example
// Global Scoped(accessible everywhere)
// let globalVariable = "global";
// const funVar = () => {
//   // Function Scoped(Accessible inside the function only)
//   let funVariable = "function";
//   if (true) {
//     // Block Scoped(Accessible within the block only)
//     let blockVariable = "block";
//     console.log(funVariable);
//     console.log(globalVariable);
//     console.log(blockVariable);
//   }
//   console.log(funVariable);//o/p:-"function"
//   console.log(globalVariable); //o/p:-"global"
// };
// funVar();
// console.log(globalVariable);

//Question 6: What is the type of variable in JS when it is declared without using the var,let, or const keyword ❓
//Ans-=> var is the implicit type of variable when a variable is declared without var,let,or const keywords.
//Example
if (true) {
  a = 10;
}
console.log(a);

//Question 7:  What is the datatypes present in js?
//Ans-=> There are two categories in datatypes i.e. Primitive, Non Primitive
//Primitive
//Primitive data types are string,number,undefined,null,boolean,bigint.
//it holds only single value.
//It is immutable,meaning their values, once assigned, cannot be changed.
//It is simple data type.
//Non Primitive
//Non Primitive data types are Array,object,date,Regx,functions.
//It can hold multiple values and methods.
//It is mutable and there values can be changed.
//It is complex data type.

//Question 8: What are operators ? Types of operators in JS?
//Ans-=> Operators are used to perform operations on operands or variables or expressions in JS.
//Types of operators in JS
//Arithmetic
//Logical
//Bitwise
//Relational
//Assignment

//Question 9: What is the difference between == and === ?
//Ans-=> == is used to compare two values and === is used to compare two values and data types

//Question 10: What is the difference between null and undefined ?
//Ans-=> Null is an assignment value. It can be assigned to a variable as a representation of no value.
//Undefined means a variable is declared but no value is assigned to it.

//Question 11: Pass by value vs pass by reference
//Ans-=> Pass by value is a process in which the value of the variable is passed to the function whereas pass by reference is a process in which the address of the variable is passed to the function.

//Question 12: What is DOM ?
//Ans-=> DOM is the Document Object Model. It is a representation of HTML document.
//Common DOM methods
//getElementById()
//getElementsByTagName()
//querySelector()
//querySelectorAll()
//createElement()
//createTextNode()

//Question 13: Explain the significance of Document Object Model ?
//Ans-=> It allows  us to create dynamic,interactive and user-friendly web pages.

//Question 14: Explain the significance of JavaScript Engine ?
//Ans-=> A JS engine is a program present in web browsers that executes in JS code.

//Question 15: Explain hoisting ?
//Ans-=> Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

//Question 16: Explain the difference between arrow function and normal function ?
//Ans-=> Arrow function is an alternative to normal function. It is a new syntax for writing function in ES6. It is an expression and it returns a value.
//Normal function is a statement and it returns a value
//Arrow function is an expression and it returns a value
//In Normal function we have to write return keyword and in arrow function we don't have to write return keyword.
//In Normal function we have to write curly braces and in arrow function we don't have to write curly braces.
//In Normal function we have to write semi-colon and in arrow function we don't have to write semi-colon
//In Normal function we have to write parenthesis and in arrow function we don't have to write parenthesis
//In Normal function we have to write function keyword and in arrow function we don't have to write function keyword
//Normal function is hoisted whereas arrow function is not hoisted.

//Question 17: What is promises in JS ?
//Ans-=> Promises in JS are used to perform asynchronous operations. It is an object that represents the eventual completion or failure of an asynchronous operation.
//It is a new feature introduced in ES6
//Promise has 3 states. Pending, fulfilled and rejected.

//Question 18: What is callback function ?
//Ans-=> A callback function is a function passed as an argument to another function. The callback function is executed after some operation is completed.
//It is a new feature introduced in ES6. It is used in asynchronous programming.

//Question 19: What is implicit vs explicit type conversion ?
//Ans-=> Implicit type conversion is a process of converting a value from one data type to another. Explicit type conversion is a process of converting a value from one data type to another.

//Question 20: What is implicit type coercion ?
//Ans-=> Implicit type coercion is a process of converting a value from one data type to another. It is a new feature introduced in ES6. It is used in implicit type conversion.

//Question 21: Is Js statically typed or dynamically typed ?
//Ans-=> Js is dynamically typed because we the value of the variable is determined at runtime.

//Question 22: Is Js case sensitive or not ?
//Ans-=> Js is case sensitive.

//Question 23: What is NaN in JS ?
//Ans-=> NaN is an invalid number in JS.

//Question 24: What is immediately invoked function expression in JS ?
//Ans-=> IIFE is a function that is invoked immediately after it is defined. It is a new feature introduced in ES6. It is used in asynchronous programming.

//Question 25: What is higher order function in JS ?
//Ans-=> Higher order function is a function that takes another function as an argument or returns a function. It is a new feature introduced in ES6. It is used in asynchronous programming.

//Question 26: Explain this keyword in JS ?
//Ans-=> This keyword is a reference to the current object. It is a new feature introduced in ES6. It is used in object-oriented programming.

//What is Memoization?
//Ans-=> Memoization is a technique in which the results of function calls are cached.When the same input is provided again, the cached result is returned instead of calling the function again.
