

// JavaScript Document

$('#subscribeform').submit(function(){



	var action = $(this).attr('action');



		$("#mesaj").slideUp(750,function() {







		$('#mesaj').hide();



	$('#subsubmit')







			.after('')







			.attr('disabled','disabled');



	$.post(action, {







			email: $('#subemail').val()







		},







			function(data){







				document.getElementById('mesaj').innerHTML = data;







				$('#mesaj').slideDown('slow');







				$('#subscribeform img.subscribe-loader').fadeOut('slow',function(){$(this).remove()});







				$('#subsubmit').removeAttr('disabled');







				if(data.match('success') != null) $('#subscribeform').slideUp('slow');



			}







		);







		});







		return false;







	});

const cartButton = document.getElementById("cartButton");
const sidebar = document.getElementById("sidebar");
const closeCart = document.getElementById("closeCart");

cartButton.addEventListener("click", function() {
	console.log("Button clicked!");

	sidebar.style.width = "50%";
	
	const cartItems = document.querySelector('.cart-items');
	let cart = JSON.parse(localStorage.getItem('cart')) || [];
	
	let itemsHtml = "";
	itemsHtml += `
		<button id="closeCart" onclick="closeCART()">Close</button>
	`;

	cart.forEach(item => {
	itemsHtml += `
		<div>
		<p><strong>${item.name}</strong></p>
		<p>Price : ${item.price}</p>
		<p>Quantity : ${item.quantity}</p>
		</div>
	`;
	});

	itemsHtml += `
		<button id="open-modal-button"><a href = "popup.html" title="Cart">Open Cart</a></button>
	`;

	sidebar.innerHTML = itemsHtml;

});

function closeCART() {
	sidebar.style.width = "0%";
}

// const openModalButton = document.getElementById('open-modal-button');
// const billingModal = document.getElementById('modal');
// const closeModalButton = document.getElementById('.close');

// openModalButton.addEventListener('click', (event) => {
// 	console.log("open modal clicked");
//   event.preventDefault(); // prevent the default action of loading the page
  
//   billingModal.style.display = 'block'; // show the modal
// });

// closeModalButton.addEventListener('click', () => {
//   billingModal.style.display = 'none'; // hide the modal
// });

// window.addEventListener('click', (event) => {
//   if (event.target === billingModal) {
//     billingModal.style.display = 'none'; // hide the modal if the user clicks outside it
//   }
// });

function openModal()
{	
	const openModalButton = document.getElementById('open-modal-button');
const billingModal = document.querySelector('.modal');
const closeModalButton = document.getElementById('.close');

	console.log("open modal clicked");
  //event.preventDefault(); // prevent the default action of loading the page
  
  billingModal.style.display = "block"; // show the modal
}