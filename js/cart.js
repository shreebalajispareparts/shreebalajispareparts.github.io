// function addToCart(itemName, product_id, itemPrice){
//     const productName = itemName;
//     const productPrice = itemPrice;
//     const product_id = product_id;
//     const productQuantity = 1; // Default quantity is 1

//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     let productIndex = cart.findIndex(item => item.name === productName);

//     if (productIndex !== -1) {
//       cart[productIndex].quantity += productQuantity;
//     } else {
//       cart.push({ name: productName, price: productPrice, quantity: productQuantity, id: product_id });
//     }
//     console.log(cart);
//     localStorage.setItem('cart', JSON.stringify(cart));
// }











//  Integrating Gpay API

//  const stripe = Stripe('pk_test_51NISOmSDkPzV1XKEVmB3kqf8IQlAB8ASSoEWu8104bc3DsBftNOcYRnd3SWt9R1RouU9IZk7zeegN5KqRYNpF5tu00B4BhMKP3');

//  function generate_paymentDataRequest(total_price){
//   const paymentDataRequest = {
//     merchantInfo: {
//       merchantId: 'BCR2DN4TULQ7LAZK',
//       merchantName: 'Shree Balaji Spare Parts',
//     },
//     transactionInfo: {
//       totalPriceStatus: 'FINAL',
//       totalPrice: `${total_price}`,
//       currencyCode: 'INR',
//     },
//     paymentMethodTokenizationParameters: {
//       tokenizationType: 'PAYMENT_GATEWAY',
//       parameters: {
//         gateway: 'stripe',
//         // gatewayMerchantId: 'pk_test_51NISOmSDkPzV1XKEVmB3kqf8IQlAB8ASSoEWu8104bc3DsBftNOcYRnd3SWt9R1RouU9IZk7zeegN5KqRYNpF5tu00B4BhMKP3',
//         'stripe:version': '2022-11-15',
//         'stripe:publishableKey': 'pk_test_51NISOmSDkPzV1XKEVmB3kqf8IQlAB8ASSoEWu8104bc3DsBftNOcYRnd3SWt9R1RouU9IZk7zeegN5KqRYNpF5tu00B4BhMKP3',
//       },
//     },

//     allowedPaymentMethods: ['CARD', 'TOKENIZED_CARD'],
    
//     cardRequirements: {
//       allowedCardNetworks: ['VISA', 'MASTERCARD'],
//       billingAddressRequired: true,
//     },
//     shippingAddressRequired: true,
//     shippingAddressParameters: {
//       allowedCountryCodes: ['IN'],
//     },
//   };
//   console.log(paymentDataRequest);

//   const paymentsClient = new google.payments.api.PaymentsClient({
//     environment: 'TEST',
//     merchantInfo: {
//       merchantId: 'BCR2DN4TULQ7LAZK',
//       merchantName: 'Shree Balaji Spare Parts',
//     },
//   });

//   paymentsClient.loadPaymentData(paymentDataRequest)
//   .then((paymentData) => {
//     console.log(paymentData);
//     const object = paymentData.paymentMethodToken;
//     const method = object.tokenizationType;
//     const token = JSON.parse(object.token);
//     console.log(token);
//     if (paymentData.paymentMethodToken) {
//             const url = `http://localhost:5000/payment_verification?paymentMethodToken=${token.id}`;
//             fetch(url)
//             .then(response => response.json())
//             .then(data => {
//               if (data.success) {
//                 // Payment verification successful
//                 let cart = JSON.parse(localStorage.getItem('cart')) || [];
//                 let user = JSON.parse(sessionStorage.getItem('user')) || [];
                
//                 var data = {
//                   "order_id": "224-447",
//                   "order_date": "2023-07-24 11:11",
//                   "pickup_location": "Shreebalajispareparts",
//                   "channel_id": "",
//                   "comment": "Reseller: M/s Goku",
//                   "billing_customer_name": "Naruto",
//                   "billing_last_name": "Uzumaki",
//                   "billing_address": "House 221B, Leaf Village",
//                   "billing_address_2": "Near Hokage House",
//                   "billing_city": "New Delhi",
//                   "billing_pincode": "110002",
//                   "billing_state": "Delhi",
//                   "billing_country": "India",
//                   "billing_email": "naruto@uzumaki.com",
//                   "billing_phone": "9876543210",
//                   "shipping_is_billing": true,
//                   "shipping_customer_name": "",
//                   "shipping_last_name": "",
//                   "shipping_address": "",
//                   "shipping_address_2": "",
//                   "shipping_city": "",
//                   "shipping_pincode": "",
//                   "shipping_country": "",
//                   "shipping_state": "",
//                   "shipping_email": "",
//                   "shipping_phone": "",
                  
