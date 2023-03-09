fetch('http://localhost:5000/visits/sensor.html')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
