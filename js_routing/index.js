fetch('http://localhost:5000/visits/index.html')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));