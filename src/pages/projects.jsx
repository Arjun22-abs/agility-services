import { Link } from "react-router-dom";

function Projects() {
  return (
    <section className="page">
      <h1>Projects</h1>
      <p style={{ marginTop: "0.75rem", maxWidth: "900px" }}>
        A snapshot of the solutions we've built so far. Each project is a blend
        of technology, design, and business understanding tailored to real-world needs.
      </p>

      <div className="section-block projects-grid">
        
        {/* Luminara */}
        <Link
          to="/projects/luminara"
          className="card"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h2>Luminara – Learning for SLD Children</h2>
          <p style={{ marginTop: "0.4rem" }}>
            An assistive learning platform designed for children with Specific
            Learning Disabilities (SLD), offering structured and guided learning.
          </p>
          <p style={{ marginTop: "0.7rem", fontSize: "0.9rem", opacity: 0.85 }}>
            View details →
          </p>
        </Link>

        {/* AeroInspect */}
        <Link
          to="/projects/aeroinspect"
          className="card"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h2>AeroInspect – Intelligent Engine Inspection</h2>
          <p style={{ marginTop: "0.4rem" }}>
            A drone-powered inspection system that detects early engine faults
            using AI-based image analysis and pattern detection.
          </p>
          <p style={{ marginTop: "0.7rem", fontSize: "0.9rem", opacity: 0.85 }}>
            View details →
          </p>
        </Link>

        {/* PROMO NXT */}
        <Link
          to="/projects/promo-nxt"
          className="card"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h2>PROMO NXT – AI Marketing Automation</h2>
          <p style={{ marginTop: "0.4rem" }}>
            An AI-powered automation platform that improves campaign management,
            targeting, and ROI through intelligent insights.
          </p>
          <p style={{ marginTop: "0.7rem", fontSize: "0.9rem", opacity: 0.85 }}>
            View details →
          </p>
        </Link>

      </div>
    </section>
  );
}

export default Projects;