function BookAppointment() {
  return (
    <section className="page">
      <h1>Book an Online Appointment</h1>
      <p style={{ marginTop: "0.75rem", maxWidth: "700px" }}>
        Share a few details and we&apos;ll get back to you with time slots for an online
        meeting. We&apos;ll understand your requirements and suggest the right mix of
        services for your business.
      </p>

      <div className="section-block">
        <h2>Tell us about your requirement</h2>

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              "Your appointment request has been noted. We will contact you shortly."
            );
          }}
        >
          <div>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
          </div>

          <div>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>

          <div>
            <label>
              Phone
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                required
              />
            </label>
          </div>

          <div>
            <label>
              Service Required
              <select name="service" required>
                <option value="">Select a service</option>
                <option value="saas">SaaS / Product Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="web-app">Web / App Development</option>
                <option value="content">Content &amp; Product Photography</option>
                <option value="business-dev">
                  Business Development / Consultancy
                </option>
                <option value="testing">Testing &amp; Quality Analysis</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Message / Requirements
              <textarea
                name="message"
                placeholder="Tell us briefly about your needs..."
                required
              />
            </label>
          </div>

          <button type="submit">Submit Request</button>
        </form>
      </div>
    </section>
  );
}

export default BookAppointment;