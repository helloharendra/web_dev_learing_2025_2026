import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Courses />
      <Features />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
