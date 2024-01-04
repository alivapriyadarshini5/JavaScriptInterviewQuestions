//Pass by value vs pass by reference
// Pass by value

function passByValue(value) {
  value = 10;
  console.log("Inside passByValue:", value); // Output: 10
}

let num = 5;
console.log("Before passByValue:", num); // Output: 5
passByValue(num);
console.log("After passByValue:", num); // Output: 5

// Pass by reference
function passByReference(obj) {
  obj.name = "John";
  console.log("Inside passByReference:", obj); // Output: { name: 'John' }
}

let person = { name: "Alice" };
console.log("Before passByReference:", person); // Output: { name: 'Alice' }
passByReference(person);
console.log("After passByReference:", person); // Output: { name: 'John' }

//Explain the difference between pass by value and pass by reference
//Pass by value is a process in which the value of the variable is passed to the function whereas pass by reference is a process in which the address of the variable is passed to the function.
