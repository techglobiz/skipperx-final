'use client';
import ArvrJoinForm from '@/components/Sidebar';
import { useCallback, useEffect, useState } from 'react';
import './page.css';
import certificateDisplay from "/public/assets/dcerti.png";
import brochureImage from "/public/assets/drone-brochure.png";
import asishIcon from '/public/assets/shrey.png';
import bgImage from '/public/assets/dronebg.png';
import faqarrow from "/public/assets/faqarrow.png";
import hari from '/public/assets/harih.jpg';
import harish from '/public/assets/harisha.jpg';
import bulbIcon from '/public/assets/holding-bulb.png';
import sai from '/public/assets/sai.jpg';
import sakshi from '/public/assets/saksh.png';
import soumya from "/public/assets/soumya.png";
import suresh from "/public/assets/suresh.png";
import vishal from "/public/assets/vishal.png";
import nivida from '/public/assets/nivida.png';
import fireicon from '/public/assets/fire-icon.png';
import Image from 'next/image';
import skipper from '/public/assets/skipper.png';




const modules = [
  { title: "Introduction to AR/VR Fundamentals", content: "Learn the basics of augmented and virtual reality technologies." },
  { title: "Unity Development Environment", content: "Master Unity engine for AR/VR development." },
  { title: "3D Modeling and Asset Creation", content: "Create and optimize 3D models for immersive experiences." },
  { title: "ARCore and ARKit Development", content: "Build mobile AR applications using platform-specific SDKs." },
  { title: "VR Interaction Design", content: "Design intuitive user interactions in virtual environments." },
  { title: "Spatial Computing and Tracking", content: "Implement spatial awareness and object tracking." },
  { title: "Performance Optimization", content: "Optimize AR/VR applications for smooth performance." },
  { title: "Final Project and Portfolio", content: "Build a complete AR/VR project for your portfolio." }
];

