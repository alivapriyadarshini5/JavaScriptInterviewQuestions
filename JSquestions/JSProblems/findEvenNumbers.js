//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
const findEvenNumbers = (arr) => {
  return arr?.filter((num) => num % 2 === 0);
};
console.log(findEvenNumbers([2,5,7,10])) //o/p:- [ 2, 10 ]