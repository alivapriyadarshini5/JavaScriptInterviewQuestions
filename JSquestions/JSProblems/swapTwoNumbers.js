//WAP to swap two numbers?
const swapNumber = (a, b) => {
  //using third variable
  //   var temp;
  //   temp = b;
  //   b = a;
  //   a = temp;
  //   return { a, b };
  //without using third variable
  [a, b] = [b, a];
  return {
    a,
    b,
  };
};
console.log(swapNumber(1, 2));
