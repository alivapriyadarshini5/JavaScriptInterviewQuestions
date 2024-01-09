//WAP to find intersection of two arrays.

//1st method
const intersectionOfArray = (arr1, arr2) =>
  arr1?.filter((item) => arr2?.includes(item));

console.log(intersectionOfArray([1, 2, 3], [2, 3, 4]));

//o/p:-[2,3]