const ARVRPage = () => {
  // const router = useRouter(); // Removed unused variable
  const scrollItems = [
    "Game Development",
    "3D Modeling",
    "Mobile Apps",
    "Web Development",
    "Animation",
    "Interactive Media",
    "Simulation",
    "Digital Art"
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number | null) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const [showForm, setShowForm] = useState(false);

  const handlePricingClick = () => {
    console.log('Button clicked, current showForm state:', showForm);
    console.log('Setting showForm to true');
    setShowForm(true);
    console.log('setShowForm(true) called');
  };




  const getNextDeadline = () => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') {
      return new Date().getTime() + 48 * 60 * 60 * 1000;
    }
    
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
        // Check if we're in the browser environment
        if (typeof window !== 'undefined') {
          localStorage.setItem('droneOfferDeadline', next.toString());
        }
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
      Days: '00',
      Hours: '00',
      Minutes: '00',
      Seconds: '00',
    });
  
    useEffect(() => {
      // Only run on client side
      if (typeof window === 'undefined') return;
      
      const deadline = getNextDeadline();
  
      const interval = setInterval(() => {
        const timeLeft = calculateTimeLeft(deadline);
        setTimer(timeLeft);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [calculateTimeLeft]); // Added missing dependency

    // Debug effect to track showForm state
    useEffect(() => {
      console.log('showForm state changed:', showForm);
    }, [showForm]);

  return (
    <>
      {/* Debug: Show current form state */}
      
      
      {/* <Navbar /> */}
      <div className='arvrbody'>
        <div
          className="arvr-engineering-section"
          style={{
            backgroundImage: `linear-gradient(to right, 
            rgba(41, 37, 50, 1), rgba(116, 20, 99, 0.5)), url(${bgImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="arvr-tag">
            <Image src={bulbIcon} alt="Bulb Icon" className="arvr-tag-icon" />
            For Future Builders
          </div>
          <h1 className="arvr-title">
            Create{' '}
            <span className="highlight">AR/VR experiences</span> that redefine <br/> reality and set new standards.
          </h1>
          <p className="arvr-description">
            Earn to design immersive experiences that blur the line between real and virtual.
          </p>

          <div className="arvr-cta-buttons">
            <button className="arvr-outline-btn">Create</button>
            <button className="arvr-outline-btn">Code</button>
            <button className="arvr-outline-btn">Experience</button>
          </div>

          <button className="arvr-start-btn" onClick={handlePricingClick}>Start Learning</button>

          <div className="arvr-scroll-wrapper">
            <div className="arvr-scroll-track">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="arvr-scroll-content">
                  {scrollItems.map((item, i) => (
                    <span key={`${index}-${i}`} className="arvr-scroll-item">
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

        <div className="drone-accredit-section">   
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
        

        
        <div className="arvr-info-section">
          <div className="arvr-info-left mt-3">           

            <h2 className="arvr-info-heading">
              Advanced  <span>Growth</span> Strategy
            </h2>

            <p className="arvr-info-para">
              Skipper&apos;s AR/VR Engineering Program helps you master immersive technology development, 
              3D modeling, spatial computing, and interactive experience design.
            </p>
            <p className="arvr-info-para1">
              You&apos;ll gain hands-on experience in Unity, ARCore, ARKit, and VR frameworks,
              preparing you for careers in gaming, entertainment, education, and enterprise solutions.
            </p>



            <div className="skilllist-section">
              <h3>Skills you will gain with this path</h3>
              <div className="skills-tags">
                <span>Rendering</span>
                <span>Modeling</span>
                <span>Immersion</span>

                <span>Tracking</span>
                <span>Animation</span>
                <span>Projection</span>
                <span>Visualization</span>
                <span>Mapping</span>
                <span>Calibration</span>
                <span>Prototyping</span>
                <span>Optimization</span>

                <span>Scripting</span>
                <span>Debugging</span>
                <span>Calibration</span>
              </div>
            </div>


            <div className="arvr-info-stats desktop-only">
              {[
                { count: '42,000+', label: 'Mentees trained' },
                { count: '2 Months', label: 'Duration' },
                { count: '7+', label: 'Industry experts' }
              ].map((item, index) => (
                <div className="arvr-stat-card" key={index}>
                  <div className="stat-icon">
                    <span><Image src={fireicon} alt="Fire Icon" /></span>
                  </div>
                  <h4>{item.count}</h4>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>



             {/* Mobile Stats - Single Line */}
            <div className="drone-info-stats-mobile mobile-only">
              {[
                { count: '42,000+', label: 'Mentees trained' },
                { count: '2 Months', label: 'Duration' },
                { count: '7+', label: 'Industry experts' }
              ].map((item, index) => (
                <div className="drone-stat-card-mobile" key={index}>
                  <div className="stat-content-mobile">
                    <span className="stat-icon-mobile"><Image src={fireicon} alt="Fire Icon" /></span>
                    <div className="stat-text-mobile">
                      <h4>{item.count}</h4>
                      <p>{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>




            <div className="arvr-testimonial-box">
              <div className="arvr-testimonial-person">
                <Image src={asishIcon} alt="Ashish Singhal" />
                <div className="arvr-testimonial-name">
                 Shreyansh Singh  <br />
                  <Image src={nivida} alt="NVIDIA Logo" className="nvidia-logo" />
                  {/* <strong>Tech Innovator.</strong> */}
                </div>
              </div>

              <div className="arvr-testimonial-quote">
                <p>
                  <em>
                    &quot;The AR/VR Engineering Program at Skipper was transformative. The hands-on approach to building immersive experiences gave me confidence in emerging technologies.
                    <br /><br />
                    I now work on cutting-edge AR applications and feel well-prepared for the future of technology.&quot;
                  </em>
                </p>
              </div>
            </div>

            <div className="robot-built-section">
              <h2>This is <span className="highlight">built</span> for</h2>
              <div className="robot-built-carousel">
                <div className="robot-built-track">
                  {[
                    { tag: 'Manufacturing', title: 'Industrial robots', desc: 'Streamlining production and assembly lines.' },
                    { tag: 'Healthcare', title: 'Medical robotics', desc: 'Assisting surgeries and patient care.' },
                    { tag: 'Agriculture', title: 'Agri-robots  ', desc: 'Automating planting, harvesting, and monitoring crops.' },
                    { tag: 'Logistics  ', title: 'Autonomous robots ', desc: 'Optimizing storage and delivery operations.' },
                    { tag: 'Defense', title: 'Tactical robots  ', desc: 'Supporting surveillance and hazardous missions.' },
                    { tag: 'Electronics', title: 'Personal robots', desc: 'Enhancing everyday tasks and smart living.' },
                    { tag: 'Education', title: 'Learning platforms', desc: 'Teaching robotics concepts and innovation.' }
                  ].map((item, i) => (
                    <div className="robot-built-card" key={i}>
                      <span className="robot-built-tag">{item.tag}</span>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="arvr-modules">
              <h2>What will you <span className="highlight">learn?</span></h2>
              {modules.map((module, index) => (
                <div className="module-card" key={index}>
                  <div className="module-header" onClick={() => toggleAccordion(index)}>
                    <div>
                      <strong>MODULE {index + 1}</strong>
                      <p>{module.title}</p>
                    </div>
                    <span className={`accordion-icon ${activeIndex === index ? 'open' : ''}`}>
                      ⌄
                    </span>
                  </div>
                  {activeIndex === index && (
                    <div className="module-content">
                      <p>{module.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="review-carousel-section">
                          <h2 className="drone-review-title">Reviews</h2>
                          <div className="review-carousel-wrapper">
                            <div className="review-carousel-track">
                              {[
                                {
                                  heading:"BOE at EMP Monitor",
                                  name: "Parthiv Kumar",
                                  role: "Cybersecurity",
                                  review:
                                    "I gained valuable knowledge and hands-on experience in various aspects of cybersecurity. One of the highlights of my internship was working on a minor project with a machine to identify vulnerabilities.",
                                  avatar: sai,
                                },
                                {
                                  heading:"BOE at EMP Monitor",
                                  name: "Harish",
                                  role: "Blockchain",
                                  review:
                                    "The course provided deep insights and practical exposure. The module on real-world drone integration was especially eye-opening.",
                                  avatar: harish,
                                },
                                {
                                  heading:"BOE aP Monitor",
                                  name: "Sakshi",
                                  role: "AI Research",
                                  review:
                                    "Exceptional mentorship and hands-on sessions! I now understand drone dynamics and automation better.",
                                  avatar: sakshi,
                                },
                                {
                                  heading:"BOE at EMP Monitor",
                                  name: "Hari Krishna",
                                  role: "IoT & Robotics",
                                  review:
                                    "Fantastic journey. Loved the combination of theory and lab work. My project now flies!",
                                  avatar: hari,
                                },
                                {
                                  heading:"BOE at EMP Monitor",
                                  name: "Aditi Rao",
                                  role: "Embedded Systems",
                                  review:
                                    "Comprehensive curriculum and well-guided support made the learning smooth and impactful.",
                                  avatar: sakshi,
                                },
                              ].map((review, i) => (
                                <div className="review-slide" key={i}>
                                  <h4>{review.heading}</h4>
                                  <p><em>{review.review}</em></p>
                                  <div className="review-footer">
                                    <Image src={review.avatar} alt={review.name} />
                                    <div>
                                      <strong className="review-name">{review.name}</strong><br />
                                      <span className="review-namep">{review.role}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
          </div>

          <div className="arvr-info-right">
            <div className="arvr-pricing-card">
              <h2>Master AR/VR Engineering Program</h2>

              <ul className="arvr-features-list">
                <li>✅ Hands-on AR/VR development</li>
                <li>✅ Industry certification</li>
                <li>✅ Unity & 3D modeling</li>
                <li>✅ Real-world projects</li>
              </ul>
              <div className="price">Price</div>
              <div className="arvr-price-section">
                <div className="arvr-original-price">₹29,999</div>
                <div className="arvr-current-price">₹24,000</div>
              </div>

              <div className="trust-footer-arvr">
                <div className="avatarsarvr">
                  <Image src={harish} alt="avatar" />
                  <Image src={hari} alt="avatar" />
                  <Image src={sakshi} alt="avatar" />
                  <Image src={sai} alt="avatar" />
                  <span className='top'>3500+ members has already completed this Program</span>
                </div>
              </div>

              <button className="arvr-pricing-btn" onClick={handlePricingClick}>Start Learning</button>
            </div>
            {/* <div className="arvr-pricingform-card">
              <h2>Master AR/VR Engineering Program</h2>              
              <ArvrJoinForm />              
            </div> */}

          </div>
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
                  {value.split('').map((digit, j) => (
                    <div className="timer-box" key={j}>{digit}</div>
                  ))}
                </div>
                <p>{label}</p>
              </div>
            ))}
          </div>

          <button className="offer-btn" onClick={handlePricingClick}>Apply Now</button>
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
                    Seal the Skill with a <span className="highlight">Skipperx</span> Certificate
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
                    From what you’ll learn to where it can take you — it’s all inside.
                  </p>
                  <button className="download-brochure-btn">Download Brochure</button>
                </div>
              </div>
             </div>
      
      
      
      
      
      
      
      
              <div className="skippers-section desktop-only">
                <div className="faq-header">
                  <hr className="faq-leftt"/>
                  <h2><span className="dronehighlight">Skippers</span> of the Month</h2>
                  <hr className="faq-rightt"/>
                </div>
                <p className="faq-subtext">Insights from those who&apos;ve walked the path you&apos;re about to take.</p>
      
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
                  <Image src={vishal} alt="Vishal Pal" className="skipper-img" />
                  <h4>Vishal Pal</h4>
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
                  <hr className="faq-leftt"/>
                  <h2>Frequently Asked Question</h2>
                  <hr className="faq-rightt"/>
                </div>
                <p className="faq-subtext"></p>
                
                <div className="faq-list">
                  {[
                    {
                      question: "Is technical support available if I encounter issues with the online platform?",
                      answer: "Our dedicated support team is just a call or an email away. Reach out to us at 8792243559 / 8147081557 or support@corizo.in from Monday to Saturday, 11 AM to 8 PM, for any assistance you need!"
                    },
                    {
                      question: "Are there discussion forums or community platforms for students?",
                      answer: "Join the vibrant community on WhatsApp! Engage, discuss, and grow with fellow learners and mentors by your side."
                    },
                    {
                      question: "Is there a pre-registration option available?",
                      answer: "Get ahead of the curve with a nominal pre-registration fee of ₹1000. Secure your spot and start transforming your career trajectory!"
                    },
                     {
                      question: "What is the refund policy?",
                      answer: "Our courses are crafted with care and commitment, and as such, we do not offer refunds. We believe in the value and quality of our educational services!"
                    },
                    {
                      question: "How much time do I need to dedicate to the course each week?",
                      answer: "Whether you’re sprinting or pacing yourself, choose what works for you! We offer both self-paced and mentor-led formats to match your learning style."
                    },
                    {
                      question: "What are the timings of the classes ?",
                      answer: "Classes are tailored for convenience, kicking off after 6 PM to suit your busy schedules and commitments. Dive in when you're ready to learn!"
                    }
                  ].map((item, index) => (
                    <div className="faq-card" key={index}>
                      <div className="faq-question" onClick={() => toggleAccordion(index + 100)}>
                        <h4>{item.question}</h4>
                        <span className={`accordion-icon ${activeIndex === index + 100 ? 'open' : ''}`}><Image src={faqarrow} alt="dropdown" className="faqarrow" /></span>
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
      
          
      {/* Modal Form - Using ArvrJoinForm component */}
      {showForm && (
        <div 
          className="arvr-form-wrapper" 
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '10000',
            visibility: 'visible',
            opacity: '1'
          }}
          onClick={(e) => {
            // Close modal when clicking the backdrop
            if (e.target === e.currentTarget) {
              console.log('Closing form by clicking backdrop');
              setShowForm(false);
            }
          }}
        >
          <div className="arvr-form" style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            maxWidth: '500px',
            width: '90%',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            position: 'relative'
          }}>
            <div className="arvr-form-card">
              <div className="form-header" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
                borderBottom: '1px solid #eee',
                paddingBottom: '15px'
              }}>
                <h3 className="arvr-form-title" style={{
                  margin: '0',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  Master AR/VR Engineering Program
                </h3>
                <button 
                  type="button" 
                  className="close-form-btn"
                  onClick={() => {
                    console.log('Closing form via close button');
                    setShowForm(false);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '28px',
                    cursor: 'pointer',
                    color: '#666',
                    padding: '0',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = '#f5f5f5';
                    target.style.color = '#333';
                  }}
                  onMouseOut={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = '#666';
                  }}
                >
                  ×
                </button>
              </div>

              <ArvrJoinForm />
            </div>
          </div>
        </div>
      )}

      {/* <Footer /> */}
    </>
  );
};

export default ARVRPage;