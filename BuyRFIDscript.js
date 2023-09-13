document.addEventListener("DOMContentLoaded", function () {
    const rfidCards = document.querySelectorAll(".rfid-card");
    let selectedOption = null; // Variable to store the selected option

    rfidCards.forEach(function (card) {
        card.addEventListener("click", function () {
            rfidCards.forEach(function (c) {
                c.classList.remove("active");
            });
            card.classList.add("active");
            selectedOption = card.textContent; // Store the selected option
            updateOrderSummary(); // Call the function to update the order summary
        });
    });

    // Function to gather user inputs
    function gatherUserInputs() {
        const shippingMethod = document.querySelector('input[name="shipping"]:checked').nextElementSibling.textContent;
        const rfidLink = document.getElementById("rfidLink").value;
        const backupRfidLink = document.getElementById("backupRfidLink").value;

        return {
            selectedOption,
            shippingMethod,
            rfidLink,
            backupRfidLink
        };
    }

    function updateOrderSummary() {
        const {
            selectedOption,
            shippingMethod,
            rfidLink,
            backupRfidLink
        } = gatherUserInputs();

        // Set the text content of the <p> elements to the gathered values
        document.getElementById("orderedRFIDCard").textContent = `Ordered RFID Card Pack: ${selectedOption}`;
        document.getElementById("shippingMethod").textContent = `Shipping Method: ${shippingMethod}`;
        document.getElementById("rfidLink").textContent = `RFID Link: ${rfidLink}`;
        document.getElementById("backupRfidLink").textContent = `Backup RFID Link: ${backupRfidLink}`;
    }

    // Locate the "Proceed to Checkout" button by its ID
    const checkoutButton = document.getElementById("checkoutButton");

    checkoutButton.addEventListener("click", function () {
        // Gather user inputs and update the order summary
        const {
            selectedOption,
            shippingMethod,
            rfidLink,
            backupRfidLink
        } = gatherUserInputs();

        // Set the order summary data in local storage for access on the "Order Summary" page
        localStorage.setItem("selectedOption", selectedOption);
        localStorage.setItem("shippingMethod", shippingMethod);
        localStorage.setItem("rfidLink", rfidLink);
        localStorage.setItem("backupRfidLink", backupRfidLink);

        // Navigate to the checkout page when the button is clicked
        window.location.href = "checkout.html";
    });
});
