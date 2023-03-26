fetch('https://app.shreebalajispareparts.com/visits/blower-motor.html')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
