import React from "react";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: "🎓",
      title: "Expert Faculty",
      description:
        "Learn from industry professionals with 10+ years of experience",
    },
    {
      id: 2,
      icon: "💻",
      title: "Hands-on Training",
      description: "Practical projects and real-world case studies",
    },
    {
      id: 3,
      icon: "🎯",
      title: "Placement Assistance",
      description: "100% job placement support with top companies",
    },
    {
      id: 4,
      icon: "🏆",
      title: "Industry Certification",
      description: "Globally recognized certificates upon completion",
    },
    {
      id: 5,
      icon: "⏰",
      title: "Flexible Schedule",
      description: "Weekend and evening batches for working professionals",
    },
    {
      id: 6,
      icon: "👥",
      title: "Small Batches",
      description: "Personal attention with limited students per batch",
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="section-title">Why Choose Us?</h2>
        <p className="section-subtitle">
          What makes Naya Prayog Academy special
        </p>

        <div className="features-container">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
