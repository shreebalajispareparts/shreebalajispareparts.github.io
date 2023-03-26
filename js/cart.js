
function addToCart(itemName, itemPrice){
    const productName = itemName;
    const productPrice = itemPrice;
    const productQuantity = 1; // Default quantity is 1

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let productIndex = cart.findIndex(item => item.name === productName);

    if (productIndex !== -1) {
      cart[productIndex].quantity += productQuantity;
    } else {
      cart.push({ name: productName, price: productPrice, quantity: productQuantity });
    }
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
}

 