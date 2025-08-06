'use client';
import Image from 'next/image';
import './About.css';

const teamMembers = [
  { name: "Pratyush Singh", position: "Software Engineer", image: "/assets/about-beyond.png", className: "member-card1", quote: "Building scalable web solutions" },
  { name: "Sakshi Gupta", position: "Product Designer", image: "/assets/sakshi-about.png", className: "member-card2", quote: "Building scalable web solutions"},
  { name: "Ravi Kumar", position: "Frontend Developer", image: "/assets/about-beyond.png", className: "member-card3", quote: "Building scalable web solutions"},
  { name: "Anjali Mehta", position: "Backend Developer", image: "/assets/about-beyond.png", className: "member-card4", quote: "Building scalable web solutions"},
  { name: "Vikas Sharma", position: "Data Scientist", image: "/assets/about-beyond.png", className: "member-card5", quote: "Building scalable web solutions"},
  { name: "Neha Verma", position: "UI/UX Designer", image: "/assets/Hari.jpg", className: "member-card6", quote: "Building scalable web solutions"},
  { name: "Pratyush Singh", position: "Software Engineer", image: "/assets/about-beyond.png", className: "member-card1", quote: "Building scalable web solutions"},
  { name: "Sakshi Gupta", position: "Product Designer", image: "/assets/sakshi-about.png", className: "member-card2", quote: "Building scalable web solutions"},
  { name: "Ravi Kumar", position: "Frontend Developer", image: "/assets/about-beyond.png", className: "member-card3", quote: "Building scalable web solutions"},
  { name: "Anjali Mehta", position: "Backend Developer", image: "/assets/about-beyond.png", className: "member-card4", quote: "Building scalable web solutions"},
  { name: "Vikas Sharma", position: "Data Scientist", image: "/assets/about-beyond.png", className: "member-card5", quote: "Building scalable web solutions"},
  { name: "Neha Verma", position: "UI/UX Designer", image: "/assets/Hari.jpg", className: "member-card6", quote: "Building scalable web solutions"},
  { name: "Vikas Sharma", position: "Data Scientist", image: "/assets/about-beyond.png", className: "member-card5", quote: "Building scalable web solutions"},
  { name: "Neha Verma", position: "UI/UX Designer", image: "/assets/Hari.jpg", className: "member-card6", quote: "Building scalable web solutions"},
  { name: "Pratyush Singh", position: "Software Engineer", image: "/assets/about-beyond.png", className: "member-card1", quote: "Building scalable web solutions"},
];

const founders = [
  { name: "Himanshu Singh", role: "Co-Founder & CMO", image: "/assets/founder1.png" },
  { name: "Sourav Kamboj", role: "Co-Founder and CEO", image: "/assets/founder1.png" },
  { name: "Vivek Agarwal", role: "Co-Founder and COO", image: "/assets/founder1.png" },
  { name: "Hemanth Ingle", role: "Co-Founder and VP", image: "/assets/founder1.png" },
];

const About = () => {
  return (
    <>
      <div className="about-hero-section" style={{ backgroundImage: `url(/assets/about-hero.png)` }}>
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">
            They Came with Curiosity, We Gave <br /> Them Real Skills
          </h1>
          <p className="about-hero-subtitle">
            Training future pros who actually get hired
          </p>
          <button className="about-hero-btn">Explore Programs</button>
        </div>
      </div>

      <div className="about-quote-section">
        <div className="about-quote-content">
          <div className="quote-icon">❝</div>
          <p className="quote-text">
            We started SkipperX with one simple belief — that real-world tech skills should be accessible to every curious mind, not just a privileged few.
          </p>
          <p className="sub-quote">
            They Asked for More Than Lectures. So We Built SkipperX.
          </p>
          <hr className="divider" />
          <p className="highlight-text-about">
            SkipperX is highly recommended for students, working professionals, and entrepreneurs who are eager to master emerging technologies and build career-defining projects.
          </p>

          <div className="founders-list">
            {founders.map((founder, i) => (
              <div className="founder-card" key={i}>
                <Image src={founder.image} alt={founder.name} width={60} height={60} />
                <h4>{founder.name}</h4>
                <span>{founder.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-mission-vision">
        <div className="mission-card">
          <Image src="/assets/missionImg.png" alt="Mission" className="mv-image" width={500} height={300} />
          <div className="mv-content">
            <div className="mv-heading">MISSION</div>
            <p>
              Our mission is to deliver high-impact programs that teach 
              the skills the world is hiring for—across tech, business, and 
              innovation. 
            </p>
            <p> We&apos;re here to help you upgrade your career, break into 
              new roles, or build something of your own.
            </p>
            <p>
              With every learner, our goal is clear: help 60–70% of them 
              land better jobs, launch companies, or grow into leadership 
              roles—faster, smarter, and with confidence.
            </p>
          </div>
        </div>

        <div className="vision-card">
          <Image src="/assets/visionImg.png" alt="Vision" className="mv-image" width={500} height={300} />
          <div className="mv-content2">
            <div className="mv-heading">VISION</div>
            <p>
              At SkipperX, we&apos;re building the most powerful career launchpad for 
              ambitious professionals.
            </p>
            <p>
              Our vision is to create a new standard of upskilling—where learners 
              don&apos;t just learn, they transform.
            </p>
            <p>
              Whether it&apos;s landing top roles, switching industries, or launching 
              startups, we exist to help people take the leap with skills that 
              actually move the needle.
            </p>
          </div>
        </div>
      </div>

      <div className="people-section">
        <div className="people-header">
          <hr className="gallery-line1" />
          <h2 className="gallery-heading">The People behind<span className="highlight-about"> SkipperX</span></h2>
          <hr className="gallery-line2" />
        </div>
        <p className="subtitle">
          Insights from those who&apos;ve walked the path you&apos;re about to take.
        </p>

        <div className="people-grid1">
          {teamMembers.map((member, index) => (
            <div className={`people-card ${member.className}`} key={index}>
              <Image src={member.image} alt={member.name} className="people-img" width={156} height={136} />
              <div className="people-info">
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
              <div className="hover-overlay">{member.quote}</div>
            </div>
          ))}

          <div className="people-card join-card">
            <p>You Can be one of them</p>
            <button className="join-btn">Join Our Team</button>
          </div>
        </div>
      </div>

      <div className="skipperx-gallery">
        <div className="skipperx-gallery-title">
          <hr className="gallery-line1" />
          <h2 className="gallery-heading">Here&apos;s what SkipperX is all about</h2>
          <hr className="gallery-line2" />
        </div>
        <div className="skipperx-gallery-images">
          <div className="gallery-image-container">
            <Image src="/assets/about-last1.png" alt="Award Ceremony" width={500} height={300} />
          </div>
          <div className="gallery-image-container">
            <Image src="/assets/about-last2.png" alt="Training Session" width={500} height={300} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
