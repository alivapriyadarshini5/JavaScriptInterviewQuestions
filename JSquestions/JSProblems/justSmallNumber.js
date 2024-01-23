//find just small number in an array 
const justSmallNumber = (a, arr) => {
    const newArr = arr?.filter((num) => num < a)?.sort((a, b) => b - a);
    return newArr[0];
  };
  console.log(justSmallNumber(11, [9, 6, 11, 3]));
  