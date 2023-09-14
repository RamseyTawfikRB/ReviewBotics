// Define a function to send the email
function sendEmail() {
    // Access data stored in local storage
    let selectedOption = localStorage.getItem("selectedOption");
    let shippingMethod = localStorage.getItem("shippingMethod");

    // Check if values are null or empty, and set defaults if needed
    if (!selectedOption) {
        selectedOption = "0";
    }

    if (!shippingMethod) {
        shippingMethod = "0";
    }

    // Calculate tax and order total based on your logic
    const selectedOptionPrice = parseFloat(selectedOption.split("$")[1]);
    const shippingMethodPrice = parseFloat(shippingMethod.split("$")[1]);

    const taxRate = 0.1; // 10% tax rate (adjust as needed)
    const taxTotal = (selectedOptionPrice + shippingMethodPrice) * taxRate;
    const orderTotal = selectedOptionPrice + shippingMethodPrice + taxTotal;

    // Update the order summary on the current page with the retrieved or default data
    document.getElementById("orderedRFIDCard").textContent = `Cost of RFID Cards: $${selectedOptionPrice.toFixed(2)}`;
    document.getElementById("shippingMethod").textContent = `Cost of Shipping: $${shippingMethodPrice.toFixed(2)}`;
    document.getElementById("taxTotal").textContent = `Tax: $${taxTotal.toFixed(2)}`;
    document.getElementById("orderTotal").textContent = `Order Total: $${orderTotal.toFixed(2)}`;

    // Get the current date
    const currentDate = new Date().toLocaleDateString();

    // Create a text content to append to the email
    const emailContent = `
        Order Date: ${currentDate}
        Cost of RFID Cards: $${selectedOptionPrice.toFixed(2)}
        Cost of Shipping: $${shippingMethodPrice.toFixed(2)}
        Tax: $${taxTotal.toFixed(2)}
        Order Total: $${orderTotal.toFixed(2)}
    `;

    // Send the email without using a template using Email.js
    const emailjs = require('emailjs-com');

    // Replace these with your actual Email.js credentials
    const emailjsConfig = {
        userId: 'MAlxbu-kojNn1umSL',
        serviceId: 'service_1eoq98d',
    };

    const emailParams = {
        from_email: 'ramsey.tawfik@reviewbotics.com', // Replace with your email address
        to_email: 'recipient@example.com', // Replace with the recipient's email address
        subject: 'Order Summary',
        text: emailContent,
    };

    emailjs.send(emailjsConfig.serviceId, 'default_email', emailParams, emailjsConfig.userId)
        .then(function (response) {
            console.log('Email sent successfully:', response);
        })
        .catch(function (error) {
            console.error('Email sending failed:', error);
        });

    // Save the updated data to local storage
    localStorage.setItem("orderSummary", emailContent);
}

// Trigger the email sending function when the page loads
window.onload = sendEmail;
