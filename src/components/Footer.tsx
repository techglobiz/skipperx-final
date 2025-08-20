'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import ArvrJoinForm from './Sidebar';
import './Footer.css';
import logo from '/public/assets/skipper-logo.png';

const Footer = () => {
  const [showForm, setShowForm] = useState(false);

  // const handleStartLearningClick = () => {
  //   setShowForm(true);
  // };

  return (
    <footer className="footer">
      <div className="footer-social">
        <span>Catch our updates on</span>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      <div className="footer-content">
        <div className="footer-left">
          <Link href='/'>
            <Image src={logo} alt="Skipper Logo" className="footer-logo" />
          </Link>
          
          {/* Menu section for mobile - Company and Programs */}
          <div className="footer-mobile-menu">
            <div className="footer-columns-group">
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><Link href="/about">About Us</Link></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Apply as Mentor</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Programs</h4>
                <ul>
                  <li><a href="#">For Innovators</a></li>
                  <li><a href="#">For Doers</a></li>
                  <li><a href="#">For Enterpreneurs</a></li>
                </ul>
              </div>
            </div>
            
            <div className="footer-columns-group">
              <div className="footer-column">
                <h4>Legal</h4>
                <ul>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/terms-conditions">Terms & Condition</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Support</h4>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><Link href="/refund-policy">
                    Payment and <br/>Refund Policy
                  </Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Description section */}
          <div className="footer-description">
            <p>SkipperX is a premium online learning platform serving graduates, senior professionals in business, tech, and design, and anyone looking to upgrade their job profile.</p>

            <p>Our job-focused, skill-based programs are built around real-world projects and guided by mentors from top companies like Meta, Google, and JPMorgan.</p>

            <p>Learn drone engineering, AI, robotics, AR/VR, YouTube, stock trading, and more — all inside virtual classrooms. Explore curated learning packs like Tech Core, Startup Stack, and Creative Hub to grow your career or launch your next big move.</p>  

            <p><strong>Hustlehub 1906, 19th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102</strong></p>
                
            <p><a href="#">support@skipperx.io</a></p>
            <p><a href="#">+91 9888888888</a></p>
          </div>
          
          {/* Newsletter section for mobile */}
          <div className="footer-mobile-newsletter">
            <div className="exclusive">
              <h3>Community Exclusive</h3>
              <p>Subscribe to our newsletter for exclusive updates on the latest releases and special offers.</p>
              <div className="subscribe-wrapper">
                <input type="email" placeholder="Email Id" className="subscribe-input" />
                <button className="subscribe-button">Subscribe</button>
              </div>
            </div>
          </div>
          
          {/* Social media section for mobile */}
          <div className="footer-mobile-social">
            <div className="footer-social">
              <span>Catch our updates on</span>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-sections">
          <div className="footer-columns-group">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Apply as Mentor</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Programs</h4>
              <ul>
                <li><a href="#">For Innovators</a></li>
                <li><a href="#">For Doers</a></li>
                <li><a href="#">For Enterpreneurs</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-columns-group">
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-conditions">Terms & Condition</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><Link href="/refund-policy">
                  Payment and <br/>Refund Policy
                </Link></li>
              </ul>
            </div>
          </div>
          
          <div className="exclusive">
            <h3>Community Exclusive</h3>
            <p>Subscribe to our newsletter for exclusive updates on the latest releases and special offers.</p>
            <div className="subscribe-wrapper">
              <input type="email" placeholder="Email Id" className="subscribe-input" />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
        </div>  
      </div>
      
      <div className="footer-bottom">       
      </div>
      
      <p className="footer-rights">©2025 . All rights reserved.</p>
      
      {/* Sticky Start Learning Button */}
      {/* <div className="sticky-button-container">
        <button className="sticky-start-learning-btn" onClick={handleStartLearningClick}>
          Start Learning
        </button>
      </div> */}

      {/* Modal Form */}
      {showForm && (
        <div 
          className="form-modal-wrapper" 
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowForm(false);
            }
          }}
        >
          <div className="form-modal-content">
            <div className="form-header">
              <h3 className="form-title">Start Your Learning Journey</h3>
              <button 
                type="button" 
                className="close-form-btn"
                onClick={() => setShowForm(false)}
              >
                ×
              </button>
            </div>
            <ArvrJoinForm formName="General Learning Registration" />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
