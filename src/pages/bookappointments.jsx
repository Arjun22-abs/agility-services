function BookAppointment() {
  return (
    <section className="page">
      <h1>Book an Online Appointment</h1>
      <p className="muted">
        Share a few details and we&apos;ll get back to you with time slots for
        an online meeting.
      </p>

      <div className="section-block">
        <div className="card">
          <form className="form">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>

            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>

            <label>
              Phone
              <input type="tel" placeholder="Your phone number" />
            </label>

            <label>
              Service Required
              <select>
                <option>SaaS Development</option>
                <option>Digital Marketing</option>
                <option>Web/App Development</option>
                <option>Business Development / Consultancy</option>
                <option>Product Photography</option>
                <option>Product Development</option>
                <option>Content Creation</option>
                <option>Testing</option>
              </select>
            </label>

            <label>
              Message / Requirements
              <textarea placeholder="Tell us briefly about your needs" />
            </label>

            <button type="submit">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookAppointment;