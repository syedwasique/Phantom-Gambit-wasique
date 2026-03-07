import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Navbar from '../Navbar/Nav';
import Footer from '../footer/footer'; // Import Footer
// Removed Ballpit from Layout
import './Layout.css';

function Layout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    // Ensure scrolling is enabled
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.overflowX = 'hidden';

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
      document.body.style.overflowX = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  return (
    <div className="main-layout">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="content-wrapper">
        {/* Hero/Home section with Home Component */}
        <section id="home" className="home-section">
          <Home />
        </section>

        {/* About section */}
        <section id="about" className="section about-section">
          <About />
        </section>

        {/* Contact section */}
        <section id="contact" className="section contact-section">
          <Contact />
        </section>
      </div>


    </div>
  );
}

export default Layout;