// Initialize cart array (you could also store it in localStorage for persistence)
let cart = [];

// Function to handle adding products to the cart
function addToCart(event) {
    const productName = event.target.getAttribute('data-name');
    const productPrice = event.target.getAttribute('data-price');
    const productImage = event.target.getAttribute('data-image');

    // Create product object and add it to the cart
    const product = {
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;  // Increase quantity if already in cart
    } else {
        cart.push(product);  // Otherwise, add a new product to the cart
    }

    // Update cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';  // Clear previous cart items

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
    });

    // Update cart summary
    const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    document.getElementById('cart-total').textContent = `Total: $${totalPrice}`;
}

// Function to remove products from the cart
function removeFromCart(productName) {
    cart = cart.filter(product => product.name !== productName);  // Remove item by name
    updateCartDisplay();  // Update the cart display
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});

