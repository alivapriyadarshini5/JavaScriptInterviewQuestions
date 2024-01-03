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
