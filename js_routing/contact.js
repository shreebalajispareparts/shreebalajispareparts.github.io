fetch('https://app.shreebalajispareparts.com/visits/contact.html')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
