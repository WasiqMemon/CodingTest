export const fetchUsers = async () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.body)
    .catch((err) => {
      console.log(err);
      throw ("Caught error on fetching data");
    });
};