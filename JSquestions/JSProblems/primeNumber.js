//Write a JavaScript function to check if a given number is prime.
const isPrime = (number, currentDivisor = 2) => {
  if (number <= 1) {
    return false; // 0 and 1 are not prime numbers
  }
  if (currentDivisor > Math.sqrt(number)) {
    return true; // If we reached the square root without finding a divisor, it's prime
  }

  // Check for divisibility
  if (number % currentDivisor === 0) {
    return false; // If it's divisible, then it's not a prime number
  }

  // Move to the next divisor
  return isPrime(number, currentDivisor + 1);
};
console.log(isPrime(15));
