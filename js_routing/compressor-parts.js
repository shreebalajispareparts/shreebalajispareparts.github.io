fetch('http://localhost:5000/visits/compressor-parts.html')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
