import { useState } from "react";

function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "SaaS Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Change this to whatever email you want to receive requests on
    const to = "amithjayakumar001@gmail.com";

    const subject = `New Appointment Request from ${
      formData.name || "Agility Services Website"
    }`;

    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}
    `;

    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open email client with pre-filled email
    window.location.href = mailtoLink;

    setSubmitted(true);
  };

  return (
    <section className="page">
      <h1>Book an Online Appointment</h1>
      <p className="muted">
        Share a few details and we&apos;ll get back to you with time slots for
        an online meeting.
      </p>

      <div className="section-block">
        <div className="card">
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Phone
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Service Required
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
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
              <textarea
                name="message"
                placeholder="Tell us briefly about your needs"
                value={formData.message}
                onChange={handleChange}
              />
            </label>

            <button type="submit">Submit Request</button>
          </form>

          {submitted && (
            <p className="muted" style={{ marginTop: "1rem" }}>
              We&apos;ve opened your email app with the request details. Just
              hit send to complete your booking.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default BookAppointment;