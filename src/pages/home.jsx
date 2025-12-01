function Home() {
  return (
    <section className="home-hero-with-bg">
      <div className="home-hero-overlay">
        <div className="home-hero-content">
          <h1>Agility Services</h1>
          <h2>We Render Intelligence</h2>

          <p>
            We are a 4-member team building SaaS products, digital strategies,
            and custom solutions for businesses that want to grow smarter and
            faster.
          </p>
          <p>
            From SaaS, digital marketing, web and app development to content
            creation, product development, testing, and business consultancy –
            we partner with any sector that can integrate technology and
            strategy.
          </p>

          <div className="home-hero-actions">
            <a href="/book-appointment" className="cta-button">
              Book an Appointment →
            </a>
            <a href="/services" className="ghost-button">
              Explore Services
            </a>
          </div>

          <div className="home-highlight-grid">
            <div className="home-highlight-card">
              <h3>SaaS &amp; Product</h3>
              <p>
                We design and build software that fits into your existing
                workflows instead of forcing you to change everything.
              </p>
            </div>

            <div className="home-highlight-card">
              <h3>Growth &amp; Marketing</h3>
              <p>
                Digital marketing, content, and brand promotion tailored to the
                stage your business is in right now.
              </p>
            </div>

            <div className="home-highlight-card">
              <h3>End-to-End Support</h3>
              <p>
                From idea to deployment – including testing, iterations, and
                business development support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;