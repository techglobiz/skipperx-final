"use client";

import React, { useState, useEffect, useRef } from "react";
import "./SkippersAdvantage.css"; 
import Image from "next/image";

import group1 from "/public/assets/GROUP1.png";
import group4 from "/public/assets/GROUP2.png";
import group2 from "/public/assets/GROUP3.png";  
import group3 from "/public/assets/GROUP4.png";

const cards = [
  {
    label: "Live Classes",
    title: "Learn Skills That Actually Matter",
    desc: "Live sessions. No fluff.",
    image: group1,
    className: "card-1",
  },
  {
    label: "Community",
    title: "Built-In Hype Squad",
    desc: "Learn with your people.",
    image: group2,
    className: "card-2",
  },
  {
    label: "Certification",
    title: "Flex Real Cred",
    desc: "Not lame. Just legit.",
    image: group3,
    className: "card-3",
  },
  {
    label: "Portfolio",
    title: "Projects That Show You’re Not Just Talk",
    desc: "Stuff you can actually show off.",
    image: group4,
    className: "card-4",
  },
];

const SkippersAdvantage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const slideRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };
  return (
    <section className="skippers-section">
      <div className="header-line">
        <div className="le" />
        <h2>Get the <span className="highlight">Skippers</span> Advantage</h2>
        <div className="rig" />
      </div>
      <div className="subtitle">
        Unlock real-world learning, mentor guidance, and a career-ready portfolio.
      </div>

      {isMobile ? (
        <div className="mobile-slider">
          <div 
            className="slider-container"
            ref={slideRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.3s ease-in-out'
            }}
          >
            {cards.map((card, idx) => (
              <div className={`advantage-card mobile-slide ${card.className}`} key={idx}>
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  className="card-bg"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="overlayy" />
                <div className="badge">{card.label}</div>
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="slider-dots">
            {cards.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          <div className="slider-nav">
            <button 
              className="nav-btn prev" 
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button 
              className="nav-btn next" 
              onClick={nextSlide}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>
      ) : (
        <div className="grid">
          {cards.map((card, idx) => (
            <div className={`advantage-card ${card.className}`} key={idx}>
              <Image 
                src={card.image} 
                alt={card.title} 
                className="card-bg"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="overlayy" />
              <div className="badge">{card.label}</div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SkippersAdvantage;
