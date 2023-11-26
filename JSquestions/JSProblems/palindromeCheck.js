//Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
const palindromeCheck = (str) => {
  return str === str.split("").reverse().join("");
};
console.log(palindromeCheck("ala")); //o/p:-true

