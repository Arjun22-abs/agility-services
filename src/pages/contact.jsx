function Contact() {
  return (
    <section className="page page-contact">
      <h1>Contact Us</h1>
      <p className="muted">
        You can reach out to any of our team members directly using the details below.
      </p>

      <div className="section-block contacts-grid">
        {/* Amith */}
        <div className="card contact-card">
          <h2>Amith Jayakumar</h2>
          <p className="contact-role">Operations & Strategy</p>

          <p>
            <strong>Phone:&nbsp;</strong>
            <a href="tel:8122816468">81228 16468</a>
          </p>

          <p>
            <strong>Email:&nbsp;</strong>
            <a href="mailto:amithjayakumar001@gmail.com">
              amithjayakumar001@gmail.com
            </a>
          </p>
        </div>

        {/* Deepan */}
        <div className="card contact-card">
          <h2>Deepan B</h2>
          <p className="contact-role">Engineering & Systems</p>

          <p>
            <strong>Phone:&nbsp;</strong>
            <a href="tel:8072184609">80721 84609</a>
          </p>

          <p>
            <strong>Email:&nbsp;</strong>
            <a href="mailto:deepan.b.150706@gmail.com">
              deepan.b.150706@gmail.com
            </a>
          </p>
        </div>

        {/* Prisil */}
        <div className="card contact-card">
          <h2>Prisil Jesin</h2>
          <p className="contact-role">Integration & Development</p>

          <p>
            <strong>Phone:&nbsp;</strong>
            <a href="tel:9962993245">99629 93245</a>
          </p>

          <p>
            <strong>Email:&nbsp;</strong>
            <a href="mailto:prisiljesinm@gmail.com">prisiljesinm@gmail.com</a>
          </p>
        </div>

        {/* Arjun */}
        <div className="card contact-card">
          <h2>Arjun Karthik</h2>
          <p className="contact-role">Solutions & Delivery</p>

          <p>
            <strong>Phone:&nbsp;</strong>
            <a href="tel:7395927627">73959 27627</a>
          </p>

          <p>
            <strong>Email:&nbsp;</strong>
            <a href="mailto:arjunk.cheers@gmail.com">arjunk.cheers@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;