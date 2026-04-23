import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "Courses", link: "#courses" },
    { name: "Features", link: "#features" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  const courses = [
    "Web Development",
    "Data Science",
    "Digital Marketing",
    "Mobile Development",
    "Cyber Security",
    "Cloud Computing",
  ];

  const newsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    console.log("Newsletter signup:", email);
    alert("Thank you for subscribing!");
    e.target.reset();
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>
              Naya Prayog <span>Academy</span>
            </h3>
            <p>
              Empowering minds, shaping futures with quality education since
              2015.
            </p>
            <div className="footer-contact">
              <p>📍 Azamgarh, India</p>
              <p>📞 +91 7991327022</p>
              <p>✉️ support@nayaprayog.com</p>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Popular Courses</h3>
            <ul>
              {courses.map((course, index) => (
                <li key={index}>
                  <a href="#courses">{course}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe for updates and offers</p>
            <form className="newsletter-form" onSubmit={newsletterSubmit}>
              <input type="email" placeholder="Your Email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Naya Prayog Academy. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
