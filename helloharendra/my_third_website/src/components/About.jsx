import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  const stats = [
    { number: "5000+", label: "Students Trained" },
    { number: "50+", label: "Expert Faculty" },
    { number: "100+", label: "Courses Offered" },
    { number: "95%", label: "Placement Rate" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Naya Prayog Academy</h2>

        <div className="about-container">
          <div className="about-content">
            <h3>Empowering Dreams Since 2015</h3>
            <p>
              Naya Prayog Academy is a premier educational institution dedicated
              to providing quality education in technology and professional
              skills. With state-of-the-art infrastructure and
              industry-experienced faculty, we've trained over 5000+ students
              who are now working at top companies worldwide.
            </p>
            <p>
              Our mission is to bridge the gap between academic knowledge and
              industry requirements through practical, hands-on training. We
              believe in creating not just skilled professionals, but future
              leaders who can drive innovation and growth.
            </p>

            <div className="stats-container">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="about-btn">Learn More About Us →</button>
          </div>

          <div className="about-image">
            <img
              src={aboutImg}
              alt="About Naya Prayog Academy"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
