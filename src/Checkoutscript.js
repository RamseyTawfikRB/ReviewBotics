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

const taxRate = 0.1; // 1% tax rate (adjust as needed)
const taxTotal = (selectedOptionPrice + shippingMethodPrice) * taxRate;
const orderTotal = selectedOptionPrice + shippingMethodPrice + taxTotal;

// Update the order summary on the current page with the retrieved or default data
document.getElementById("orderedRFIDCard").textContent = `Cost of RFID Cards: $${selectedOptionPrice.toFixed(2)}`;
document.getElementById("shippingMethod").textContent = `Cost of Shupping: $${shippingMethodPrice.toFixed(2)}`;
document.getElementById("taxTotal").textContent = `Tax: $${taxTotal.toFixed(2)}`;
document.getElementById("orderTotal").textContent = `Order Total: $${orderTotal.toFixed(2)}`;
