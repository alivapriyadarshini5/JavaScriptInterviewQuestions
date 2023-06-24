const [data, setData] = useState();

useEffect(() => {
  // const uri: string = 'https://jsonplaceholder.typicode.com/users';
  setData({ ...data, loading: true });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((results) =>
      setData({
        ...data,
        loading: false,
        users: results,
      })
    )
    .catch((err) => setData({ ...data, loading: false, error: err }));

  //eslint-disable-next-line
}, []);
console.log(data);
// const { loading, users, error } = data;
// console.log(users);