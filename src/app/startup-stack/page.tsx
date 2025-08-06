'use client';
import ArvrJoinForm from '@/components/Sidebar';
import Image from "next/image";
import { useState } from 'react';
import './stack.css'; // Assuming you have a CSS file for styles
import css from '/public/assets/css.png';
import brochureImage from "/public/assets/drone-brochure.png";
import eightseven from "/public/assets/eight-seven.png";
import faqarrow from "/public/assets/faqarrow.png";
import googleEd from '/public/assets/google-edu.png';
import hari from '/public/assets/harih.jpg';
import harish from '/public/assets/harisha.jpg';
import bulbIcon from '/public/assets/holding-bulb.png';
import nineeight from "/public/assets/nine-eight.png";
import nineseven from "/public/assets/nine-seven.png";
import node from '/public/assets/node.png';
import nsdc from '/public/assets/nsdc.png';
import ricon from '/public/assets/ricon.png';
import roborreviewlogo from "/public/assets/robot-review-logo.png";
import sai from '/public/assets/sai.jpg';
import sakshi from '/public/assets/saksh.png';
import skillIndia from '/public/assets/skill-india.png';
import pratyush from '/public/assets/stack/akhil.png';
import anuj from '/public/assets/stack/anuj.png';
import apex from '/public/assets/stack/apex.png';
import corizo from '/public/assets/stack/corizo.png';
import debasish from '/public/assets/stack/debasish.png';
import garodia from '/public/assets/stack/garodia.png';
import harsh from '/public/assets/stack/harsh.png';
import heena from '/public/assets/stack/heena.png';
import isro from '/public/assets/stack/isro.png';
import jayasur from '/public/assets/stack/jayasurya.png';
import jsl from '/public/assets/stack/jsl.png';
import kwe from '/public/assets/stack/kwe.png';
import nehasawal from '/public/assets/stack/neha.png';
import ramya_shrivastav from '/public/assets/stack/ramya_shrivastav.png';
import reddy from '/public/assets/stack/reddy.png';
import zaheen from '/public/assets/stack/zaheen.png';
import startupIndia from '/public/assets/startup-india.png';
import statckimg from '/public/assets/statckup.png';





// ...existing code...


const partners = [skillIndia, nsdc, startupIndia, googleEd, css, node];




