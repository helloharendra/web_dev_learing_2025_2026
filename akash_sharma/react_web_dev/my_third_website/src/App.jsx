import React from "react";
import Contact from "./components/contact";
import Courses from "./components/Courses";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import About from "./components/about";


function App() {
  return(
    <div className="App" >
      <Navbar />
      <Contact />
      <Courses />
      <About />
      <Hero />
      <Footer />
      <Testimonials />
      <Features />

  </div>
  
  );
}

export default App;