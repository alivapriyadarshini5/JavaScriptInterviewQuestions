//Write a JavaScript program to reverse a given string.
const reverseString = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseString("sdh")); //o/p:-hds

const Reverse2Check = (str) => {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
};

console.log(Reverse2Check("JOHN DOE")); //o/p:-NHOJ EOD
