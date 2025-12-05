function Projects() {
  return (
    <section className="page">
      <h1>Projects &amp; Case Studies</h1>
      <p className="muted">
        A snapshot of some of the solutions we&apos;ve designed and built.
      </p>

      <div className="projects-grid section-block">
        <div className="card">
          <h2>AeroInspect</h2>
          <p>
            A drone-based software system designed to detect engines at fault,
            enabling predictive maintenance and faster inspections for
            automotive and industrial applications.
          </p>
          <ul className="list">
            <li>Fault detection using camera and AI</li>
            <li>Supports predictive maintenance decisions</li>
            <li>Built for industrial and automotive use cases</li>
          </ul>
        </div>

        <div className="card">
          <h2>Luminara</h2>
          <p>
            A dedicated learning tool for children with Specific Learning
            Disabilities (SLD), focused on accessibility and engagement.
          </p>
          <ul className="list">
            <li>Designed around SLD learning needs</li>
            <li>Interactive, structured learning flows</li>
            <li>Supports teachers and parents</li>
          </ul>
        </div>

        <div className="card">
          <h2>PROMO NXT</h2>
          <p>
            An intelligent assistant built to handle digital marketing tasks
            and support brands with automation.
          </p>
          <ul className="list">
            <li>Assists in campaign planning and execution</li>
            <li>Reduces manual effort for marketing teams</li>
            <li>Scales with brand activity and volume</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;