// Question 1: map vs forEach
const arr = [5, 7, 9, 8, 6];
const mapResult = arr
  ?.map((item) => {
    return item + 2;
  })
  .filter((item) => item > 7);

const forEachResult = arr?.forEach((ar, i) => {
  arr[i] = ar + 3;
});
console.log(mapResult, forEachResult, arr);
