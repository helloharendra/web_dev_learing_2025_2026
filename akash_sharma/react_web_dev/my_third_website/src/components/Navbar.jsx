import React , { useState, useEffect } from"react";
const Navbar =() => {
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const [scrrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {

            setScrolled(false);
            
        }
    };
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
}, []);

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};
const closeMenu =() => {
    setIsMenuOpen(false);
};
return (
    <nav className={'Navbar ${scrollwed ?"scrolled" : ""}'}>
        <div className="nav-container">
            <div className="logo">
                Naya prayog <span>Acedemy</span>
            </div>

            <div className="Menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? "x" : "="}
            </div>

            <ul className={'nav-links ${isMenuOpen ? "active":""}'}>
                <li>
                    <a href="#home" onClick={closeMenu}>
                        Home
                    </a>
                </li>
       <li>
        <a href="#courses" onClick={closeMenu}>
            Courses
        </a>
       </li>

       <li>
        <a href="#features" onClick={closeMenu}>
            Features
        </a>
       </li>

       <li>
        <a href="#testimonials" onClick={closeMenu}>
            Testimonials
        </a>
       </li>

       <li>
        <a href="#about" onClick={closeMenu}>
            About
        </a>
       </li>

       <li>
        <a href="#contact" onClick={closeMenu}>
            Contact
        </a>
       </li>
       <li>
        <a href="#enroll" className="cta-btn" onClick={closeMenu}>
            Enroll Now
        </a>
       </li>
            </ul>
        </div>
    </nav>
);
};

export default Navbar;