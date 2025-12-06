function PromoNxt() {
  return (
    <section className="page project-detail">
      {/* HERO */}
      <header className="project-hero">
        <p className="project-label">AI Marketing Platform</p>
        <h1>PROMO NXT – AI-Powered Marketing Automation</h1>
        <p className="project-hero-text">
          PROMO NXT is an AI-driven marketing automation platform that simplifies
          campaign management, improves targeting, and increases ROI using
          data-driven insights. It is built for brands and creators who want
          smarter campaigns with less manual effort.
        </p>
      </header>

      {/* SECTION 1 – Overview */}
      <section className="project-section fade-section delay-1">
        <h2>What is PROMO NXT?</h2>
        <p>
          PROMO NXT centralises marketing workflows into a single platform. From
          ad creation and scheduling to performance analysis and optimisation,
          it helps teams run consistent and scalable campaigns without needing a
          large marketing setup.
        </p>
        <p>
          The platform focuses on clarity over complexity – instead of drowning
          users in dashboards, it surfaces the next best action they can take
          to improve results.
        </p>
      </section>

      {/* SECTION 2 – Problem */}
      <section className="project-section fade-section delay-2">
        <h2>The Problem</h2>
        <ul className="project-list">
          <li>
            Small businesses and creators juggle multiple tools, platforms, and
            channels with very limited time and resources.
          </li>
          <li>
            Manual campaign management leads to inconsistent execution, slower
            responses, and guesswork when it comes to performance.
          </li>
          <li>
            Existing tools can be powerful but feel heavy, complex, and
            difficult to adopt without dedicated specialists.
          </li>
        </ul>
      </section>

      {/* SECTION 3 – Solution */}
      <section className="project-section fade-section delay-3">
        <h2>Our Solution</h2>
        <p>
          PROMO NXT brings AI into the core of everyday marketing decisions. It
          automates repetitive work, highlights what matters most, and gives
          practical recommendations instead of just data.
        </p>

        <div className="project-pills">
          <span className="project-pill">AI ad suggestions</span>
          <span className="project-pill">Smart scheduling</span>
          <span className="project-pill">Actionable insights</span>
          <span className="project-pill">Workflow automation</span>
        </div>
      </section>

      {/* SECTION 4 – Key Capabilities */}
      <section className="project-section fade-section delay-4">
        <h2>Key Capabilities</h2>
        <div className="project-columns">
          <div>
            <h3>AI-Driven Campaigns</h3>
            <p>
              Generate and refine ad ideas, captions, and variations based on
              brand tone and goals. PROMO NXT helps teams move from “blank
              page” to publish-ready much faster.
            </p>
          </div>
          <div>
            <h3>Scheduling &amp; Automation</h3>
            <p>
              Plan campaigns across multiple channels and let the platform
              handle timing, pacing, and consistency while you focus on
              strategy and creative direction.
            </p>
          </div>
          <div>
            <h3>Insights, Not Just Reports</h3>
            <p>
              Instead of just graphs, PROMO NXT highlights what is working,
              what is underperforming, and where to shift budget or attention
              next.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 – Market & Users */}
      <section className="project-section fade-section delay-5">
        <h2>Who Is It For?</h2>
        <p>
          PROMO NXT is built for small and mid-sized businesses, digital-first
          brands, agencies, and creators who want to scale their presence
          without scaling their workload at the same rate.
        </p>
        <ul className="project-list">
          <li>Early-stage brands looking for their first structured toolkit</li>
          <li>Agencies managing campaigns for multiple clients</li>
          <li>Creators who need consistent, automated promotion support</li>
        </ul>
      </section>

      {/* SECTION 6 – Advantage */}
      <section className="project-section fade-section delay-6">
        <h2>Why PROMO NXT Stands Out</h2>
        <div className="project-columns">
          <div>
            <h3>Simple Onboarding</h3>
            <p>
              Designed so that non-technical teams can start quickly, with
              guided flows instead of complex setups.
            </p>
          </div>
          <div>
            <h3>AI at the Core</h3>
            <p>
              AI is not an add-on – it sits at the centre of planning,
              optimisation, and decision-making throughout the platform.
            </p>
          </div>
          <div>
            <h3>Scalable Model</h3>
            <p>
              From freemium users to subscription tiers, PROMO NXT is structured
              to grow with the teams that use it.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 – Roadmap */}
      <section className="project-section fade-section delay-7">
        <h2>Roadmap &amp; Next Steps</h2>
        <ol className="project-steps">
          <li>
            <strong>MVP &amp; Pilot Testing:</strong> Validate workflows and value
            with select early adopters.
          </li>
          <li>
            <strong>Public Beta:</strong> Open up to a wider audience, refine based
            on real-world usage and feedback.
          </li>
          <li>
            <strong>Scale &amp; Integrate:</strong> Add deeper integrations, more
            automation flows, and extended analytics.
          </li>
        </ol>
      </section>
    </section>
  );
}

export default PromoNxt;