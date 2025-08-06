// ...existing code...
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Assuming you have a CSS file for styling
import logo from '/public/assets/skipper-logo.png'; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-left">
          <Image src={logo} alt="Skipper Logo" className="footer-logo" />
          <p>VMF2+7FJ Classic Arena, Hosur Rd, AECS Layout-A Block,
            Singasandra, Bengaluru, <br/> Karnataka 560068</p>
          
          <p><a href="#">support@skipperx.io</a></p>
          <p><a href="#">+91 9888888888</a></p>

          <div className="exclusive">
            <h3>Community Exclusive</h3>
            <p><strong>Subscribe</strong> to our newsletter for exclusive updates on the latest releases and special offers.</p>
            <div className="subscribe-wrapper">
              <input type="email" placeholder="Email Id" className="subscribe-input" />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-sections">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
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

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>

              <li><a href="/terms-and-conditions">Terms and Condition</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li ><a href="#">FAQ</a></li>
              <li><a href="/refund-policy">Refund Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2025 . All rights reserved.</p>
        <div className="footer-socials">
          <FaLinkedin />
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
