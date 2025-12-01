function Contact() {
  return (
    <section className="page page-contact">
      <h1>Contact Us</h1>
      <p className="muted">
        You can reach out to any of our team members directly using the
        details below.
      </p>

      <div className="contacts-grid section-block">
        <div className="card contact-card">
          <h2>Amith Jayakumar</h2>
          <p className="contact-role">Strategy &amp; Product</p>
          <div className="contact-details">
            <div>
              <span className="label">Phone</span>
              <a href="tel:8122816468">8122816468</a>
            </div>
            <div>
              <span className="label">Email</span>
              <a href="mailto:amithjayakumar001@gmail.com">
                amithjayakumar001@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="card contact-card">
          <h2>Deepan B</h2>
          <p className="contact-role">Engineering &amp; Systems</p>
          <div className="contact-details">
            <div>
              <span className="label">Phone</span>
              <a href="tel:8072184609">8072184609</a>
            </div>
            <div>
              <span className="label">Email</span>
              <a href="mailto:deepan.b.150706@gmail.com">
                deepan.b.150706@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="card contact-card">
          <h2>Prisil Jesin</h2>
          <p className="contact-role">Development &amp; Integration</p>
          <div className="contact-details">
            <div>
              <span className="label">Phone</span>
              <a href="tel:9962993245">9962993245</a>
            </div>
            <div>
              <span className="label">Email</span>
              <a href="mailto:prisiljesinm@gmail.com">
                prisiljesinm@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="card contact-card">
          <h2>Arjun</h2>
          <p className="contact-role">Solutions &amp; Delivery</p>
          <div className="contact-details">
            <div>
              <span className="label">Phone</span>
              <a href="tel:7395927627">7395927627</a>
            </div>
            <div>
              <span className="label">Email</span>
              <a href="mailto:arjunk.cheers@gmail.com">
                arjunk.cheers@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;