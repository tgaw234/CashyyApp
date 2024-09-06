function showGiftCardOptions() {
    var paymentMethod = document.getElementById('paymentMethod').value;
    var giftCardOptions = document.getElementById('giftCardOptions');
    if (paymentMethod === 'Giftcards') {
        giftCardOptions.style.display = 'block';
    } else {
        giftCardOptions.style.display = 'none';
    }
}

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately
    // Display loading page
    window.location.href = 'index.html'; // Redirect to loading.html
    // Alternatively, if you want to perform the form submission after showing the loading page:
    // setTimeout(function() {
    //     event.target.submit(); // Submit the form
    // }, 1000); // Delay for 1 second before form submission
});