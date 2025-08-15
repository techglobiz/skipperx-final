"use client";
import React, { useEffect, useState } from 'react';
import userImg from '/public/assets/parthiv.png';
import pra from '/public/assets/pra.png';
import pavan from '/public/assets/pavan1.png';
import aashima from '/public/assets/112233.jpg';
import anand from '/public/assets/anan.png';
import sim from '/public/assets/sim.png';
import harish from '/public/assets/harisha.jpg'
import sai from '/public/assets/saisai.png'
import hari from '/public/assets/harih.jpg'
import sakshi from '/public/assets/saksh.png'
import './WhyTrustUs.css'; 
import Image from "next/image";

const testimonials = [
  {
    title: 'BOE at EMP Monitor',
    text: `“During this intensive program, <span class="highlightt">I gained valuable knowledge and hands-on experience in various aspects of cybersecurity.</span> One of the highlights of my internship was working on an individual minor project where I had the opportunity to deal with a machine and identify vulnerabilities.”`,
    name: 'Parthiv Kumar',
    role: 'Cybersecurity',
    image: userImg,
  },
  {
    title: 'Software Engineer at Yello',
    text: `“I recently completed a rewarding internship at Skipperx, where I had the opportunity to delve deeply into the field of Machine Learning over a period of two months. This, <span class="highlightt">experience allowed me to enhance my technical skills.</span> and gain practical insights into machine learning algorithms and applications.”`,
    name: 'Prabash Tankalan',
    role: 'Web development course',
    image: pra,
  },
  {
    title: 'Researcher at ITC Limited',
    text: `”This journey has been rewarding, providing me with invaluable skills and insights that I am eager to apply in my professional endeavors. <span class="highlightt">The experience has not only enhanced my expertise but also fueled my excitement for the future.</span> Deeply grateful for the support, and encouragement from my mentors.”`,
    name: 'Pavan Kumar R.V',
    role: 'Genetic Engineering',
    image: pavan,
  },
  {
    title: 'Marketing Executive at Volopay',
    text: `“ I'm happy to share with you all that I completed my <span class="highlightt">internship at Skipperx, as a Marketing Intern in the past 4 weeks.</span> During the intern period I got to learn how to built a strong networking and create posts for the same.Truly thankful for the guidance and encouragement from my mentors.”`,
    name: 'Aashi Makhija',
    role: 'Marketing',
    image: aashima,
  },
  {
    title: 'Flutter Developer at Doppio',
    text: `<span class="highlightt">“I had the best experience with Skipperx at every stage of placement and interviews. </span>They conducted mock interviews for me and that helped me actually sit confidently for the real interviews. The entire team was vert supportive.I’m incredibly thankful for the mentorship and encouragement.”`,
    name: 'Anand Sundarmoorthy',
    role: 'Flutter development',
    image: anand,
  },
  {
    title: 'Psychologist at Mann School',
    text: `<span class="highlightt">“Thank you, Skipperx, for providing such a valuable opportunity .</span> Abin B sir, your guidance and expertise were instrumental in my learning journey. I deeply appreciate the knowledge gained and look forward to applying it in our future endeavors and appreciate the support and motivations.”`,
    name: 'Simran Yaseen',
    role: 'Psychology',
    image: sim,
  },
];

const WhyTrustUs = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const goNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Handle touch events for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) goNext();
    if (isRightSwipe) goPrev();
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(goNext, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  const getClass = (i) => {
    if (isMobile) {
      return i === index ? 'card active' : 'card';
    }
    
    if (i === index) return 'card active';
    if (i === (index + 1) % testimonials.length) return 'card next';
    if (i === (index - 1 + testimonials.length) % testimonials.length) return 'card prev';
    return 'card';
  };

  return (
    <div className="trust-container">
      <div className="trust-header">
        <hr className="leftt"/>
        <h2>Why You Should <span>Trust</span> Us</h2>
        <hr className="rightt"/>
      </div>
      <p className="trust-subtext">Honest reviews from those who’ve lived it—our learners say it best.</p>

      <div
        className="trust-carousel-wrapper"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="trust-carousel">
          {testimonials.map((t, i) => (
            <div className={getClass(i)} key={i}>
              <h3>{t.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: t.text }} />
              <div className="trust-authorr">
                <Image src={t.image} alt={t.name} />
                <div>
                  <strong>{t.name}</strong>
                  <p className="pp">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="trust-arrows">
          <button onClick={goPrev}>&#10094;</button>
          <button onClick={goNext}>&#10095;</button>
        </div>
        
        {isMobile && (
          <div className="trust-indicators">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`indicator ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="trust-footer">
        <p>Join 80,000+ Learners who’ve transformed their careers</p>
        <div className="avatars">
          <Image src={harish} alt="avatar" />
          <Image src={hari} alt="avatar" />
          <Image src={sakshi} alt="avatar" />
          <Image src={sai} alt="avatar" />
          <span>+50,000 more</span>
        </div>
      </div>
    </div>
  );
};

export default WhyTrustUs;
