"use client";
// import { useRouter } from "next/navigation"; // Commented out since it's not being used
import ArvrJoinForm from '@/components/Sidebar';
import bgImage from "/public/assets/dronebg.png";
import bulbIcon from "/public/assets/holding-bulb.png";
import harish from "/public/assets/harisha.jpg";
import sai from "/public/assets/sai.jpg";
import hari from "/public/assets/harih.jpg";
import sakshi from "/public/assets/saksh.png";
import certificateDisplay from "/public/assets/dcerti.png";
import droneBg from "/public/assets/drone-bg-image.png";
import suresh from "/public/assets/suresh.png";
import soumya from "/public/assets/soumya.png";
import vishal from "/public/assets/vishal.png";
import faqarrow from "/public/assets/faqarrow.png";
import brochureImage from "/public/assets/drone-brochure.png";
import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import "./page.css";
import asishIcon from "/public/assets/droneashish.png";
import dronefromob from "/public/assets/stacklogo/dronefromob.png";
import skipper from '/public/assets/skipper.png';



const modules = [
  {
    title: "Paper Planes and Aerodynamics",
    content: "Learn the basics of flight using paper planes and aerodynamics.",
  },
  {
    title: "Introduction to Drones",
    content: "Understand drone parts, types, and functionality.",
  },
  {
    title: "Building and Testing the Drone",
    content: "Step-by-step drone assembly and flight tests.",
  },
  {
    title: "Introduction to Sensors",
    content: "Overview of sensors used in drones.",
  },
  {
    title: "Magnetometer and Barometer",
    content: "Dive deep into orientation and altitude sensors.",
  },
  {
    title: "Understanding the Framework",
    content: "Learn the software framework that controls drones.",
  },
  {
    title: "Project Week",
    content: "Build and fly your own drone in the final week.",
  },
];