//                   "payment_method": "Prepaid",
//                   "shipping_charges": 0,
//                   "giftwrap_charges": 0,
//                   "transaction_charges": 0,
//                   "total_discount": 0,
//                   "sub_total": 9000,
//                 };
                
                
//                 let firstName = user.firstName;
//                 let lastName = user.lastName;
//                 let country = user.country;
//                 let adress1 = user.adress1;
//                 let address2 = user.address2;
//                 let phone = user.phone;
//                 let city = user.city;
//                 let State = user.State;
//                 let zipCode = user.zipCode;
//                 let email = user.email;

//                 let order_items = [];
//                 cart.forEach(item => {
//                     const order_item = {
//                       "sku" : "",
//                       "name" : item.name,
//                       "units" : item.quantity,
//                       "selling_price" : item.price,
//                       "weight" : "",
//                       "dimensions":{
//                         "length" : "",
//                         "breadth" : "",
//                         "height" : ""
//                       }
//                     } 
//                     order_items.push(order_item);
//                 }); 
//                 console.log(order_items);
//                 const endpointURL = `localhost:5000/create_order?orderId&order_date= "2019-07-24 11:11"&pickup_location="Kotkapura"&channel_id&comment&billing_customer_name=${firstName}&billing_last_name=${lastName}&billing_address=${adress1}&billing_address_2=${address2}&billing_city=${city}&billing_pincode=${zipCode}&billing_state=${State}&billing_country=${country}&billing_email=${email}&billing_phone=${phone}&shipping_is_billing="true"&order_items=${order_items}&payment_method="Prepaid"&shipping_charges=0&giftwrap_charges=0&transaction_charges=0&total_discount=0&sub_total`
//                 fetch(endpointURL)
//                 .then(response => response.json())
//                 .then(data => {
//                   // Handle the Shiprocket API response
//                 })
//                 .catch(error => {
//                   console.log("Api call error: " ,error);
//                 });
//               } else {
//                 // Payment verification failed
//                 console.log('Payment verification failed.');
//               }
//             })
//             .catch(error => {
//               console.log('Error verifying payment:', error);
//             });
//     } else {
//     console.log('Payment was not successful.');
//     }
//   })
//   .catch((error) => {
//     console.log("Google Api call error: " ,error);
//   });

//  }
















// const tokenizationSpecification = {
//   tokenizationType: 'PAYMENT_GATEWAY',
//   parameters: {
//     gateway: 'stripe',
//     // gatewayMerchantId: 'pk_test_51NISOmSDkPzV1XKEVmB3kqf8IQlAB8ASSoEWu8104bc3DsBftNOcYRnd3SWt9R1RouU9IZk7zeegN5KqRYNpF5tu00B4BhMKP3',
//     'stripe:version': '2022-11-15',
//     'stripe:publishableKey': 'pk_test_51NISOmSDkPzV1XKEVmB3kqf8IQlAB8ASSoEWu8104bc3DsBftNOcYRnd3SWt9R1RouU9IZk7zeegN5KqRYNpF5tu00B4BhMKP3',
//   },
// }

// const cardPaymentMethod = {
//   type: 'CARD',
//   tokenizationSpecification : tokenizationSpecification,
//   parameters: {
//     allowedCardNetworks: ['Visa', 'MASTERCARD'],
//     allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
//   }
// }

// const googlePayConfiguration = {
//   apiVersion: 2,
//   apiVersionMinor: 0,
//   allowedPaymentMethods: [cardPaymentMethod],
// };

// let googlePayClient;

// function onGooglePayLoaded() {
//   console.log('called');
//   googlePayClient = new google.payments.api.PaymentsClient({
//     environment: 'TEST',
//   })

//   googlePayClient.isReadyToPay(googlePayConfiguration)
//     .then(response => {
//       if(response.result) {
//         createAndAddButton();
//       } else {
//         //current user can not pay using this payment method
//       }
//     })
//     .catch(error => console.log('isReadyToPay error: ', error));
// }

// function createAndAddButton () {
//   const googlePayButton = googlePayClient.createButton({
//     onClick: onGooglePayButtonClicked, 
//   });

//   document.getElementById('buy-now').appendChild(googlePayButton);
// }

// function onGooglePayButtonClicked(){
//   console.log('button');
//   const paymentDataRequest = { ...googlePayConfiguration };
//   paymentDataRequest.merchantInfo = {
//     merchantId: 'BCR2DN4TULQ7LAZK',
//     merchantName: 'Shree Balaji Spare Parts',
//   };

//   paymentDataRequest.transactionInfo = {
//     totalPriceStatus: 'FINAL',
//     totalPrice: '0.00',
//     currencyCode: 'INR',
//     countryCode: 'IN',
//   };

//   console.log(paymentDataRequest.allowedPaymentMethods[0].tokenizationSpecification.tokenizationType);

