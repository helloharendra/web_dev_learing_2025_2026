import React, {useState} from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        Course: "",
        massage: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlesubmit= (e) => {
        e.preventDefault();
        //Hadle from submission here (API call)
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setTimeout(()=> setSubmitted(false), 5000);
        setFormData({
            name: "",
            email: "",
            phone: "",
            Course: "",
            massage: "",
        });
    };
    const ContactInfo = [
    {  text: "Azamgarh, UP, 223223"},
    {  text: "+91 7991327022"},
    {  text: "Mon - Sat: 9:00 AM - 7:00 PM"},
    ];
    return (
        <section id="contact" className="contact-section">
            {/*REMOVED the <div className="container"> wrapper */}
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Have question? We're here to help!</p>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>
                        Reach out to us for any queries about courses, admission, or carrer guidence.
                    </p>
                    {ContactInfo. map ((info, index) =>(
                        <div key={index} className="contact-detail">
                            <div className="contact-icon">{info.icon}</div>
                            <div className="contact-text">{info.text}</div>
                        </div>
                    ))}
                    <div className="social-links">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="#" className="social-icon">

                            </a>
                            <a href="#"className="social-icon">

                            </a>
                            <a href="#" className="social-icon">

                            </a>
                            <a href="#" className="social-icon">

                            </a>
                        </div>
                    </div>
                </div>
                <form className="contact-form" onSubmit={handlesubmit}>
                    {submitted && (
                        <div className="success-message">
                            Thank you! We'll get back to you soon.
                        </div>
                    )}
                    <input
                     type="text"
                     name="name"
                     placeholder="Your Name"
                     value={formData.name}
                     onChange={handleChange}
                     required
                      />
                      <input type="email"
                      name="email"
                      placeholder="Your Email"
                      onChange={handleChange}
                      required
                       />
                       <input type="tel"
                       name="phone"
                       placeholder="Phone Number" 
                       value={formData.phone}
                       onChange={handleChange}
                       required
                       />
                       <select 
                       name="course" value={formData} onChange={handleChange} required
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
                        value={formData}
                        onChange={handleChange}
                        required
                        ></textarea>
                        <button type="submit" className="submit-btn">
                            Send Massage →                        </button>
                </form>
            </div>
        </section>
    );
    


};
export default Contact
