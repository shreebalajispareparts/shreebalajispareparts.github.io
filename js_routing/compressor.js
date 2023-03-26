fetch('https://app.shreebalajispareparts.com/visits/compressor.html')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

