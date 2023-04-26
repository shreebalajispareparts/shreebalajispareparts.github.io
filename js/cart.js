
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

 //Integrating Gpay API

 function generate_paymentDataRequest(total_price){
  const paymentDataRequest = {
    merchantInfo: {
      merchantId: 'merchant_id',
      merchantName: 'merchant_name',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPrice: `${total_price}`,
      currencyCode: 'INR',
    },
    paymentMethodTokenizationParameters: {
      tokenizationType: 'PAYMENT_GATEWAY',
      parameters: {
        gateway: 'your_gateway',
        gatewayMerchantId: 'your_merchant_id',
      },
    },
    allowedPaymentMethods: ['CARD', 'TOKENIZED_CARD'],
    cardRequirements: {
      allowedCardNetworks: ['VISA', 'MASTERCARD'],
      billingAddressRequired: true,
    },
    shippingAddressRequired: true,
    shippingAddressParameters: {
      allowedCountryCodes: ['IN'],
    },
  };
  console.log(paymentDataRequest);

  const paymentsClient = new google.payments.api.PaymentsClient({
    environment: 'TEST',
    merchantInfo: {
      merchantId: 'merchant_id',
      merchantName: 'merchant_name',
    },
  });

  paymentsClient.loadPaymentData(paymentDataRequest)
  .then((paymentData) => {
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let user = JSON.parse(sessionStorage.getItem('user')) || [];
    // const createOrderRequest = {

    // };
     
    let firstName = user.firstName;
    let lastName = user.lastName;
    let country = user.country;
    let adress1 = user.adress1;
    let address2 = user.address2;
    let phone = user.phone;
    let city = user.city;
    let State = user.State;
    let zipCode = user.zipCode;
    let email = user.email;

    let order_items = [];
    cart.forEach(item => {
        const order_item = {
          "sku" : "",
          "name" : item.name,
          "quantity" : item.quantity,
          "price" : item.price,
          "weight" : "",
          "dimensions":{
            "length" : "",
            "breadth" : "",
            "height" : ""
          }
        } 
        order_items.push(order_item);
    });

  console.log(order_items);
    const endpointURL = `localhost:5000/create_order?orderId&order_date= "2019-07-24 11:11"&pickup_location="Kotkapura"&channel_id&comment&billing_customer_name=${firstName}&billing_last_name=${lastName}&billing_address=${adress1}&billing_address_2=${address2}&billing_city=${city}&billing_pincode=${zipCode}&billing_state=${State}&billing_country=${country}&billing_email=${email}&billing_phone=${phone}&shipping_is_billing="true"&order_items=${order_items}&payment_method="Prepaid"&shipping_charges=0&giftwrap_charges=0&transaction_charges=0&total_discount=0&sub_total`
    fetch(endpointURL)
    .then(response => response.json())
    .then(data => {
      // Handle the Shiprocket API response
    })
    .catch(error => {
      console.log("Api call error: " ,error);
    });
  })
  .catch((error) => {
    console.log("Google Api call error: " ,error);
  });

 }