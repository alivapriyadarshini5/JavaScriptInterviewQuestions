const promiseData = fetch("https://jsonplaceholder.typicode.com/users");

promiseData
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
