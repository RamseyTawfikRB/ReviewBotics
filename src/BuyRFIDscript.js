document.addEventListener("DOMContentLoaded", function() {

    const rfidInputs = document.querySelectorAll('input[name="rfid-pack"]');
    const shippingInputs = document.querySelectorAll('input[name="shipping-method"]');
    
    rfidInputs.forEach(rfidInput => {
        rfidInput.addEventListener('change', updateSummary);
    });
    
    shippingInputs.forEach(shippingInput => {
        shippingInput.addEventListener('change', updateSummary);
    });
    
    function updateSummary() {
        let rfidPrice = 0;
        let shippingPrice = 0;
        
        rfidInputs.forEach(input => {
            if (input.checked) {
                const label = document.querySelector(`label[for="${input.id}"]`);
                rfidPrice = parseFloat(label.querySelector('.price').textContent.replace('$', ''));
            }
        });

        shippingInputs.forEach(input => {
            if (input.checked) {
                const label = document.querySelector(`label[for="${input.id}"]`);
                shippingPrice = parseFloat(label.querySelector('.price').textContent.replace('$', ''));
            }
        });
        
        const tax = (rfidPrice + shippingPrice) * 0.15; // Assuming a tax rate of 10%
        const total = rfidPrice + shippingPrice + tax;

        document.getElementById('orderedRFIDCard').textContent = `Ordered RFID Card Pack: $${rfidPrice.toFixed(2)}`;
        document.getElementById('shippingMethod').textContent = `Shipping Method: $${shippingPrice.toFixed(2)}`;
        document.getElementById('taxTotal').textContent = `Tax: $${tax.toFixed(2)}`;
        document.getElementById('orderTotal').textContent = `Order Total: $${total.toFixed(2)}`;
    }
});
