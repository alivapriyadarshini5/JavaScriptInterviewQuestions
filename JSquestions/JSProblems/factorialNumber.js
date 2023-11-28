//Write a JavaScript program to calculate the factorial of a given number.
const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Example usage
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
