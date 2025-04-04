// Retrieve cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display the cart items
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';  // Clear previous cart items

    let totalPrice = 0;

    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.quantity} x $${product.price}</p>
            <button onclick="removeFromCart('${product.name}')">Remove</button>
        `;
        cartItems.appendChild(cartItem);

        // Calculate total price
        totalPrice += product.price * product.quantity;
    });

    // Display total price
    document.getElementById('cart-total').textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to remove products from the cart
function removeFromCart(productName) {
    cart = cart.filter(product => product.name !== productName);  // Remove item by name

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart display
    displayCart();
}

// Add event listener for the checkout button
document.getElementById('checkout-btn').addEventListener('click', function() {
    alert('Proceeding to checkout...');
    // You can add a checkout process here or redirect to a checkout page
});

// Display the cart when the page loads
window.onload = displayCart;
