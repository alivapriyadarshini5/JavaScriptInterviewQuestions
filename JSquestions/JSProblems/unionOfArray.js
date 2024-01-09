//WAP to find union of two arrays.

const unionOfArray = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};

console.log(unionOfArray([1, 2, 3], [2, 3, 4]));

//o/p:-[1,2,3,4]
