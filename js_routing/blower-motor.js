fetch('http://localhost:5000/visits/blower-motor.html')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
