import React, { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Software Engineer at TCS",
      content:
        "The Web Development course at Naya Prayog Academy transformed my career. The instructors are amazing and the curriculum is up-to-date with industry standards.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Data Analyst at Amazon",
      content:
        "Excellent teaching methodology and practical approach. The Data Science program helped me crack my dream job. Highly recommended!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Digital Marketing Manager",
      content:
        "Best decision I ever made. The Digital Marketing course is comprehensive and the placement support is outstanding.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "Full Stack Developer",
      content:
        "Great learning environment with modern infrastructure. The projects we built during the course helped me build an impressive portfolio.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Students Say</h2>
        <p className="section-subtitle">Success stories from our alumni</p>

        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
