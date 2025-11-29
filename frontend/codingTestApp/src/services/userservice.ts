const fetchUsers = async () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res)
    .catch((err) => ("Caught error on fetching data"));
};