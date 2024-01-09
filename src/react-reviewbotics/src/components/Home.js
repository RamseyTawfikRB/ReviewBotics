import googleimg1 from "../pictures/google-image1.png";
import "./css/Home.css";

function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <img alt="Hero" className="hero-image" src={googleimg1} />
          <h2>Welcome to ReviewBotics</h2>
          <p className="hero-subtitle">Elevate Your Business Credibility</p>
          <p className="hero-description">
            At ReviewBotics, we understand that credibility is the cornerstone
            of any successful business. In today's digital age, customer reviews
            play a pivotal role in shaping your brand's reputation. Our mission
            is to empower businesses like yours to boost their credibility by
            harnessing the power of genuine customer feedback.
          </p>
          <p className="hero-description">
            With ReviewBotics, you have the tools to automate customer outreach
            and effortlessly gather authentic reviews on prominent platforms
            such as Google and Yelp. Our innovative platform streamlines the
            process, saving you time and effort while ensuring that your
            business's reputation shines in the online marketplace.
          </p>
          <div className="hero-goals">
            <h3>Our Goals:</h3>
            <ul className="hero-goals-list">
              <li>
                <strong>Enhance Trust:</strong> We believe that trust is the
                foundation of strong customer relationships. By actively
                collecting and showcasing genuine customer reviews, we help you
                build trust with your audience, making it easier for potential
                customers to choose your business.
              </li>
              <li>
                <strong>Drive Growth:</strong> Authentic reviews are not just
                testimonials; they are powerful marketing assets. Positive
                reviews can drive more customers to your doorstep, leading to
                increased revenue and growth opportunities for your business.
              </li>
              <li>
                <strong>Streamline Reputation Management:</strong> Our platform
                simplifies reputation management by consolidating reviews from
                multiple platforms into one dashboard. Monitor and respond to
                customer feedback efficiently, ensuring your brand's image
                remains positive and responsive.
              </li>
              <li>
                <strong>Empower Your Brand:</strong> Your brand deserves to
                stand out. ReviewBotics equips you with the tools to highlight
                your strengths, address concerns, and put your best foot forward
                in the competitive market.
              </li>
            </ul>
          </div>
          {/* TODO */}
          <a className="cta-button" href="buy.html">
            Get Started
          </a>
        </div>
      </section>
      <section className="benefits-section">
        <h2>Why ReviewBotics?</h2>
        <div className="grid">
          <div className="col">
            <h3>Boost Credibility</h3>
            <p>
              Enhance your business's credibility with authentic and positive
              customer reviews. Gain the trust of potential customers and stand
              out in your industry.
            </p>
          </div>
          <div className="col">
            <h3>Automated Outreach</h3>
            <p>
              Save valuable time and resources by automating the review
              collection process. Our platform sends automated texts and emails
              to your customers, making it effortless for them to leave reviews.
            </p>
          </div>
          <div className="col">
            <h3>Drive Growth</h3>
            <p>
              More reviews mean better visibility in search engines and on
              review platforms. Increase your online presence, attract new
              customers, and drive business growth.
            </p>
          </div>
          <div className="col">
            <h3>Monitor Performance</h3>
            <p>
              Track and monitor your review performance in real-time with our
              intuitive dashboard. Gain insights into customer feedback and make
              data-driven decisions to improve your products or services.
            </p>
          </div>
          <div className="col">
            <h3>Competitive Advantage</h3>
            <p>
              Stay ahead of your competitors by showcasing your positive
              reviews. Use our tools to highlight your strengths and unique
              selling points, giving you a competitive edge in your market.
            </p>
          </div>
          <div className="col">
            <h3>Streamline Reputation Management</h3>
            <p>
              Efficiently manage your online reputation by centralizing reviews
              from multiple platforms. Respond to customer feedback promptly and
              maintain a positive brand image.
            </p>
          </div>
        </div>
      </section>
      <section id="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>
            Sign up for ReviewBotics: Join our platform by creating an account.
          </li>
          <li>
            Link to External Services: Connect your business profiles on
            platforms like Google, Yelp, and more. Set up message sending
            preferences and payment details.
          </li>
          <li>
            Configure Automated Outreach: Let our bots work their magic by
            sending automated texts and emails to your customers, encouraging
            them to leave reviews on your chosen platforms.
          </li>
          <li>
            Watch Reviews Roll In: Sit back and watch as your credibility soars
            with an influx of authentic, positive reviews. Attract new customers
            and boost your online reputation effortlessly.
          </li>
        </ol>
      </section>
      <section id="cta">
        <h2>Ready to Elevate Your Brand?</h2>
        <p>
          Join the many businesses benefiting from automated reviews. Start with
          ReviewBotics today.
        </p>
        {/* TODO */}
        <a className="cta-button" href="Login.html">
          Start Now
        </a>
      </section>
    </div>
  );
}

export default Home;
