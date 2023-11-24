// Question 1: null vs undefined ❓
//=> In JS undefined is a type ,where as null is an object.
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
// Global Scoped(accessible everywhere)
let globalVariable = "global";
const funVar = () => {
  // Function Scoped(Accessible inside the function only)
  let funVariable = "function";
  if (true) {
    // Block Scoped(Accessible within the block only)
    let blockVariable = "block";
    console.log(funVariable);
    console.log(globalVariable);
    console.log(blockVariable);
    
  }
  console.log(funVariable);//o/p:-"function"
  console.log(globalVariable); //o/p:-"global"
};
funVar();
console.log(globalVariable);
