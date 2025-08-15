'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';
import logo from '/public/assets/blacklogo.png';


const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => {
    setOpen(false);
  };

  const toggleMobileMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="navbar">
      <div className="left-section">
        <Link href='/'><Image src={logo} alt="Skipper Logo" className="logo-img" /></Link>
        
        <div className={`nav-linkss ${open ? 'show' : ''}`}>
          <div className="nav-item dropdown">
            <span className="navbar-learn">Learn </span><span className="arrow">▾</span>
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <Link href="/courses">Courses</Link>
              </div>
              <div className="dropdown-item">
                <Link href="/projects">Projects</Link>
              </div>
              <div className="dropdown-item">
                <Link href="/live-classes">Live Classes</Link>
              </div>
            </div>
          </div>

          {/* Become a Member with Dropdown */}
          <div className="nav-item dropdown">
            <span className="navbar-member">Become a <span className="highlight">member</span> <span className="arrow">▾</span></span>
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <Link href="/membership-plans">Membership Plans</Link>
              </div>
              <div className="dropdown-item">
                <Link href="/benefits">Benefits</Link>
              </div>
              <div className="dropdown-item">
                <Link href="/faqs">FAQs</Link>
              </div>
            </div>
          </div>

          <span className="nav-item"><span className="navbar-member"><Link href="/about" className="navlink" >About</Link></span></span>
        </div>
      </div>

      <div className={`nav-buttons ${open ? 'show' : ''}`}>
        <Link href="/login" className="navlink" ><button className="btn black">Login</button></Link>
        <Link href="/contact" className="navlink" ><button className="btn white">Contact Us</button></Link>
      </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${open ? 'show' : ''}`}>
          <div className="mobile-nav-items">
            {/* Learn Section Items */}
            <Link href="/courses" className="mobile-nav-item" onClick={closeMobileMenu}>
              <span>Courses</span>
            </Link>
            <Link href="/projects" className="mobile-nav-item" onClick={closeMobileMenu}>
              <span>Projects</span>
            </Link>
            <Link href="/live-classes" className="mobile-nav-item" onClick={closeMobileMenu}>
              <span>Live Classes</span>
            </Link>

            <Link href="/ar-vr" className="mobile-nav-item" onClick={closeMobileMenu}>
              <span>AR/VR Engineering</span>
            </Link>
            <Link href="/drone-engineering" className="mobile-nav-item" onClick={closeMobileMenu}>
              <span>Drone Engineering</span>
            </Link>
            <Link href="/robot-engineering" className="mobile-nav-item" onClick={closeMobileMenu}>
              <span>Robot Engineering</span>
            </Link>
            <Link href="/core-tech" className="mobile-nav-item" onClick={closeMobileMenu}>
              <span>Core Technology</span>
            </Link>

            {/* Member Section Items */}
            <Link href="/membership-plans" className="mobile-nav-item" onClick={closeMobileMenu}>
              <span>Membership Plans</span>
            </Link>
            <Link href="/benefits" className="mobile-nav-item" onClick={closeMobileMenu}>
              <span>Benefits</span>
            </Link>
            <Link href="/faqs" className="mobile-nav-item" onClick={closeMobileMenu}>
              <span>FAQs</span>
            </Link>

            {/* About */}
            <Link href="/about" className="mobile-nav-item" onClick={closeMobileMenu}>
              <span>About</span>
            </Link>

            {/* <div className="mobile-buttons">
              <button className="btn black">Login</button>
              <button className="btn white">Contact Us</button>
            </div> */}
          </div>
        </div>

        <button className="hamburger" onClick={toggleMobileMenu}>☰</button>
      </nav>
    </>
  );
};

export default Header;
