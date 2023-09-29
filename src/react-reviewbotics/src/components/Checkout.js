import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStipe  = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    }
    return stripePromise;
};


const Checkout = () => {
    const pack_10 = {
        price: "price_1NtPUtHgY3K08VcTMHmJgKjd",
        quantity: 1
    };

    const checkoutOptions = {
        lineItems: [pack_10],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/checkout`,
        billingAddressCollection: "required",
        shippingAddressCollection: {
            allowedCountries: ["US", "CA"]
        }
    };
    

    const redirectToCheckout = async () => {
        console.log("redirecting to checkout");
        const stripe = await getStipe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log("stripe error", error);
    };
    return (
        <div>
            <div>
                <h1>Checkout</h1>
            </div>
            <button onClick={redirectToCheckout}>
                <h1>BUY</h1>
            </button>
        </div>
    );
};  

export default Checkout;