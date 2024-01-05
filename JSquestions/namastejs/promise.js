//Promise
//Promises in JS are used to perform asynchronous operations. It is an object that represents the eventual completion or failure of an asynchronous operation.
//Example
// Promise example
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulating asynchronous operation
    setTimeout(() => {
      const data = "This is the fetched data";
      if (data) {
        resolve(data); // Resolve the promise with the fetched data
      } else {
        reject("Failed to fetch data"); // Reject the promise with an error message
      }
    }, 2000);
  });
};

// Using the promise
fetchData()
  .then((data) => {
    console.log(data); // Handle the resolved promise
  })
  .catch((error) => {
    console.error(error); // Handle the rejected promise
  });
