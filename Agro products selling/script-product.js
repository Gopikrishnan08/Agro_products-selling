// Initialize cart array (using localStorage for persistence)
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage

// Function to handle adding products to the cart
function addToCart(event) {
    const productName = event.target.getAttribute('data-name');
    const productPrice = parseFloat(event.target.getAttribute('data-price'));
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

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the cart page
    window.location.href = 'cart.html';  // Navigate to the cart page
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});

