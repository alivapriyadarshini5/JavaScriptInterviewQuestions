//Higher Order Function
function higherOrderFunction(callback) {
  // Do some operations
  // Call the callback function
  callback();
}

function callbackFunction() {
  console.log("Callback function called");
}

higherOrderFunction(callbackFunction);

// Output: "Callback function called"

//Explain the difference between callback and higher order function
//Callback is a function passed as an argument to another function. It is executed after some operation is completed.
//Higher order function is a function that takes another function as an argument or returns a function. It is a new feature introduced in ES6. It is used in asynchronous programming.

//Example
const hoc = (fn) => {
  return fn();
};
fn = () => console.log("HOC called");

console.log(hoc(fn));
