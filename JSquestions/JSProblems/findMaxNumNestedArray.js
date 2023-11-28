//Write a JavaScript program to find the largest element in a nested array

const findMaxNumNestedArray = (arr) => {
  return Math.max(...arr.flat());
};

// Example usage:
const nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const maxNumber = findMaxNumNestedArray(nestedArray);
console.log(`The maximum number is: ${maxNumber}`);
