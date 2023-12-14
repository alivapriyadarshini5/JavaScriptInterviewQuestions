//WAP whether the given year is a leap year or not.

//A year is called a leap year, when
//Either it is divided by 4 but not by 100.
//or it is divided by 400
const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 !== 0) {
      return true;
    }
  }
  if (year % 400 === 0) {
    return true;
  }
  return false;
};
console.log(isLeapYear(2023));
