fetch('https://app.shreebalajispareparts.com/visits/compressor-parts.html')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
