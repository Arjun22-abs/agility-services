function About() {
  return (
    <section className="page-container">
      {/* ABOUT INTRO */}
      <h1 className="page-title">About Us</h1>
      <p className="page-subtitle">
        We are a focused team delivering intelligent, scalable, and impactful
        digital solutions.
      </p>

      {/* WHAT WE DO */}
      <section style={{ marginTop: "2rem" }}>
        <h2>What We Do</h2>
        <ul className="project-list">
          <li>SaaS product development</li>
          <li>Web & mobile application development</li>
          <li>Digital marketing & brand growth</li>
          <li>Product development & testing</li>
          <li>Business consulting & strategy</li>
        </ul>
      </section>

      {/* MISSION */}
      <section style={{ marginTop: "2.5rem" }}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses by combining intelligence-driven
          solutions with creativity and precision. Every project we handle
          receives deep technical understanding, design thinking, and a
          commitment to measurable impact.
        </p>
      </section>

      {/* TEAM */}
      <section style={{ marginTop: "3rem" }}>
        <h2>Our Team</h2>

        <div className="project-columns">
          {/* Amith */}
          <div className="project-section">
            <h3>Amith</h3>
            <p className="team-role">Strategy &amp; Product</p>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="team-link"
            >
              LinkedIn →
            </a>
          </div>

          {/* Prisil */}
          <div className="project-section">
            <h3>Prisil Jesin</h3>
            <p className="team-role">Development &amp; Integration</p>
            <a
              href="https://www.linkedin.com/in/prisiljesin/"
              target="_blank"
              rel="noopener noreferrer"
              className="team-link"
            >
              LinkedIn →
            </a>
          </div>

          {/* Deepan */}
          <div className="project-section">
            <h3>Deepan</h3>
            <p className="team-role">Engineering &amp; Systems</p>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="team-link"
            >
              LinkedIn →
            </a>
          </div>

          {/* Arjun */}
          <div className="project-section">
            <h3>Arjun</h3>
            <p className="team-role">Solutions &amp; Delivery</p>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="team-link"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;