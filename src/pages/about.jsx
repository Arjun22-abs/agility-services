function About() {
  return (
    <section className="page">
      <h1>About Us</h1>

      <p style={{ marginTop: "1rem", lineHeight: "1.7", maxWidth: "900px" }}>
        Agility Services is a multidisciplinary team focused on building SaaS products,
        digital systems, and technological solutions that help businesses scale intelligently.
        We combine strategy, innovation, and execution to deliver practical and future-ready
        results for modern brands.
      </p>

      {/* WHAT WE DO */}
      <div className="section-block">
        <h2>What We Do</h2>

        <ul style={{
          marginTop: "1rem",
          lineHeight: "1.8",
          paddingLeft: "1.4rem",
          maxWidth: "900px"
        }}>
          <li>Custom SaaS Development</li>
          <li>Digital Marketing & Brand Promotion</li>
          <li>Business Development & Strategic Consultancy</li>
          <li>Web & Mobile App Development</li>
          <li>Product Photography & Content Creation</li>
          <li>Product Development & Testing</li>
        </ul>
      </div>

      {/* OUR MISSION */}
      <div className="section-block">
        <h2>Our Mission</h2>
        <p style={{ marginTop: "1rem", lineHeight: "1.7", maxWidth: "900px" }}>
          Our mission is to empower businesses by combining intelligence-driven solutions
          with creativity and precision. Every project we handle receives deep technical
          understanding, design thinking, and a commitment to measurable impact.
        </p>
      </div>

      {/* OUR TEAM */}
      <div className="section-block">
        <h2>Our Team</h2>

        <div className="team-grid" style={{ marginTop: "1.5rem" }}>
          
          <div className="card team-card">
            <h3>Amith</h3>
            <p>Strategy & Product</p>
            <a
              href="http://linkedin.com/in/amithjayakumarvk"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn →
            </a>
          </div>

          <div className="card team-card">
            <h3>Prisil</h3>
            <p>Business & Operations</p>
          </div>

          <div className="card team-card">
            <h3>Deepan</h3>
            <p>Engineering & Systems</p>
            <a
              href="https://www.linkedin.com/in/deepanb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdD3R1xRCQuukdcQDnyJmSg%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn →
            </a>
          </div>

          <div className="card team-card">
            <h3>Arjun</h3>
            <p>Solutions & Delivery</p>
            <a
              href="http://linkedin.com/in/arjun-karthik-024499284"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;