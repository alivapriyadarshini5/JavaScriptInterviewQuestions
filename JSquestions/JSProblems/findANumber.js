//Find a number in Array
const findNumberInArray = (a, arr) => {
    const finalValue = arr?.filter((num) => num === a);
    return finalValue?.length ? finalValue?.length : 0;
  };
  console.log(findNumberInArray(9, [5, 5, 7, 8]));