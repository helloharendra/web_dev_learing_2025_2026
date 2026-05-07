import  React, { useState } from "react";

const Contact = () => {
    const [fromDate, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        Course: "",
        message: "",
    });
     const [submitted, setsubmitted] = useState(false);
     const handlechange =(e) => {
        setformDate ({
            ...fromDate,
            [e.target.name]: e.target.value, 
        });
     };
     const headlechange = (e) => {
        e.prevenDefault();
        console.log("from submiddion:", formData);
        setsubmitted(true);
        setTimeout(() => setsubmitted(false), 5000);
        setFormData({
            name: "",
            email: "",
            phone: "",
            Course: "",
            message: "",

        });
     };

     const contactInfo =[
        {icon: "", text: "Azamgrha, UP, 223223" },
        {icon: "", text: "+91 7991327022" },
        {icon: "", text: "support@nayaprayog. com" },
        {icon: "", text: "mon -sat: 9:00AM - 7:00PM" },
     ];
     return (
        <section id="contact" className="Contact-section">
            <h2 className="section-title">Get In Touch</h2>
            <P className="section-subtitle"> Have questions? We're here to help!</P>

            <div className=" contact-container">
                <div className="contact-info">
                    <h3>Contact InFormation</h3>
                    <p>
                        Reach out to us for any queries about courses, admissions, or career guidancec.

                    </p>

                    {contactInfo.map((info,index)=>(
                        <div key={index} className="contact-detaiol">
                            <div className="contact-text">{info.text}</div>
                            </div>
                    ))}
                    <div className="social-links">
                        <h4>follow US</h4>
                        <div className="social-icons">
                            <a href="#" className="social-icon">

                            </a>

                            <a href="#" className="socile-icon">

                            </a>

                            <a href="#" className="social-icon">

                                </a>

                                <a href="#" className="social-icon">

                                    </a>                            
                   </div>
                    </div>
                </div>
                <form className="contact-from" onsubmit={handleSubmit}>
                    {sumitted &&(
                        <div className="success-message">
                            Thanku you! We' ll get back to you soon.
                        </div>
                    )}

                    <input 
                    type="text"
                    name="name"
                    placeholder="your Name"
                    value={formData.name}
                    onchange={handlechange}
                    required
                    />
                    <input 
                    type="Tel"
                    name="phone"
                    placeholder="phone Numbar"
                    value={formData.phone}
                    onchange={handlechange}
                    required
                    /> 
                    
                    <select
                    name="course"
                    value={formData.Course}
                    onChange={handlechange}
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