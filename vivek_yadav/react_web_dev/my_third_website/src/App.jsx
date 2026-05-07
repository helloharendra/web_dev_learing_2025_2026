import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contacts";


function App () {
  return (
    
    <div className="app">
    <Navbar/>
   <Hero/>
   <About/>
   <Courses/>
   <Features/>
   <Footer/>
   <Testimonials/>
   <Contact/>
    </div>
  
  );
}

export default App;