//   googlePayClient.loadPaymentData(paymentDataRequest)
//     .then(paymentData => processPaymentData(paymentData))
//     .catch(error => console.error('loadPaymentData error: ', error));
// }

// function processPaymentData(paymentData) {
//   console.log(paymentData);
//   console.log('function called');
// }




const stripe = Stripe('pk_test_51NISOmSDkPzV1XKEVmB3kqf8IQlAB8ASSoEWu8104bc3DsBftNOcYRnd3SWt9R1RouU9IZk7zeegN5KqRYNpF5tu00B4BhMKP3');

function generate_paymentDataRequest(total_price) {
  const paymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    merchantInfo: {
      merchantId: 'BCR2DN4TULQ7LAZK',
      merchantName: 'Shree Balaji Spare Parts',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPrice: `${total_price}`,
      currencyCode: 'INR',
    },
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['VISA', 'MASTERCARD'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'stripe',
            'stripe:version': '2020-08-27',
            'stripe:publishableKey': 'pk_test_51NISOmSDkPzV1XKEVmB3kqf8IQlAB8ASSoEWu8104bc3DsBftNOcYRnd3SWt9R1RouU9IZk7zeegN5KqRYNpF5tu00B4BhMKP3',
          },
        },
      },
    ],
    shippingAddressRequired: false,
    shippingAddressParameters: {
      allowedCountryCodes: ['IN'],
    },
  };
  console.log(paymentDataRequest);

  const paymentsClient = new google.payments.api.PaymentsClient({
    environment: 'TEST',
    merchantInfo: {
      merchantId: 'BCR2DN4TULQ7LAZK',
      merchantName: 'Shree Balaji Spare Parts',
    },
  });

  paymentsClient.loadPaymentData(paymentDataRequest)
    .then(function(paymentData) {
      // handle the response
      processPayment(paymentData);
    })
    .catch(function(err) {
      // show error in developer console for debugging
      console.error(err);
    });

    function processPayment(paymentData) {
      // show returned data in developer console for debugging
        console.log(paymentData);
      // @todo pass payment token to your gateway to process payment
      paymentToken = JSON.parse(paymentData.paymentMethodData.tokenizationData.token);

      console.log(paymentToken);
      if (paymentData.paymentMethodData) {
        const url = `http://localhost:5000/payment_verification?token=${paymentToken.id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            // Payment verification successful
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let user = JSON.parse(sessionStorage.getItem('user')) || [];
            
            var data = {
              "order_id": "224-447",
              "order_date": "2023-07-24 11:11",
              "pickup_location": "Shreebalajispareparts",
              "channel_id": "",
              "comment": "Reseller: M/s Goku",
              "billing_customer_name": "Naruto",
              "billing_last_name": "Uzumaki",
              "billing_address": "House 221B, Leaf Village",
              "billing_address_2": "Near Hokage House",
              "billing_city": "New Delhi",
              "billing_pincode": "110002",
              "billing_state": "Delhi",
              "billing_country": "India",
              "billing_email": "naruto@uzumaki.com",
              "billing_phone": "9876543210",
              "shipping_is_billing": true,
              "shipping_customer_name": "",
              "shipping_last_name": "",
              "shipping_address": "",
              "shipping_address_2": "",
              "shipping_city": "",
              "shipping_pincode": "",
              "shipping_country": "",
              "shipping_state": "",
              "shipping_email": "",
              "shipping_phone": "",
              
              "payment_method": "Prepaid",
              "shipping_charges": 0,
              "giftwrap_charges": 0,
              "transaction_charges": 0,
              "total_discount": 0,
              "sub_total": 9000,
            };
            
            
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
                  "units" : item.quantity,
                  "selling_price" : item.price,
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
          } else {
            // Payment verification failed
            console.log('Payment verification failed.');
          }
        })
        .catch(error => {
          console.log('Error verifying payment:', error);
          });
      } else {
      console.log('Payment was not successful.');
      }
    }

}






function cashfreeCheckout() {
  fetch('http://localhost:5000/auth')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const cashfreeURL = "http://localhost:5000/create_cashfree_order";
      fetch(cashfreeURL)
        .then(response => response.json())
        .then(data => {
          const payment_session_id = data.payment_session_id;
          const order_id = data.order_id;
          let checkoutOptions = {
            paymentSessionId: payment_session_id,
            returnUrl: `http://localhost/shreebalajispareparts/success.html?order_id=${order_id}`,
          }
          cashfree.checkout(checkoutOptions).then(function(result) {
            if (result.error) {
              alert(result.error.message);
            }
            if (result.redirect) {
              console.log("Redirection");
            }
          });
        })
        .catch(error => {
          console.error(error);
          // Handle the error for create_cashfree_order fetch
        });
    })
    .catch(error => {
      console.error(error);
      // Handle the error for auth fetch
    });
}

