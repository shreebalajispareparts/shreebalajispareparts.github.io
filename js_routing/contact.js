fetch('http://localhost:5000/visits/contact.html')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