export default function StartupStackPage() {
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  const toggleAccordion = (index: number | null) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handlePricingClick = () => {
    setShowForm(true);
  };
  
  

  return (
    <>
     <div className='stackbody'>
  <div className="stack-section">
    <div className="drone-tag">
      <Image src={bulbIcon} alt="Bulb Icon" className="drone-tag-icon" />
      Super Stack
    </div>

    <h1 className="drone-title">
      Everything You Need to Launch and Grow<br /> Your Business with
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
        <div className="stack-card-container">
         <Image src={statckimg} alt="Stack Up" className="stack-up-image" />
        </div>   
        <div className="title-section">
            <h2>How this bundle has <span className="highlight"> impacted </span> other Mentees?</h2>
            </div>

        <div className="drone-stat-section">
          
        
        
                    <div className="stat-card">
                      <h2>98<span>%</span></h2>
                      <p>Completion rate <br />for our 1:1 Program.</p>
                      <Image src={nineeight} className="nineseven" alt="Ninety-Eight Percent" />
                    </div>
                    <div className="stat-card">
                      <h2>97<span>%</span></h2>
                      <p>Of participants report<br /> high engagement</p>
                      <Image src={nineseven} className="nineone" alt="Ninety-Seven Percent" />
                    </div>
                    <div className="stat-card">
                      <h2>87<span>%</span></h2>
                      <p>Of participants stay <br />with their company.</p>
                      <Image src={eightseven} className="eight" alt="Eighty-Seven Percent" />
                    </div>
                  </div>
          
        
        <div className="drone-info-section">
                  <div className="drone-info-left">
        
        
        
                    <div>
                    <h2 className="drone-info-heading">
                      Unlock the mindset of a  <span> modern entrepreneur</span>
              </h2>
              
                    <p className="drone-info-para">
              Master the essentials of building and growing businesses—from strategic decision-making to understanding human behavior.
              <strong>Develop a growth mindset and resilience to navigate challenges.</strong>
              </p>
              
              <ul className="arvr-features-list">
                <li>Use Artificial Intelligence to drive smarter strategies.</li>
                       <li>Decode the dynamics of finance, stock markets, and business analytics.</li>
                       <li>Explore creative domains like fashion designing to stand out in competitive markets.</li>
                       <li>Learn the foundations of psychology and human resource management to lead effectively.</li>
              </ul>


                    
                  </div>
                
        
                   <div>
                    <h2 className="robot-heading">Meet your <span className="highlight">Mentors</span></h2>
                    
                    <div className="robot-testimonial-box">
                      <div className="robot-testimonial-person">
                        <Image src={harsh} alt="Harsh" />
                        <div className="robot-testimonial-name">
                          Harsh <br />
                         <span>  Stock Market</span>
                          <Image src={roborreviewlogo}  className="robot-review-img" alt="RoborReview Logo" />
                        </div>
                      </div>
        
                      <div className="robot-testimonial-person">
                        <Image src={ramya_shrivastav} alt="Ramya Shrivastav" />
                        <div className="robot-testimonial-name">
                          Ramya Shrivastav <br /> <span>Psychology Mentor</span>
                          <Image src={corizo}  className="robot-review-img" alt="Corizo Logo" />
                        </div>
                      </div>
                      <div className="robot-testimonial-person">
                        <Image src={anuj} alt="Anuj" />
                        <div className="robot-testimonial-name">
                          Anuj <br />
                          <span>Data Science</span>
                          <Image src={isro}  className="robot-review-img" alt="ISRO Logo" />
                        </div>
                      </div>
                      
              </div>
              
              <div className="robot-testimonial-box">
                      <div className="robot-testimonial-person">
                        <Image src={pratyush} alt="Pratyush Singh" />
                        <div className="robot-testimonial-name">
                         Pratyush Singh<br/>
                          <span>Finance</span>
                          <Image src={reddy}  className="robot-review-img" alt="Reddy Logo" />
                        </div>
                      </div>
        
                      <div className="robot-testimonial-person">
                        <Image src={heena} alt="Heena" />
                        <div className="robot-testimonial-name">
                          Heena Suresh <br /> <span>Human Resources</span>
                          <Image src={garodia}  className="robot-review-img" alt="Garodia Logo" />
                        </div>
                      </div>
                      <div className="robot-testimonial-person">
                        <Image src={zaheen} alt="Zaheen" />
                        <div className="robot-testimonial-name">
                          Zaheen Haider Naqvi <br />
                           <span>Digital Marketing</span>
                          <Image src={corizo}  className="robot-review-img" alt="Corizo Logo" />
                        </div>
                      </div>
                      
                    </div>

              <div className="robot-testimonial-box">
                      <div className="robot-testimonial-person">
                        <Image src={jayasur} alt="Ashish Singhal" />
                        <div className="robot-testimonial-name">
                          Jayasurya Valusa<br />
                           <span>Developer</span>
                          <Image src={kwe}  className="robot-review-img" alt="KWE Logo" />
        
                      <div className="robot-testimonial-person">
                        <Image src={debasish} alt="Debashish Senapati" />
                        <div className="robot-testimonial-name">
                         Debashish Senapati <br /> <span>Human Resource</span>
                          <Image src={jsl}  className="robot-review-img" alt="JSL Logo" />
                        </div>
                      </div>
                        <Image src={nehasawal} alt="Ashish Singhal" />
                        <div className="robot-testimonial-name">
                          Neha Sawal <br /> <span>Legal writer & Editor</span>
                          <Image src={apex}  className="robot-review-img" alt="Apex Logo" />
                      </div>
                      
                    </div>
                    </div>         
                     </div>    
        
        
        
                  <div className="drone-info-right">
                  {!showForm && (
                    <div className="drone-pricing-card">
                      <h2>Master Startup stack </h2>
        
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
                          <span className='top'>7000+ members has already completed this Program</span>
                        </div>
                      </div>
        
                      <button className="drone-pricing-btn" onClick={handlePricingClick}>Start Learning</button>
                    </div>
        
                  )}
        
        
        
        
        
                 {showForm && (
                  <div className={`drone-form-wrapper ${showForm ? 'visible' : 'hidden'}`}>
                   <div className="drone-form">
                    <div className="drone-form-card">
                      <h3 className="drone-form-title">Master Robot Engineering Program</h3>
        
                      <form className="drone-form-fields">
                        <input type="text" placeholder="First Name*" required />
                        <input type="email" placeholder="E-mail*" required />
                        <input type="text" placeholder="College name*" required />
                        
                        <select required>
                          <option value="">Interest*</option>
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
        
                        <div className="phone--input">
                          <span className="country--code">+91</span>
                          <input type="tel" placeholder="XXXXXXXXXX" required />
                        </div>
        
                        <button type="submit" className="form-submit-btn">Start Learning</button>
                      </form>
                    </div>
                   </div>
                  </div>
                 )}
        
        
                    <div className="arvr-pricingform-card">
                      <h2>Master AR/VR Engineering Program</h2> 
                      
              <ArvrJoinForm />
              
                    </div>
        
                  </div>
                </div>

            <div className='flex-row justify-center items-center bg-stack'>
                      <div className="trust-wrapper">
                      <h4 className="accredited-text"> <span className='highlight'>Tools </span> You’ll Master to Launch and Grow Your Business</h4>
                      <p className='pt-0 pb-4'>Master real-world Business essentials.</p>
                        <div className="logo-row"> 
                          {partners.map((logo, idx) => (
                            <Image key={idx} src={logo} alt="logo" className="partner-logo" />
                          ))}
                   </div>   
            
                     <div className="logo-row"> 
                          {partners.map((logo, idx) => (
                            <Image key={idx} src={logo} alt="logo" className="partner-logo" />
                          ))}
                        </div>   
                      </div> 

<div className="drone-info-stats-stack mb-4">
  <h2 className="stack-head-ing">
    Here’s What You’ll Walk <span> Away </span> With
  </h2>

  <div className="drone-stat-wrapper">
    {[
      { count: 'Build real projects in', label: 'business strategy, analytics, and innovation' },
      { count: 'Learn top tools for finance, ', label: 'stock trading, and AI-powered decisions' },
      { count: 'Explore creative domains like', label: 'fashion and consumer psychology' },
      { count: 'Train for real roles with expert', label: ' mentors, case studies, and hands-on practice' }
    ].map((item, index) => (
      <div className="drone-stat-card" key={index}>
        <div className="stat-icon">
          <Image src={ricon} alt="Stack Icon" className="stat-icon-image" />
          
        </div>
        <h4>{item.count}</h4>
        <p>{item.label}</p>
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
                        From what you’ll learn to where it can take you — it’s all inside.
                      </p>
                      <button className="download-brochure-btn">Download Brochure</button>
                    </div>
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
                </div>
              </div>
            </div>
          </div>
    </>
  );
}