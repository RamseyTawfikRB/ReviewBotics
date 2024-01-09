import "./css/Pricing.css";

function Pricing() {
  return (
    <div>
      <section className="hero-section">
        <h2>Turn Every Customer Interaction into a Stellar Review</h2>
        <h3>Empower. Engage. Elevate.</h3>
        <p>
          At ReviewBotics, we're revolutionizing the way businesses engage with
          their customers. With our unique blend of state-of-the-art RFID cards
          and precision-targeted automated outreach, we're making it simpler for
          your patrons to share their experiences. Dive into a world where every
          purchase, every visit, and every interaction becomes a glowing
          endorsement. Boost your digital reputation, foster trust, and watch
          your business grow. It's time to be seen in the best light.
        </p>
      </section>

      <section id="section1" className="rfid-purchase pricing-tiers">
        <h2 className="section-title">One-Time RFID Card Purchases</h2>
        <div className="grid">
          <div className="col">
            <h3>10 Cards</h3>
            <div className="price-tag">
              <span className="discounted-price">$99.99</span>
              <span className="current-price">$39.99</span>
            </div>
            <p>
              Receive 10 specialized RFID cards that customers can scan to
              easily access your business's review section on Google.
            </p>
            {/* TODO */}
            <a href="#" className="cta-button purchase-button">
              Purchase
            </a>
          </div>

          <div className="col">
            <h3>20 Cards</h3>
            <div className="price-tag">
              <span className="discounted-price">$179.99</span>
              <span className="current-price">$69.99</span>
            </div>
            <p>
              Receive 20 specialized RFID cards for a broader outreach and more
              reviews.
            </p>
            {/* TODO */}
            <a href="#" className="cta-button purchase-button">
              Purchase
            </a>
          </div>

          <div className="col">
            <h3>50 Cards</h3>
            <div className="price-tag">
              <span className="discounted-price">$299.99</span>
              <span className="current-price">$149.99</span>
            </div>
            <p>
              Maximize your customer review potential with 50 RFID cards, ideal
              for larger businesses or events.
            </p>
            {/* TODO */}
            <a href="#" className="cta-button purchase-button">
              Purchase
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <div className="faq-item">
            <h3>How do I upgrade or downgrade my plan?</h3>
            <p>
              Managing your plan is straightforward. Whether you wish to add,
              upgrade, refund, or cancel your order, simply navigate to the
              'Order' section once you've logged into your account. From there,
              you'll find all the tools and options you need to adjust your plan
              according to your preferences.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you offer refunds?</h3>
            <p>
              If your purchase is limited to RFID tags, you possess a 24-hour
              window from the time of order to initiate a refund. This process
              can be effortlessly facilitated through the 'Order' section upon
              logging into your account. As for subscription services, while
              direct refunds are not available, we do provide an option for
              cancellations. Once your subscription payment has been processed,
              you retain the flexibility to cancel it. Rest assured, no
              subsequent charges will be incurred for the upcoming month, and
              our services will persist uninterrupted until the conclusion of
              the current billing cycle.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you ship outside the US?</h3>
            <p>No, we currently do not ship RFIDs outside the US.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
