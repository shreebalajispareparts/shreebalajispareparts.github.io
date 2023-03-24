fetch('https://ec2-52-90-31-169.compute-1.amazonaws.com:5000/visits/heater.html')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
