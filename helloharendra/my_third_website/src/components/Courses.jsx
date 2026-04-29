import React from "react";
// Import course images - replace with your actual images
import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description:
        "Master HTML, CSS, JavaScript, React, and Node.js. Build real-world projects.",
      price: "₹29,999",
      duration: "6 months",
      image: course1,
      features: ["Live Projects", "Certification", "Placement Support"],
    },
    {
      id: 2,
      title: "Data Science & AI",
      description:
        "Learn Python, Machine Learning, Deep Learning, and Data Visualization.",
      price: "₹39,999",
      duration: "8 months",
      image: course2,
      features: ["Industry Projects", "Kaggle Competitions", "Internship"],
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "SEO, Social Media Marketing, Google Ads, and Analytics Certification.",
      price: "₹19,999",
      duration: "4 months",
      image: course3,
      features: ["Google Certifications", "Live Campaigns", "Job Assistance"],
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Build iOS and Android apps with React Native and Flutter.",
      price: "₹34,999",
      duration: "6 months",
      image: course1,
      features: ["App Store Deployment", "Portfolio", "Freelancing Tips"],
    },
    {
      id: 5,
      title: "Cyber Security",
      description:
        "Network Security, Ethical Hacking, and Security Compliance.",
      price: "₹44,999",
      duration: "8 months",
      image: course2,
      features: ["Real-world Scenarios", "Certification", "Lab Access"],
    },
    {
      id: 6,
      title: "Cloud Computing",
      description: "AWS, Azure, Google Cloud, DevOps, and Containerization.",
      price: "₹49,999",
      duration: "6 months",
      image: course3,
      features: ["Cloud Labs", "Certification Prep", "Project Deployment"],
    },
  ];

  return (
    <section id="courses" className="courses-section">
      {/* REMOVED the container div - content goes directly inside section */}
      <h2 className="section-title">Our Popular Courses</h2>
      <p className="section-subtitle">
        Choose from our industry-aligned programs
      </p>

      <div className="courses-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
              loading="lazy"
            />
            <div className="course-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <span className="course-duration">📅 {course.duration}</span>
                <span className="course-price">{course.price}</span>
              </div>
              <ul className="course-features">
                {course.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <button className="course-btn">Enroll Now →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
