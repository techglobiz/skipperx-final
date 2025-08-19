'use client';
import ArvrJoinForm from '@/components/Sidebar';
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import './core.css'; // Assuming you have a CSS file for styles
import brochureImage from "/public/assets/drone-brochure.png";
import faqarrow from "/public/assets/faqarrow.png";
import hari from "/public/assets/harih.jpg";
import harish from "/public/assets/harisha.jpg";
import bulbIcon from "/public/assets/holding-bulb.png";
import ricon from "/public/assets/ricon.png";
import sai from "/public/assets/sai.jpg";
import sakshi from "/public/assets/saksh.png";
import pratyush from "/public/assets/stack/akhil.png";
import anuj from "/public/assets/stack/anuj.png";
import apex from "/public/assets/stack/apex.png";
import corizo from "/public/assets/stack/corizo.png";
import debasish from "/public/assets/stack/debasish.png";
import garodia from "/public/assets/stack/garodia.png";
import harsh from "/public/assets/stack/harsh.png";
import heena from "/public/assets/stack/heena.png";
import isro from "/public/assets/stack/isro.png";
import jayasur from "/public/assets/stack/jayasurya.png";
import jsl from "/public/assets/stack/jsl.png";
import kwe from "/public/assets/stack/kwe.png";
import nehasawal from "/public/assets/stack/neha.png";
import ramya_shrivastav from "/public/assets/stack/ramya_shrivastav.png";
import reddy from "/public/assets/stack/reddy.png";
import zaheen from "/public/assets/stack/zaheen.png";
import statckimg from "/public/assets/tech.png";
import bcg from "/public/assets/stack/bcg.png";

import css from "/public/assets/stacklogo/css.png";
import node from "/public/assets/stacklogo/node.png";
import tt from "/public/assets/stacklogo/tt.png";
import matp from "/public/assets/stacklogo/matp.png";
import vcode from "/public/assets/stacklogo/vscode.png";
import upstock from "/public/assets/stacklogo/up.png";
import learn from "/public/assets/stacklogo/learn.png";
import seaborn from "/public/assets/stacklogo/seaborn.png";
import python from "/public/assets/stacklogo/python.png";
import numpy from "/public/assets/stacklogo/numpy.png"; 
import jupyter from "/public/assets/stacklogo/jyputer.png";
import coregraph from "/public/assets/stacklogo/coregraph.png";



const partners = [css, tt, matp, vcode, node, upstock];
const partners2 = [learn, seaborn, python, numpy, jupyter, numpy];



