//WAP to find the largest number in an array
const largestNumber = (arr) => {
  return Math.max(...arr);
};

console.log(largestNumber([1, 2, 3, 4, 5]));

//2nd approach
const largestNumber2ndMethod = (arr) => {
  return arr.sort((a, b) => b - a).at(0);
};

const largestNumber3rdMethod = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
  });
};

//4th approach
const largestNumber4thMethod = (arr) => {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

//5th approach
const largestNumber5thMethod = (arr) => {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

//6th approach
const largestNumber6thMethod = (arr) => {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};
