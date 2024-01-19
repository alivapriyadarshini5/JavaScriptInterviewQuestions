//Deep Copy vs Shallow Copy
//example
const person1 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
  },
};
//Deep Copy
const person2 = JSON.parse(JSON.stringify(person1));
person2.name = "Ram";
person2.address.city = "Los Angeles";
console.log(person1, person2);

//Shallow Copy
const person3 = { ...person1 };
person3.name = "Ram";
person3.address.city = "Los Angeles";
console.log(person1, person3);

//Explain the difference between deep copy and shallow copy
//Deep copy is a copy of an object or an array. Shallow copy is a copy of an object or an array.

function ali() {
  var a = 5;
}

ali();
// console.log(a);
const word = "John Doe";
const reverseFunc = (word) => {
  const a = word.split("").reverse().join("").split(" ");
  return a.reverse().join(" ");
};
console.log(reverseFunc("John Doe Alexa"));

const sortArray = (arr) => {
  return arr.sort((a, b) => b - a);
};

// console.log(sortArray([4, 1, 5]));
const ale = [3, 4, 5];
const aleq = ale.unshift(0);
console.log(ale);

//currying
function curryAdd(a) {
  return function (b) {
    return a + b;
  };
}
console.log(curryAdd(5)(6));
