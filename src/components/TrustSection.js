'use client';
import Image from 'next/image';
import './TrustSection.css'; // Assuming you have a CSS file for styles
import googleEd from '/public/assets/google-edu.png';
import nsdc from '/public/assets/nsdc.png';
import skillIndia from '/public/assets/skill-india.png';
import startupIndia from '/public/assets/startup-india.png';

const partners = [skillIndia, nsdc, startupIndia, googleEd];
  

const people = [
  { name: 'Ashish Singhal', logo: 'Deloitte-.png', img: 'ashish.png' },
  { name: 'Ahmad Nabeel', logo: 'bidgelyy.png', img: 'ahmad.png' },
  { name: 'Ashi Malik', logo: 'apple.png', img: 'ashi.png' },
  { name: 'Sanchit', logo: 'dpp.png', img: 'sanchit.png' },
  { name: 'Shreyansh', logo: 'wal.png', img: 'shreyansh.png' },
  { name: 'Anurag Sinha',  logo: 'er.png', img: 'anurag.png' },
  { name: 'Varun Acharya', logo: 'subex.png', img: 'varun.png' },
  { name: 'Shivansh Singh', logo: 'cgii.png', img: 'aashii.png' },
  { name: 'Ishan Acharya', logo: 'dicee.png', img: 'ishann.png' },
  { name: 'Rohit Pal', logo: 'game.png', img: 'rohitt.png' },
  { name: 'Deepak Kumar', logo: 'bidgelyy.png', img: 'deepakk.png' }
];

const TrustSection = () => {
  return (
    <div className="trust-wrapper">
      <h4 className="accredited-text">We are <em>accredited</em> by</h4>
      <div className="logo-row">
        {partners.map((logo, idx) => (
          <Image 
            key={idx} 
            src={logo} 
            alt="logo" 
            className="partner-logo"
            width={120}
            height={60}
          />
        ))}
      </div>

      <div className="trust-box">
        <h2>
          Trusted by <span className="highlight">12,000+</span> Builders, Doers & Innovators
        </h2>
        <p className='tp'>who chose Skipper to upskill, pivot, and lead in the modern workplace.</p>

        <div className="trust-stats">
          <div><strong>4.8 ⭐</strong><br />Google Rating</div>
          <div><strong>👥 50K+</strong><br />Mentees Trained</div>
          <div><strong>🔁 42%</strong><br />Career Switchers</div>
        </div>

        <div className="people-scroll-wrapper">
          <div className="scroll-track">
            <div className="people-grid">
              {[...Array(10)].flatMap(() => people).map((person, i) => (
                <div key={i} className="person-card">
                  <Image 
                    src={`/assets/${person.img}`} 
                    alt={person.name} 
                    width={100}
                    height={100}
                  />
                  <p className='size'>{person.name}</p>
                  <Image
                    src={`/assets/${person.logo}`}
                    alt="Company Logo"
                    className="company-logo"
                    width={80}
                    height={40}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
