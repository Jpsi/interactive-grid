const fetchData = (callback) => {
  fetch("http://localhost:3001/data", { accept: "application/json" })
    .then((response) => response.json())
    .then(callback)
    .catch((error) => console.log(error));
};

export default fetchData;
