fetch('https://100.25.143.135:5000/visits/heater.html')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
