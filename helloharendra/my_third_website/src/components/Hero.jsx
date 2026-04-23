import React, { useState, useEffect } from "react";
// Import your images - replace with your actual image paths
import img1 from "../assets/hero1.jpg";
import img2 from "../assets/hero2.jpg";
import img3 from "../assets/hero3.jpg";

const Hero = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-carousel">
        {images.map((img, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={img} alt={`Slide ${index + 1}`} loading="lazy" />
          </div>
        ))}

        <button className="carousel-btn prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
          ❯
        </button>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>

        <div className="hero-overlay">
          <h1>Welcome to Naya Prayog Academy</h1>
          <p>Empowering minds, shaping futures with quality education</p>
          <button
            className="hero-btn"
            onClick={() =>
              document
                .getElementById("courses")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
