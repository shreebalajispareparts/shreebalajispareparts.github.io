fetch('https://app.shreebalajispareparts.com/visits/control-valve.html')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
