"use client";
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from "react";
import './TestimonialCarousel.css'; // Assuming you have a CSS file for styles
import testimonials from "./testimonialData";
import hari from '/public/assets/harih.jpg';
import navya from '/public/assets/navya.png';
import sai from '/public/assets/sai.jpg';
import sakshi from '/public/assets/saksh.png';


const TestimonialCarousel = () => {
  const [index, setIndex] = useState(1); // Start from first real slide
  const [transition, setTransition] = useState(true);
  const isHovered = useRef(false);
  const intervalRef = useRef(null);

  const length = testimonials.length;
  const extendedSlides = [testimonials[length - 1], ...testimonials, testimonials[0]];

  // Safely update index
  const nextSlide = () => {
    setIndex((prev) => Math.min(prev + 1, length + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  // Prevent auto-play overflow
  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      if (!isHovered.current) {
        setIndex((prev) => {
          const next = prev + 1;
          return next > length + 1 ? length + 1 : next;
        });
      }
    }, 3000);
  }, [length]);

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleTransitionEnd = () => {
    if (index === length + 1) {
      setTransition(false);
      setIndex(1);
    } else if (index === 0) {
      setTransition(false);
      setIndex(length);
    }
  };

  useEffect(() => {
    if (!transition) {
      const id = setTimeout(() => setTransition(true), 30);
      return () => clearTimeout(id);
    }
  }, [transition]);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay]);

  // Optional: Debug logs
  useEffect(() => {
    console.log("Current index:", index, "Transition:", transition);
  }, [index, transition]);

  // Clamp render index to avoid visual glitch
  const safeIndex = Math.max(0, Math.min(index, length + 1));

  return (
    <section className="carousel-container">

      {/* <h2 className='cartitle'>Approved by the Ones Who Built the <span>Best </span> </h2> */}

      <h2 className='cartitle'>
        <span className="lefttt" /> Approved by the Ones Who Built the{" "}
        <span className="highlight">Best</span>{" "}
        <span className="righttt" />
      </h2>

      <p className="subtitle">Not Just Students – Leaders Learn from Us Too</p>

      <div
        className="carousel-wrapper"
        onMouseEnter={() => {
          isHovered.current = true;
          stopAutoPlay();
        }}
        onMouseLeave={() => {
          isHovered.current = false;
          startAutoPlay();
        }}
      >
        <button className="nav prev" onClick={prevSlide}>
          ‹
        </button>

        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${safeIndex * 100}%)`,
            transition: transition ? "transform 0.6s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((item, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-left"> 
                  <p className="best-member-since">MEMBER SINCE <strong>{item.year}</strong></p>
                  <p className="quote">“{item.quote}”</p>
                 
                  <div className="best-author">
                      <div className="best-name-logo">
                    <div className="best-name-text">
                       <p className="name">{item.name}</p>
                  <p className="position">{item.position} </p>
                    </div>
                  <div className="best-divider"></div>
                  <Image
                    src={`/assets/${item.logo}`}
                    alt={item.company}
                    className="company-logoo"
                    style={item.logoSize}
                    width={170}
                    height={65}
                  /> 
                   </div>
                    </div>
                </div>
                <div className="testimonial-right">
                  <Image
                    src={`/assets/${item.image}`}
                    alt={item.name}
                    className="person-img"
                    style={item.imageSize}
                    width={300}
                    height={350}
                  />
                </div>
              </div>


            
            
            
            
            
            
          ))}
        </div>

        <button className="nav next" onClick={nextSlide}>
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i + 1 ? "active" : ""}`}
            onClick={() => setIndex(i + 1)}
          ></span>
        ))}
      </div>

      <div className="trust-foter">
        <div className="avatars">
          <Image src={navya} alt="avatar" width={50} height={50} />
          <Image src={hari} alt="avatar" width={50} height={50} />
          <Image src={sakshi} alt="avatar" width={50} height={50} />
          <Image src={sai} alt="avatar" width={50} height={50} />
          <span>4K+ members have completed this program, be one of them</span>
        </div>
        <button className="avabtn">Explore Programs</button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
