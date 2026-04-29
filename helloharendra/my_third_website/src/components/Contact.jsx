import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (API call)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  };

  const contactInfo = [
    { icon: "📍", text: "Azamgarh, UP, 223223" },
    { icon: "📞", text: "+91 7991327022" },
    { icon: "✉️", text: "support@nayaprayog.com" },
    { icon: "⏰", text: "Mon - Sat: 9:00 AM - 7:00 PM" },
  ];

  return (
    <section id="contact" className="contact-section">
      {/* REMOVED the <div className="container"> wrapper */}
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Have questions? We're here to help!</p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            Reach out to us for any queries about courses, admissions, or career
            guidance.
          </p>

          {contactInfo.map((info, index) => (
            <div key={index} className="contact-detail">
              <div className="contact-icon">{info.icon}</div>
              <div className="contact-text">{info.text}</div>
            </div>
          ))}

          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">
                📘
              </a>
              <a href="#" className="social-icon">
                📷
              </a>
              <a href="#" className="social-icon">
                🐦
              </a>
              <a href="#" className="social-icon">
                💼
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && (
            <div className="success-message">
              Thank you! We'll get back to you soon. 🎉
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            <option value="web-dev">Web Development Bootcamp</option>
            <option value="data-science">Data Science & AI</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="mobile-dev">Mobile App Development</option>
            <option value="cyber-security">Cyber Security</option>
            <option value="cloud-computing">Cloud Computing</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Send Message →
          </button>
        </form>
      </div>
      {/* REMOVED the closing </div> for container */}
    </section>
  );
};

export default Contact;