export default function CoretechPage() {
  
 const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Sticky logic
  const [isSticky, setIsSticky] = useState(false);
  const pricingCardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (index: number | null) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handlePricingClick = () => {
    setShowForm(true);
  };
  
  // Sticky logic
  useEffect(() => {
    const checkSticky = () => {
      if (!pricingCardRef.current || !containerRef.current) return;
      
      // Check if it's mobile (less than 769px)
      if (window.innerWidth < 769) {
        setIsSticky(false);
        return;
      }

      const rect = pricingCardRef.current.getBoundingClientRect();
      const container = containerRef.current.getBoundingClientRect();
      
      // Make sticky when pricing card would go out of view and container is still visible
      if (rect.top <= 80 && container.bottom > window.innerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const handleScroll = () => {
      requestAnimationFrame(checkSticky);
    };

    const handleResize = () => {
      // Re-check sticky state on resize
      checkSticky();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial check
    checkSticky();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
     <div className="stackbody">
        <div className="stack-header">
        <div className="stack-section">
          <div className="drone-tag">
            <Image src={bulbIcon} alt="Bulb Icon" className="drone-tag-icon" />
            Super Stack
          </div>

          <h1 className="drone-title">
            Everything You Need to Launch and Grow
            <br /> Your Business with
            <span className="highlight"> Startup Stack.</span>
          </h1>

          <p className="drone-description">
            7+ Business programs bundled for your startup journey.
          </p>

          <div className="drone-cta-buttons">
            <button className="drone-outline-btn">Build it</button>
            <button className="drone-outline-btn">Fly it</button>
            <button className="drone-outline-btn">Own it</button>
          </div>

          <button className="drone-start-btn">Start Learning</button>
        </div>

        {/* NEW STACK MODULES SECTION */}
        <div className="stack-card-container desktop-only">
          <Image src={statckimg} alt="Stack Up" className="stack-up-image" />
          </div>

          <div className="stack-card-container mobile-only">
            <Image src={coregraph} alt="Stack Up" className="creatorsmob" />
          </div>
          

        <div className="title-section">
          <h2>
            How this bundle has <span className="highlight"> impacted </span>{" "}
            other Mentees?
          </h2>
        </div>

        <div className="drone-stat-section desktop-only">
          <div className="stat-card">            
          </div>
          <div className="stat-card_2">            
          </div>
          <div className="stat-card_3">            
          </div>
          </div>
          
           <div className="drone-stat-section-mobile mobile-only">
            <div className="hub-card-mobile"></div>
            <div className="hub-card_2-mobile"></div>
            <div className="hub-card_3-mobile"></div>
          </div>



        </div>
        








        <div className="drone-info-section" ref={containerRef}>
  {/* Left Section */}
  <div className="drone-info-left">
    {/* Intro Section */}
    <div>
      <h2 className="drone-info-heading">
        Unlock the mindset of a <span> modern entrepreneur</span>
      </h2>
      <p>Develop practical skills to design, build, and secure next-generation systems.</p>
      <p className="stack-title"> What you’ll explore:</p>
        <ul className="arvr-features-list">
        <li>Use Artificial Intelligence to drive smarter strategies.</li>
        <li>Master the art of strategic decision-making.</li>
        <li>Understand human behavior to build better teams.</li>
        <li>Develop a growth mindset and resilience to navigate challenges.</li>
        <li>Work with emerging fields like IoT, Robotics, Embedded Systems, Hybrid & Electric Vehicles, and Auto CAD.</li>
      </ul>
    </div>
    



    {/* Mentors Section */}
    <div>
      <h2 className="robot-heading">
        Meet your <span className="highlight">Mentors</span>
      </h2>

      {/* Row 1 */}
      <div className="robot-testimonial-box">
        <div className="robot-testimonial-person">
          <Image src={harsh} alt="Harsh" />
          <div className="robot-testimonial-name">
            Harsh <br />
            <span>Stock Market</span>
            <Image src={bcg} className="robot-review-img" alt="RoborReview Logo" />
          </div>
        </div>

        <div className="robot-testimonial-person">
          <Image src={ramya_shrivastav} alt="Ramya Shrivastav" />
          <div className="robot-testimonial-name">
            Ramya <br /> <span>Psychology</span>
            <Image src={corizo} className="robot-review-img" alt="Corizo Logo" />
          </div>
        </div>

        <div className="robot-testimonial-person">
          <Image src={anuj} alt="Anuj" />
          <div className="robot-testimonial-name">
            Anuj <br />
            <span>Data Science</span>
            <Image src={isro} className="robot-review-img" alt="ISRO Logo" />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="robot-testimonial-box">
        <div className="robot-testimonial-person">
          <Image src={pratyush} alt="Pratyush Singh" />
          <div className="robot-testimonial-name">
            Pratyush Singh <br />
            <span>Finance</span>
            <Image src={reddy} className="robot-review-img" alt="Reddy Logo" />
          </div>
        </div>

        <div className="robot-testimonial-person">
          <Image src={heena} alt="Heena" />
          <div className="robot-testimonial-name">
            Heena Suresh <br /> <span>Human Resources</span>
            <Image src={garodia} className="robot-review-img" alt="Garodia Logo" />
          </div>
        </div>

        <div className="robot-testimonial-person">
          <Image src={zaheen} alt="Zaheen" />
          <div className="robot-testimonial-name">
            Zaheen Haider Naqvi <br />
            <span>Digital Marketing</span>
            <Image src={corizo} className="robot-review-img" alt="Corizo Logo" />
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="robot-testimonial-box">
        <div className="robot-testimonial-person">
          <Image src={jayasur} alt="Jayasurya Valusa" />
          <div className="robot-testimonial-name">
            Jayasurya Valusa <br />
            <span>Developer</span>
            <Image src={kwe} className="robot-review-img" alt="KWE Logo" />
          </div>
        </div>

        <div className="robot-testimonial-person">
          <Image src={debasish} alt="Debashish Senapati" />
          <div className="robot-testimonial-name">
            Debashish Senapati <br /> <span>Human Resource</span>
            <Image src={jsl} className="robot-review-img" alt="JSL Logo" />
          </div>
        </div>

        <div className="robot-testimonial-person">
          <Image src={nehasawal} alt="Neha Sawal" />
          <div className="robot-testimonial-name">
            Neha Sawal <br /> <span>Legal Writer & Editor</span>
            <Image src={apex} className="robot-review-img" alt="Apex Logo" />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="drone-info-right">
    {!showForm && (
      <div className={`drone-pricing-card stkform ${isSticky ? 'is-sticky-active' : ''}`} ref={pricingCardRef}>
        <h2>Master Startup stack</h2>
        <ul className="drone-features-list">
          <li><span className="tickmark">&#10004;</span> Innovation for professional growth</li>
          <li><span className="tickmark">&#10004;</span> Certification included</li>
          <li><span className="tickmark">&#10004;</span> Hands on learning</li>
        </ul>

        <div className="price">Price</div>
        <div className="drone-price-section">
          <div className="drone-original-price">₹24,999</div>
          <div className="drone-current-price">₹20,000</div>
        </div>

        <div className="trust-footer-drone">
          <div className="avatarsdrone">
            <Image src={harish} alt="avatar" />
            <Image src={hari} alt="avatar" />
            <Image src={sakshi} alt="avatar" />
            <Image src={sai} alt="avatar" />
            <span className="top">7000+ members have already completed this Program</span>
          </div>
        </div>

        <button className="drone-pricing-btn" onClick={handlePricingClick}>
          Start Learning
        </button>
      </div>
    )}

    {showForm && (
      <div className="drone-pricing-card">
        <div
          className="form-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            borderBottom: "1px solid #eee",
            paddingBottom: "15px",
          }}
        >
          <h3
            className="startup-form-title"
            style={{
              margin: "0",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Master Startup Stack Program
          </h3>
          <button
            type="button"
            className="close-form-btn"
            onClick={() => setShowForm(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#666",
              padding: "0",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLButtonElement;
              target.style.backgroundColor = "#f5f5f5";
              target.style.color = "#333";
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLButtonElement;
              target.style.backgroundColor = "transparent";
              target.style.color = "#666";
            }}
          >
            ×
          </button>
        </div>

        <ArvrJoinForm />
      </div>
    )}
  </div>
</div>













            <div className="flex-row justify-center items-center bg-stack">
              <div className="trust-wrapper">
                <h4 className="accredited-text">
                  {" "}
                  <span className="highlight">Tools </span> You’ll Master to
                  Launch and Grow Your Business
                </h4>
                <p className="pt-0 pb-4">
                  Master real-world Business essentials.
                </p>
                <div className="logo-row">
                  {partners.map((logo, idx) => (
                    <Image
                      key={idx}
                      src={logo}
                      alt="logo"
                      className="partner-logo"
                    />
                  ))}
                </div>

                <div className="logo-row">
                  {partners2.map((logo, idx) => (
                    <Image
                      key={idx}
                      src={logo}
                      alt="logo"
                      className="partner-logo"
                    />
                  ))}
                </div>
              </div>

              <div className="drone-info-stats-stack mb-4">
            <h2 className="stack-head-ing">
              Here&apos;s What You&apos;ll Walk <span> Away </span> With
            </h2>

            <div className="drone-stat-wrapper">
              {[
                {
                  count: "Build real projects in",
                  label: "branding, content creation, and design",
                },
                {
                  count: "Learn top tools like",
                  label: " Adobe Suite, Figma, and social media platforms",
                },
                {
                  count: "Explore",
                  label: "visual storytelling, photography, and digital marketing strategies",
                },
                {
                  count: "Train for creative careers with",
                  label: "portfolio-ready work and mentor guidance",
                },
              ].map((item, index) => (
                <div className="drone-stat-card" key={index}>
                  <div className="stat-icon">
                    <Image
                      src={ricon}
                      alt="Stack Icon"
                      className="stat-icon-image"
                    />
                  </div>
                  {/* <h4></h4> */}
                  <p> <span> {item.count} </span>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

              <div className="drone-brochure">
                <div
                  className="brochure-banner"
                  style={{ backgroundImage: `url(${brochureImage.src})` }}
                >
                  <div className="brochure-overlay">
                    <h3>
                      Want the Deep Dive? Grab the <span>Brochure</span>
                    </h3>
                    <p>
                      From what you’ll learn to where it can take you — it’s all
                      inside.
                    </p>
                    <button className="download-brochure-btn">
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>

              <div className="faq-section">
                <div className="faq-header">
                  <hr className="faq-leftt" />
              <h2>Frequently Asked Question</h2>              
                  <hr className="faq-rightt" />
                  
                </div>
            <p className="faq-subtext">
              Insights from those who’ve walked the path you're about to take.
                </p>

                <div className="faq-list">
                  {[
                    {
                      question:
                        "Is technical support available if I encounter issues with the online platform?",
                      answer:
                        "Our dedicated support team is just a call or an email away. Reach out to us at 8792243559 / 8147081557 or support@corizo.in from Monday to Saturday, 11 AM to 8 PM, for any assistance you need!",
                    },
                    {
                      question:
                        "Are there discussion forums or community platforms for students?",
                      answer:
                        "Join the vibrant community on WhatsApp! Engage, discuss, and grow with fellow learners and mentors by your side.",
                    },
                    {
                      question: "Is there a pre-registration option available?",
                      answer:
                        "Get ahead of the curve with a nominal pre-registration fee of ₹1000. Secure your spot and start transforming your career trajectory!",
                    },
                    {
                      question: "What is the refund policy?",
                      answer:
                        "Our courses are crafted with care and commitment, and as such, we do not offer refunds. We believe in the value and quality of our educational services!",
                    },
                    {
                      question:
                        "How much time do I need to dedicate to the course each week?",
                      answer:
                        "Whether you’re sprinting or pacing yourself, choose what works for you! We offer both self-paced and mentor-led formats to match your learning style.",
                    },
                    {
                      question: "What are the timings of the classes ?",
                      answer:
                        "Classes are tailored for convenience, kicking off after 6 PM to suit your busy schedules and commitments. Dive in when you're ready to learn!",
                    },
                  ].map((item, index) => (
                    <div className="faq-card" key={index}>
                      <div
                        className="faq-question"
                        onClick={() => toggleAccordion(index + 100)}
                      >
                        <h4>{item.question}</h4>
                        <span
                          className={`accordion-icon ${
                            activeIndex === index + 100 ? "open" : ""
                          }`}
                        >
                          <Image
                            src={faqarrow}
                            alt="dropdown"
                            className="faqarrow"
                          />
                        </span>
                      </div>
                      {activeIndex === index + 100 && (
                        <div className="faq-answer">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

    </>
  );
}