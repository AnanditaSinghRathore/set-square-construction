import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-page section">
      <div className="container contact-grid">

        {/* LEFT CONTENT */}
        <div className="contact-left">
          <span className="eyebrow">Contact</span>

          <h1 className="contact-title">
            Let’s discuss your <br />
            next construction project
          </h1>

          <p className="contact-intro">
            Whether you’re planning a multi-family development, commercial build,
            or custom residential project, our team is ready to support you with
            precision framing expertise.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="label">Phone</span>
              <a href="tel:6048327008">604-832-7008</a>
            </div>

            <div className="contact-item">
              <span className="label">Email</span>
              <a href="mailto:info@setsquareconstruction.com">
                info@setsquareconstruction.com
              </a>
            </div>

            <div className="contact-item">
              <span className="label">Location</span>
              <p>Lower Mainland, British Columbia</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-right">
          <form className="contact-form">

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@email.com" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="604-000-0000" />
            </div>

            <div className="form-group">
              <label>Project Details</label>
              <textarea
                rows="4"
                placeholder="Tell us about your project"
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Submit enquiry
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
