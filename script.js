// document.addEventListener("DOMContentLoaded", function() {
//     const confirmOrderButton = document.querySelector(".confirm-order");
//     confirmOrderButton.addEventListener("click", function() {
//         // Add your logic here to handle the confirm order action
//         alert("Order confirmed!");
//     });
// });


    const chickenPaitanQuantity = document.getElementById('chicken-paitan-quantity');
    const chickenPaitanPrice = document.getElementById('chicken-paitan-price');
    const tonkotsuQuantity = document.getElementById('tonkotsu-quantity');
    const tonkotsuPrice = document.getElementById('tonkotsu-price');
    const soySauceQuantity = document.getElementById('soy-sauce-quantity');
    const soySaucePrice = document.getElementById('soy-sauce-price');
    const totalPrice = document.getElementById('total-price');

    function updatePrice(quantity, priceElement) {
      const price = parseFloat(priceElement.textContent.replace('IDR ', ''));
      priceElement.textContent = 'IDR ' + (quantity * price).toFixed(1);
    }

    function calculateTotalPrice() {
      const chickenPaitanTotal = parseFloat(chickenPaitanPrice.textContent.replace('IDR ', '')) * parseInt(chickenPaitanQuantity.value);
      const tonkotsuTotal = parseFloat(tonkotsuPrice.textContent.replace('IDR ', '')) * parseInt(tonkotsuQuantity.value);
      const soySauceTotal = parseFloat(soySaucePrice.textContent.replace('IDR ', '')) * parseInt(soySauceQuantity.value);
      const total = chickenPaitanTotal + tonkotsuTotal + soySauceTotal;
      totalPrice.textContent = 'IDR ' + total.toFixed(1);
    }

// Add event listeners for quantity buttons
    document.querySelectorAll('.minus-btn').forEach(button => {
      button.addEventListener('click', () => {
        const quantityInput = button.nextElementSibling;
        if (parseInt(quantityInput.value) > 1) {
          quantityInput.value = parseInt(quantityInput.value) - 1;
          if (quantityInput === chickenPaitanQuantity) {
            updatePrice(parseInt(quantityInput.value), chickenPaitanPrice);
          } else if (quantityInput === tonkotsuQuantity) {
            updatePrice(parseInt(quantityInput.value), tonkotsuPrice);
          } else if (quantityInput === soySauceQuantity) {
            updatePrice(parseInt(quantityInput.value), soySaucePrice);
          }
          calculateTotalPrice();
        }
      });
    });

    document.querySelectorAll('.plus-btn').forEach(button => {
      button.addEventListener('click', () => {
        const quantityInput = button.previousElementSibling;
        quantityInput.value = parseInt(quantityInput.value) + 1;
        if (quantityInput === chickenPaitanQuantity) {
          updatePrice(parseInt(quantityInput.value), chickenPaitanPrice);
        } else if (quantityInput === tonkotsuQuantity) {
          updatePrice(parseInt(quantityInput.value), tonkotsuPrice);
        } else if (quantityInput === soySauceQuantity) {
          updatePrice(parseInt(quantityInput.value), soySaucePrice);
        }
        calculateTotalPrice();
      });
    });

 // Initial price calculation
 calculateTotalPrice();