const DroneEngineeringPage = () => {
  // const router = useRouter(); // Commented out since it's not being used

  const [isSticky, setIsSticky] = useState(false);
  const pricingCardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollItems = [
    "Business Analytics",
    "Human Resource",
    "Finance",
    "Fashion Designing",
    "Marketing",
    "Blockchain",
    "UI/UX",
    "Cyber Security",
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number | null) => {
    setActiveIndex(index === activeIndex ? null : index);
  };


  const [showForm, setShowForm] = useState(false);

  const handlePricingClick = () => {
    console.log('Button clicked, setting showForm to true');
    setShowForm(true);
  };

  const getNextDeadline = () => {
    const savedDeadline = localStorage.getItem('droneOfferDeadline');
    const now = new Date().getTime();
  
    if (savedDeadline && Number(savedDeadline) > now) {
      return Number(savedDeadline);
    } else {
      const next = now + 48 * 60 * 60 * 1000; // 48 hours in ms
      localStorage.setItem('droneOfferDeadline', next.toString());
      return next;
    }
  };

  const calculateTimeLeft = useCallback((deadline: number) => {
        const now = new Date().getTime();
        const difference = deadline - now;
    
        if (difference <= 0) {
          const next = now + 48 * 60 * 60 * 1000;
          localStorage.setItem('droneOfferDeadline', next.toString());
          return calculateTimeLeft(next);
        }
    
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
    
        return {
          Days: String(days).padStart(2, '0'),
          Hours: String(hours).padStart(2, '0'),
          Minutes: String(minutes).padStart(2, '0'),
          Seconds: String(seconds).padStart(2, '0'),
        };
      }, []);

  const [timer, setTimer] = useState({
    Days: "00",
    Hours: "00",
    Minutes: "00",
    Seconds: "00",
  });

  useEffect(() => {
    const deadline = getNextDeadline();

    const interval = setInterval(() => {
      const timeLeft = calculateTimeLeft(deadline);
      setTimer(timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  // Debug effect to track showForm state
  useEffect(() => {
    console.log('showForm state changed:', showForm);
  }, [showForm]);

  // Improved sticky logic with Intersection Observer as fallback
  useEffect(() => {
    let ticking = false;
    let originalTop = 0;
    let observer: IntersectionObserver | null = null;
    
    const updateSticky = () => {
      if (!pricingCardRef.current || !containerRef.current) {
        ticking = false;
        return;
      }

      // Check if it's mobile (less than 769px)
      if (window.innerWidth < 769) {
        setIsSticky(false);
        ticking = false;
        return;
      }

      const rect = pricingCardRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Store original position if not already sticky
      if (!isSticky && originalTop === 0) {
        originalTop = rect.top + window.scrollY;
      }
      
      // Calculate when to stick and unstick
      const shouldStick = window.scrollY + 80 >= originalTop && 
                         containerRect.bottom > window.innerHeight;
      
      setIsSticky(shouldStick);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateSticky);
        ticking = true;
      }
    };

    const handleResize = () => {
      originalTop = 0; // Reset original position
      setIsSticky(false);
      setTimeout(updateSticky, 100);
    };

    // Intersection Observer as additional fallback
    const setupIntersectionObserver = () => {
      if (containerRef.current && 'IntersectionObserver' in window) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting && window.innerWidth >= 769) {
                // Container is out of view, unstick
                if (window.scrollY < originalTop) {
                  setIsSticky(false);
                }
              }
            });
          },
          {
            threshold: 0,
            rootMargin: '0px 0px -100px 0px'
          }
        );
        observer.observe(containerRef.current);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Initial setup
    setTimeout(() => {
      if (pricingCardRef.current) {
        const rect = pricingCardRef.current.getBoundingClientRect();
        originalTop = rect.top + window.scrollY;
      }
      updateSticky();
      setupIntersectionObserver();
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [isSticky]);

  return (
    <>
      <div className="drone-bg-color">
      <div className="dronebody">
        <div
          className="drone-engineering-section"
          style={{
            backgroundImage: `linear-gradient(to right,rgba(35, 33, 33, -0.6),rgba(51, 28, 90, -0.6)), url(${bgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="drone-tag">
            <Image src={bulbIcon} alt="Bulb Icon" className="drone-tag-icon" />
            For Innovators
          </div>
          <h1 className="drone-title">
            Design, Build & Launch Your Own Drones with Our <br />{" "}
            <span className="highlight">Drone Engineering Program.</span>
          </h1>
          <p className="drone-description">
            Dive into aerodynamics, hardware, and flight systems—build drones
            that actually fly.
          </p>

          <div className="drone-cta-buttons">
            <button className="drone-outline-btn">Build it</button>
            <button className="drone-outline-btn">Fly it</button>
            <button className="drone-outline-btn">Own it</button>
          </div>

          <button className="drone-start-btn" onClick={handlePricingClick}>Start Learning</button>

          <div className="drone-scroll-wrapper">
            <div className="drone-scroll-track">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="drone-scroll-content">
                  {scrollItems.map((item, i) => (
                    <span key={`${index}-${i}`} className="drone-scroll-item">
                      {item} •&nbsp;
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="accredit">
        <div className="drone-accredit-section"></div>

        <div className="drone-stat-section desktop-only">
          <div className="drone-card">            
          </div>
          <div className="drone-card_2">            
          </div>
          <div className="drone-card_3">            
          </div>
          </div>          
          
          <div className="drone-stat-section-mobile mobile-only">
            <div className="hub-card-mobile"></div>
            <div className="hub-card_2-mobile"></div>
            <div className="hub-card_3-mobile"></div>
          </div>





        <div className="drone-info-section" ref={containerRef}>
          <div className="drone-info-left">
            <div>
              <h2 className="drone-info-heading">
                Advanced <span>Growth</span> Strategy
              </h2>

              <p className="drone-info-para">
                Skipperx Drone Engineering Program helps you to master drone
                design, electronics, aerodynamics, and real-time flight control.
              </p>
              <p className="drone-info-para1">
                You’ll gain practical skills in assembling and launching drones
                preparing you for careers in aerospace, defense, &
                innovation-driven industries.
              </p>
            </div>

            <div className="skilllist-section">
              <h3>Skills you will gain with this path</h3>
              <div className="skills-tags">
                <span>Drone Design</span>
                <span>Aerodynamics</span>
                <span>Aviation</span>

                <span>Soldering</span>
                <span>Electronics Integration</span>
                <span>Battery Management</span>
                <span>FPV Systems</span>
                <span>Flight Control</span>
                <span>Embedded Programming</span>
                <span>GPS Navigation</span>
                <span>Microcontroller Configuration</span>

                <span>Sensor Calibration</span>
                <span>PID Tuning</span>
              </div>
            </div>

            {/* Desktop Stats */}
            <div className="drone-info-stats desktop-only">
              {/* <h2 className="drone-head-ing">Mentors</h2> */}
              {[
                { count: "50,000+", label: "Mentees trained" },
                { count: "2 Months", label: "Duration" },
                { count: "10+", label: "Industry Experts" },
              ].map((item, index) => (
                <div className="drone-stat-card" key={index}>
                  <div className="stat-icon">
                    <span>⚡</span>
                  </div>
                  <h4>{item.count}</h4>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>

            {/* Mobile Stats - Single Line */}
            <div className="drone-info-stats-mobile mobile-only">
              {[
                { count: "50,000+", label: "Mentees trained" },
                { count: "2 Months", label: "Duration" },
                { count: "10+", label: "Industry Experts" },
              ].map((item, index) => (
                <div className="drone-stat-card-mobile" key={index}>
                  <div className="stat-content-mobile">
                    <span className="stat-icon-mobile">⚡</span>
                    <div className="stat-text-mobile">
                      <h4>{item.count}</h4>
                      <p>{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="drone-testimonial-box">
              <h2 className="robot-heading">
                Learning That<span className="highlight"> Works</span> - Proven by People
              </h2>
              
              <div className="drone-testimonial-content">
                <div className="drone-testimonial-person">
                  <Image
                    src={asishIcon}
                    alt="Ashish Singhal"
                  />
                  <div className="drone-testimonial-name">
                    Ashish Singhal <br />
                    <strong>Deloitte.</strong>
                  </div>
                </div>

                <div className="drone-testimonial-quote">
                  <p>
                    <em>
                      &quot;The Drone Engineering Program at Skipper exceeded my
                      expectations. It offered a strong balance of theory and
                      practical work. I especially enjoyed assembling my own drone
                      and testing its flight capabilities.
                      <br />
                      <br />
                      This experience has equipped me with valuable skills I can
                      apply in multiple industries.&quot;
                    </em>
                  </p>
                </div>
              </div>
            </div>

            <div className="drone-built-section">
              <h2>
                This is <span className="highlight">built</span> for
              </h2>
              <div className="drone-built-carousel">
                <div className="drone-built-track">
                  {[
                    {
                      tag: "Aviation",
                      title: "Aerospace Engineering",
                      desc: "for designing and testing aerial systems.",
                    },
                    {
                      tag: "Security",
                      title: "Defense & Surveillance",
                      desc: "for drone-based reconnaissance and security operations.",
                    },
                    {
                      tag: "Relief",
                      title: "Disaster Management",
                      desc: "Supporting rescue missions and supply delivery.",
                    },
                    {
                      tag: "Media",
                      title: "Filmmaking & Handling  ",
                      desc: "capturing cinematic shots and live coverage, on air.",
                    },
                    {
                      tag: "Agriculture",
                      title: "AgroTech",
                      desc: "using drones for crop monitoring and precision farming.",
                    },
                    {
                      tag: "Logistics",
                      title: " Parcel  Delivery",
                      desc: "enabling last-mile drone-based delivery systems.",
                    },
                    {
                      tag: " Conservation",
                      title: "Environmental Research",
                      desc: "Tracking wildlife,terrains and monitoring climate impact.",
                    },
                  ].map((item, i) => (
                    <div className="drone-built-card" key={i}>
                      <span className="built-tag">{item.tag}</span>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="module-section">
              <div className="module-heading-wrapper">
                <div className="module-line-left" />
                <h2>
                  What will you<span className="module-highlight"> learn?</span>
                </h2>
                <div className="module-line-right" />
              </div>

              <div className="module-list">
                {modules.map((module, index) => (
                  <div className="module-box" key={index}>
                    <div
                      className="module-toggle"
                      onClick={() => toggleAccordion(index)}
                    >
                      <div>
                        <h4>MODULE {index + 1}</h4>
                        <p>{module.title}</p>
                      </div>
                      <span
                        className={`toggle-icon ${
                          activeIndex === index ? "expanded" : ""
                        }`}
                      >
                        <Image
                          src={faqarrow}
                          alt="toggle"
                          className="toggle-img"
                        />
                      </span>
                    </div>
                    {activeIndex === index && (
                      <div className="module-details">
                        <p>{module.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="review-carousel-section">
              <h2 className="drone-review-title">Reviews</h2>
              <div className="review-carousel-wrapper">
                <div className="review-carousel-track">
                  {[
                    {
                      heading: "BOE at EMP Monitor",
                      name: "Parthiv Kumar",
                      role: "Cybersecurity",
                      review:
                        "I gained valuable knowledge and hands-on experience in various aspects of cybersecurity. One of the highlights of my internship was working on a minor project with a machine to identify vulnerabilities.",
                      avatar: sai,
                    },
                    {
                      heading: "BOE at EMP Monitor",
                      name: "Harish",
                      role: "Blockchain",
                      review:
                        "The course provided deep insights and practical exposure. The module on real-world drone integration was especially eye-opening.",
                      avatar: harish,
                    },
                    {
                      heading: "BOE aP Monitor",
                      name: "Sakshi",
                      role: "AI Research",
                      review:
                        "Exceptional mentorship and hands-on sessions! I now understand drone dynamics and automation better.",
                      avatar: sakshi,
                    },
                    {
                      heading: "BOE at EMP Monitor",
                      name: "Hari Krishna",
                      role: "IoT & Robotics",
                      review:
                        "Fantastic journey. Loved the combination of theory and lab work. My project now flies!",
                      avatar: hari,
                    },
                    {
                      heading: "BOE at EMP Monitor",
                      name: "Aditi Rao",
                      role: "Embedded Systems",
                      review:
                        "Comprehensive curriculum and well-guided support made the learning smooth and impactful.",
                      avatar: sakshi,
                    },
                  ].map((review, i) => (
                    <div className="review-slide" key={i}>
                      <h4>{review.heading}</h4>
                      <p>
                        <em>{review.review}</em>
                      </p>
                      <div className="review-footer">
                        <Image src={review.avatar} alt={review.name} />
                        <div>
                          <strong className="review-name">{review.name}</strong>
                          <br />
                          <span className="review-namep">{review.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="drone-info-right">
            {!showForm && (
              <>
                {isSticky && <div className="sticky-placeholder"></div>}
                <div className={`drone-pricing-card stkform ${isSticky ? 'is-sticky' : ''}`} ref={pricingCardRef}>
                <h2>Master Drone Engineering Program </h2>

                <ul className="drone-features-list">
                  <li>
                    <span className="tickmark">&#10004;</span> Hands on Drone
                    building
                  </li>
                  <li>
                    <span className="tickmark">&#10004;</span> Certification
                    included
                  </li>
                  <li>
                    <span className="tickmark">&#10004;</span> Industry relevant
                    skills
                  </li>
                  <li>
                    <span className="tickmark">&#10004;</span> Hands on learning
                  </li>
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
                    <span className="top">
                      4000+ members has already completed this Program
                    </span>
                  </div>
                </div>

                <button
                  className="drone-pricing-btn"
                  onClick={handlePricingClick}
                >
                  Start Learning
                </button>
              </div>
              </>
            )}

            {showForm && (
              <>
                {isSticky && <div className="sticky-placeholder"></div>}
                <div className={`drone-pricing-card stkform ${isSticky ? 'is-sticky' : ''}`}>
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
                    className="drone-form-title"
                    style={{
                      margin: "0",
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    Master Drone Engineering Program
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
              </>
            )}
          </div>
        </div>

        <div className="drone-offer-section">
          <h2 className="offer-heading">Biggest Price Drop Yet</h2>

          <div className="offer-price-box">
            <span className="offer-icon">⚡</span>
            <span className="offer-old-price">₹24,999/-</span>
            <span className="offer-new-price">₹20,000/-</span>
          </div>

          <p className="offer-subtext">The Clock’s Ticking — Ends In</p>

          <div className="offer-timer">
            {Object.entries(timer).map(([label, value], i) => (
              <div className="timer-unit" key={i}>
                <div className="digit-pair">
                  {value.split("").map((digit, j) => (
                    <div className="timer-box" key={j}>
                      {digit}
                    </div>
                  ))}
                </div>
                <p>{label}</p>
              </div>
            ))}
          </div>

          <button className="offer-btn" onClick={handlePricingClick}>Apply Now</button>
          </div>
          
          <div className='drone-parts mobile-only'>
            <div className="drone-parts-section"
            style={{ backgroundImage: `url(${dronefromob.src})` }}
          ></div>
          </div>

        <div className="drone-parts desktop-only">
          <div
            className="drone-parts-section"
            style={{ backgroundImage: `url(${droneBg.src})` }}
          >
            <div className="drone-content">
              <h2 className="section-title">
                Ready to Flex? Crack Open <br /> Your <span>Drone Kit</span>
              </h2>

              {/* Labels */}
              <div className="label label-1">
                <strong className="d1">1. Frame</strong>
                <br />
                <span className="d1p">
                  A quadcopter uses two clockwise (CW) and two counterclockwise
                  (CCW) propellers.
                </span>
              </div>

              <div className="label label-2">
                <strong className="d1">2. Motor</strong>
                <br />
                <span className="d1p">
                  These are the powerhouses that give your quad the thrust to
                  reach the intense speeds modern drones are reaching.
                </span>
              </div>

              <div className="label label-3">
                <strong className="d1">3. Battery</strong>
                <br />
                <span className="d1p">
                  {" "}
                  Li-po battery is a type of rechargeable battery that is
                  commonly used throughout the RC hobby.
                </span>
              </div>

              <div className="label label-4">
                <strong className="d1">4. Propellers</strong>
                <br />
                <span className="d1p">
                  A quadcopter uses two clockwise (CW) and two counterclockwise
                  (CCW) propellers.
                </span>
              </div>

              <div className="label label-5">
                <strong className="d1">5. Motor</strong>
                <br />
                <span className="d1p">
                  These are the powerhouses that give your quad the thrust to
                  reach the intense speeds modern drones are reaching.
                </span>
              </div>

              {/* WhatsApp Button */}
              <a
                className="whatsapp-button"
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="cert-drone">
          <div className="certificate-display-section">
            <div className="certificate-image-wrapper">
              <Image
                src={certificateDisplay}
                alt="Skipper Certificate"
                className="certificate-background-img"
              />
              <div className="certificate-overlay">
                <h2 className="certificate-title">
                  Seal the Skill with a{" "}
                  <span className="highlight">Skipperx</span> Certificate
                </h2>
                <p className="certificate-subtext">
                  Yes! You will be certified for this program.
                </p>
              </div>
            </div>
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

        <div className="skippers-section desktop-only">
          <div className="faq-header">
            <hr className="faq-leftt" />
            <h2>
              <span className="dronehighlight">Skippers</span> of the Month
            </h2>
            <hr className="faq-rightt" />
          </div>
          <p className="faq-subtext">
            Insights from those who’ve walked the path you're about to take.
          </p>

          <div className="skippers-podium-wrapper">
            <div className="podium-bg" />

            <div className="skipper-box silver">
              <Image src={soumya} alt="Soumya Verma" className="skipper-img" />
              <h4>Soumya Verma</h4>
              <p>Silver Medalist</p>
              <div className="coins-earned1">
                <span className="coin-icon">⚡</span>
                <span className="coin-text">20345 Coins earned</span>
              </div>
            </div>

            <div className="skipper-box gold">
              <Image src={suresh} alt="Suresh Sharma" className="skipper-img" />
              <h4>Suresh Sharma</h4>
              <p>Gold Medalist</p>
              <div className="coins-earned2">
                <span className="coin-icon">⚡</span>
                <span className="coin-text">20345 Coins earned</span>
              </div>
            </div>

            <div className="skipper-box bronze">
              <Image src={vishal} alt="Vishal Pal" className="skipper-img-vishal" />
              <h4 className='vishaltxt'>Vishal Pal</h4>
              <p>Bronze Medalist</p>
              <div className="coins-earned3">
                <span className="coin-icon">⚡</span>
                <span className="coin-text">20345 Coins earned</span>
              </div>
            </div>
          </div>
          </div>
          

           <div className="skippers-section mobile-only">
                <div className="faq-header">
                <hr className="faq-leftt"/>
                <h2><span className="dronehighlight">Skippers</span> of the Month</h2>
                <hr className="faq-rightt"/>
                </div>
                <p className="faq-subtext">Insights from those who&apos;ve walked the path you&apos;re about to take.</p>

                <div className="skippers-podium-wrapper">
                <Image src={skipper} alt="Skipper Logo" className="skipper-logo" />                 
                </div>
                </div>
      

        <div className="faq-section">
          <div className="faq-header">
            <hr className="faq-leftt" />
            <h2>Frequently Asked Question</h2>
            <hr className="faq-rightt" />
          </div>
          <p className="faq-subtext"></p>

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
                    <Image src={faqarrow} alt="dropdown" className="faqarrow" />
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
};

export default DroneEngineeringPage;
