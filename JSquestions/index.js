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

// Question 1: map vs forEach ❓
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
