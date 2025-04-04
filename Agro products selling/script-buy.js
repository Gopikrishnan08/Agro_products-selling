document.addEventListener("DOMContentLoaded", function () {
    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const offer = urlParams.get('offer');

    // Display offer details
    const offerDetails = document.getElementById("offer-details");

    if (offer) {
        switch (offer) {
            case 'bulk-purchase':
                offerDetails.textContent = "You are eligible for a 15% discount on bulk purchases!";
                break;
            case 'spring-sale':
                offerDetails.textContent = "You are eligible for a 20% discount on all farming tools!";
                break;
            case 'festive-season':
                offerDetails.textContent = "Enjoy a 10% discount on your first purchase!";
                break;
            default:
                offerDetails.textContent = "No special offer applied.";
        }
    } else {
        offerDetails.textContent = "No special offer applied.";
    }

    // Other cart and checkout logic (rendering cart, etc.) can go here...
});

