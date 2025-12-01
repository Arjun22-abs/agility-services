function About() {
  return (
    <section className="page">
      <h1>About Agility Services</h1>
      <p>
        Agility Services is a multidisciplinary team focused on turning ideas
        into intelligent, scalable solutions. We work with any sector that
        can integrate technology, strategy, and storytelling into their
        workflows.
      </p>

      <div className="section-block">
        <h2>What We Believe</h2>
        <p>
          We believe agility is not just speed – it&apos;s smart movement.
          Every solution we build is designed to be practical, measurable, and
          future-ready.
        </p>
      </div>

      <div className="section-block">
        <h2>Who We Work With</h2>
        <p>We collaborate with:</p>
        <ul className="list">
          <li>Growing brands that want to scale with technology</li>
          <li>Businesses exploring SaaS and custom software</li>
          <li>Teams looking for digital marketing and content support</li>
          <li>Product-focused teams needing strategy, dev, and testing</li>
        </ul>
      </div>

      <div className="section-block">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="card team-card">
            <h3>Amith</h3>
            <p>Strategy &amp; Product</p>
            <a
              href="http://linkedin.com/in/amithjayakumarvk"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn →
            </a>
          </div>

          <div className="card team-card">
            <h3>Prisil</h3>
            <p>Development &amp; Integration</p>
          </div>

          <div className="card team-card">
            <h3>Deepan</h3>
            <p>Engineering &amp; Systems</p>
            <a
              href="https://www.linkedin.com/in/deepanb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdD3R1xRCQuukdcQDnyJmSg%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn →
            </a>
          </div>

          <div className="card team-card">
            <h3>Arjun</h3>
            <p>Solutions &amp; Delivery</p>
            <a
              href="http://linkedin.com/in/arjun-karthik-024499284"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;