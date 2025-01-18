import React, { useState, useRef, useEffect } from "react";
import { Scroll } from "@react-three/drei";
import "../App.css";  // Add this import
import "../styles/ThirdSection.scss";  // Add this import
import box1iconimage from "../assets/box1iconimage.png";
import box2iconimage from "../assets/box1iconimage2.png";
import box1iconimage3 from "../assets/box1iconimage3.png";
import box1iconimage4 from "../assets/box1iconimage4.png";
import box1iconimage5 from "../assets/box1iconimage5.png";
import box1iconimage6 from "../assets/box1iconimage6.png";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";

const HerosectionFirst = () => {
  return (
    <div className="HerosectionFirst_maincont">
      <div className="grid"></div>
      <div className="relative">
        <div className="content">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="none">
              <rect x="0.5" y="0.5" width="639" height="639" rx="11.5" fill="#0A0A0A"/>
              <rect x="0.5" y="0.5" width="639" height="639" rx="11.5" stroke="#262626"/>
              <path d="M460.179 320.4C460.179 295.68 457.419 274.32 451.899 256.32C446.619 238.08 438.459 221.64 427.419 207C416.619 192.36 401.979 176.88 383.499 160.56L398.979 144C420.099 161.04 437.259 177.84 450.459 194.4C463.899 210.96 474.099 229.44 481.059 249.84C488.259 270.24 491.859 293.76 491.859 320.4C491.859 347.04 488.259 370.56 481.059 390.96C474.099 411.36 463.899 429.84 450.459 446.4C437.259 462.96 420.099 479.76 398.979 496.8L383.499 480.24C401.739 463.92 416.259 448.44 427.059 433.8C438.099 418.92 446.379 402.48 451.899 384.48C457.419 366.24 460.179 344.88 460.179 320.4Z" fill="white"/>
              <path d="M181.68 320.4C181.68 344.88 184.44 366.24 189.96 384.48C195.48 402.48 203.64 418.92 214.44 433.8C225.48 448.44 240.12 463.92 258.36 480.24L242.88 496.8C221.76 479.76 204.48 462.96 191.04 446.4C177.84 429.84 167.64 411.36 160.44 390.96C153.48 370.56 150 347.04 150 320.4C150 293.76 153.48 270.24 160.44 249.84C167.64 229.44 177.84 210.96 191.04 194.4C204.48 177.84 221.76 161.04 242.88 144L258.36 160.56C239.88 176.88 225.12 192.36 214.08 207C203.28 221.64 195.12 238.08 189.6 256.32C184.32 274.32 181.68 295.68 181.68 320.4Z" fill="white"/>
            </svg>
            <span>Toolkit</span>
          </div>
          <h1 className="gradient-text">Code</h1>
          <h1 className="gradient-text">Faster then Ever</h1>
          <p>A library of ready-to-use components in minutes</p>
          <button className="btn">
            Start Building
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const HerosectionSecond = () => {
  const textRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          textRef.current.style.opacity = '1';
          textRef.current.style.transform = 'translateX(0)';
        } else {
          textRef.current.style.opacity = '0';
          textRef.current.style.transform = 'translateX(50px)';
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      text: "Scalable database model",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 5c0 1.1-2.9 2-6.5 2S8 6.1 8 5s2.9-2 6.5-2S21 3.9 21 5z"/>
        <path d="M21 12c0 1.1-2.9 2-6.5 2S8 13.1 8 12"/>
        <path d="M21 19c0 1.1-2.9 2-6.5 2S8 20.1 8 19"/>
        <path d="M3 5v14c0 1.1 2.9 2 6.5 2"/>
        <path d="M3 12V5"/>
        <path d="M3 19v-7"/>
      </svg>
    },
    {
      text: "Clean business logic",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3L3 12l9 9"/>
        <path d="M21 12H3"/>
        <path d="M12 3l9 9-9 9"/>
      </svg>
    },
    {
      text: "Well-crafted UI components",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    },
    {
      text: "Hooks and state management",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
        <path d="M10 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
        <path d="M18 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
        <path d="M10 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
      </svg>
    },
    {
      text: "Type-safe API routes",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 4L12 12l8 8"/>
        <path d="M4 4l8 8-8 8"/>
      </svg>
    }, {
      text: "Scalable database model",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 5c0 1.1-2.9 2-6.5 2S8 6.1 8 5s2.9-2 6.5-2S21 3.9 21 5z"/>
        <path d="M21 12c0 1.1-2.9 2-6.5 2S8 13.1 8 12"/>
        <path d="M21 19c0 1.1-2.9 2-6.5 2S8 20.1 8 19"/>
        <path d="M3 5v14c0 1.1 2.9 2 6.5 2"/>
        <path d="M3 12V5"/>
        <path d="M3 19v-7"/>
      </svg>
    },
    {
      text: "Clean business logic",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3L3 12l9 9"/>
        <path d="M21 12H3"/>
        <path d="M12 3l9 9-9 9"/>
      </svg>
    },
    {
      text: "Well-crafted UI components",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    },
    {
      text: "Hooks and state management",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
        <path d="M10 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
        <path d="M18 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
        <path d="M10 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
      </svg>
    },
    {
      text: "Type-safe API routes",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 4L12 12l8 8"/>
        <path d="M4 4l8 8-8 8"/>
      </svg>
    }
  ];

  return (
    <div className="second-section-container">
      <div className="card second-card">
        <div className="card-container">
          <div className="left-section">
            <h1 className="title">Waitlist Kit</h1>
            <p className="subtitle">Collect emails and get referrals for your product.</p>
            
            <ul className="features">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                Launch your waitlist in minutes, not days.
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                Grow faster with built-in referral system.
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                Track and manage signups in one place.
              </li>
            </ul>

            <div className="card-actions">
              <a href="#" className="button">
                Build your waitlist
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </a>

              <p className="tech-stack">
                TS · Prisma · Next.js · React · Shadcn/UI · Zod · React Query
              </p>
            </div>
          </div>

          <div className="right-section">
            <div className="scroll-container">
              <div className="scroll-content">
                {features.map((feature, index) => (
                  <div key={index} className="feature-card">
                    {feature.icon}
                    {feature.text}
                  </div>
                ))}
                {/* Duplicate set for seamless scrolling */}
                {features.map((feature, index) => (
                  <div key={`duplicate-${index}`} className="feature-card">
                    {feature.icon}
                    {feature.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HerosectionThird = () => {
  const toggleRef = useRef(null);
  
  const cards = [
    {
      text: "Scalable database model",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 5c0 1.1-2.9 2-6.5 2S8 6.1 8 5s2.9-2 6.5-2S21 3.9 21 5z"/>
        <path d="M21 12c0 1.1-2.9 2-6.5 2S8 13.1 8 12"/>
        <path d="M21 19c0 1.1-2.9 2-6.5 2S8 20.1 8 19"/>
        <path d="M3 5v14c0 1.1 2.9 2 6.5 2"/>
        <path d="M3 12V5"/>
        <path d="M3 19v-7"/>
      </svg>
    },
    {
      text: "Clean business logic",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3L3 12l9 9"/>
        <path d="M21 12H3"/>
        <path d="M12 3l9 9-9 9"/>
      </svg>
    },
    {
      text: "Well-crafted UI components",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    },
    {
      text: "Hooks and state management",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
        <path d="M10 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
        <path d="M18 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
        <path d="M10 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
      </svg>
    },
    {
      text: "Type-safe API routes",
      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 4L12 12l8 8"/>
        <path d="M4 4l8 8-8 8"/>
      </svg>
    }
  ];

  useEffect(() => {
    const toggleElement = toggleRef.current;
    if (toggleElement) {
      toggleElement.addEventListener('change', (e) => {
        document.body.classList.toggle('light', e.target.checked);
      });

      return () => {
        if (toggleElement) {
          toggleElement.removeEventListener('change', () => {});
        }
      };
    }
  }, []);

  return (
    <div className="third-section-container">
      <div className="grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <span className="icon">
              {card.icon}
            </span>
            <h4>{card.text}</h4>
            <p>Build scalable and maintainable applications with our well-structured components and tools.</p>
            <div className="shine"></div>
            <div className="background">
              <div className="tiles">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`tile tile-${i + 1}`}></div>
                ))}
              </div>
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
        ))}
      </div>
      {/* ...rest of code... */}
    </div>
  );
};

const Herosectionsixth = () => {
  return (
    <div className="Herosectionsixth_maincont">
      <h1 className="Herosectionsixth_maincont_h1">
        Achieve Your Goals <br /> with Altus Solutions
      </h1>
      <div className="Herosectionsixth_maincontent_cont">
        <div className="Herosectionsixth_maincontent_cont_uppermain">
          <div className="Herosectionsixth_maincontent_cont_uppermain_left">
            <h2 className="Herosectionsixth_maincontent_cont_h2">
              BOOST YOUR SUCCESS
            </h2>
            <p className="Herosectionsixth_maincontent_cont_p">
              An agency saved 3 million operational hours using GenAI. 
            </p>
            <p className="Herosectionsixth_maincontent_cont_psmall">
              Our intelligent solutions target unique challenges, enhance
              customer experiences, and fuel innovation, setting you apart in a
              competitive landscape.
            </p>
          </div>
          <div className="Herosectionsixth_maincontent_cont_uppermain_right">
            <h2 className="Herosectionsixth_maincontent_cont_h2">
              ADAPTIVE SCALABILITY
            </h2>
            <p className="Herosectionsixth_maincontent_cont_p">
              AI Tools that grow with you.
            </p>
            <p className="Herosectionsixth_maincontent_cont_psmall">
              We proactively ensure that your solutions meet new demands so as
              you grow, your processes and systems remain optimised—enabling
              confident and sustainable scaling.
            </p>
          </div>
        </div>
        <div className="Herosectionsixth_maincontent_cont_middlemain">
          <h2 className="Herosectionsixth_maincontent_cont_h2">
            EMPOWERED HUMAN <br /> CAPITAL
          </h2>
          <p className="Herosectionsixth_maincontent_cont_p">
            An agency saved 3 million operational hours using GenAI. 
          </p>
          <p className="Herosectionsixth_maincontent_cont_psmall">
            Ease frustrations, mitigate risks, and handle routine tasks,
            enabling your <br /> employees to focus on creativity, innovation,
            and high-value work— <br />
            leading to a more engaged, productive, and motivated workforce.
          </p>
        </div>
        <div className="Herosectionsixth_maincontent_cont_lowermain">
          <div className="Herosectionsixth_maincontent_cont_lowermain_left">
            <h2 className="Herosectionsixth_maincontent_cont_h2">
              MAX RESULTS, LOW OVERHEAD
            </h2>
            <p className="Herosectionsixth_maincontent_cont_p">
              Achieve more without heavy costs
            </p>
            <p className="Herosectionsixth_maincontent_cont_psmall">
              By optimising processes, we help you achieve peak performance
              while keeping operational expenses in check.
            </p>
          </div>
          <div className="Herosectionsixth_maincontent_cont_lowermain_right">
            <h2 className="Herosectionsixth_maincontent_cont_h2">
              BE A DIFFERENTIATOR
            </h2>
            <p className="Herosectionsixth_maincontent_cont_p">
              Stand out from the crowd.
            </p>
            <p className="Herosectionsixth_maincontent_cont_psmall">
              Our customised solutions enable you to offer distinctive
              capabilities that set you apart from competitors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Herosectionseventh = () => {
  return (
    <div className="Herosectionseventh_maincont">
      <h1 className="Herosectionseventh_maincont_h1">
        Partner with Us to <br />
        Realize Your Vision
      </h1>
      <div className="Herosectionseventh_maincont_content_cont">
        <div className="Herosectionseventh_maincont_content_cont_left">
          <p className="Herosectionseventh_maincont_content_cont_left_h2">
            EXPERTISE
          </p>
          <p className="Herosectionseventh_maincont_content_cont_left_h3">
            Years of experience, young creative minds, and passion for
            problem-solving and innovation.
          </p>
          <p className="Herosectionseventh_maincont_content_cont_left_p">
            With deep industry knowledge, a flare of creativity, experience, and
            a commitment to innovation, we don’t just offer technology—we
            partner and consult with you to unlock your business’s full
            potential by concisely identifying challenges, discerning room for
            improvements.
          </p>
        </div>
        <div className="Herosectionseventh_maincont_content_cont_middle">
          <div className="Herosectionseventh_maincont_content_cont_middleupper">
            <p className="Herosectionseventh_maincont_content_cont_left_h2">
              SEAMLESS INTEGRATION
            </p>
            <p className="Herosectionseventh_maincont_content_cont_left_h3">
              Resolve business problems smoothly and effortlessly.
            </p>
            <p className="Herosectionseventh_maincont_content_cont_left_p">
              Our solutions are designed to work harmoniously with your existing
              systems, minimising disruption and ensuring a quick and efficient
              transition.
            </p>
          </div>
          <div className="Herosectionseventh_maincont_content_cont_middlelower">
            <p className="Herosectionseventh_maincont_content_cont_left_h2">
              BESPOKE SOLUTIONS
            </p>
            <p className="Herosectionseventh_maincont_content_cont_left_h3">
              We solve your unique problems.
            </p>
            <p className="Herosectionseventh_maincont_content_cont_left_p">
              We collaborate closely with you to design and deliver customised
              solutions, ensuring that our AI tools are fine-tuned to address
              your unique business problems and requirements.
            </p>
          </div>
        </div>
        <div className="Herosectionseventh_maincont_content_cont_right">
          <p className="Herosectionseventh_maincont_content_cont_left_h2">
            PARTNERSHIP FOR LASTING IMPACT
          </p>
          <p className="Herosectionseventh_maincont_content_cont_left_h3">
            Your success is our priority, now and in the future.
          </p>
          <p className="Herosectionseventh_maincont_content_cont_left_p">
            e provide regular updates, ongoing support, and continuous
            optimisation to ensure your unique challenges are always addressed,
            and our AI solutions continue delivering value as your business
            grows.
          </p>
        </div>
      </div>
    </div>
  );
};

const AIFooter = () => (
  <div>
    <div className="Footer_maincontainer">
      <div className="Footer_content_container1">
        <h1 className="Footer_content_container1_h1">ALTUS</h1>
        <p>
          123 <br />
          Innovation <br />
          St, Tech City, <br />
          Country
        </p>
      </div>
      <div className="Footer_content_container2">
        <Link className="Footer_content_container2_link" to="#">
          Instagram
        </Link>
        <Link className="Footer_content_container2_link" to="#">
          Linkedin
        </Link>
        <Link className="Footer_content_container2_link" to="#">
          Whatsapp
        </Link>
        <div className="Footer_content_container2_emaildiv">
          <p className="Footer_content_container2_emaildiv_p">
            General inquiries
          </p>
          <span className="Footer_content_container2_emaildiv_span">
            support@example.com
          </span>
        </div>
        <div className="Footer_content_container2_emaildiv">
          <p className="Footer_content_container2_emaildiv_p">New business</p>
          <span className="Footer_content_container2_emaildiv_span">
            support@example.com
          </span>
        </div>
      </div>
      <div className="Footer_content_container3">
        <h1 className="Footer_content_container1_h1">
          Subscribe to <br /> our newsletter
        </h1>
        <div className="Footer_content_container1_inputcont">
          <input
            className="Footer_content_container1_input"
            placeholder="Your E-mail"
          />
          <span className="Footer_content_container1_span">
            <i className="bi bi-arrow-right"></i>
          </span>
        </div>
      </div>
    </div>
    <div className="FooterSub_container">
      <p className="FooterSub_container_p">
        2024 AI Solution. All rights reserved
      </p>
      <div className="FooterSub_container_right">
        <Link className="FooterSub_container_right_link" to="#">
          Terms and Conditions
        </Link>
        <Link className="FooterSub_container_right_link" to="#">
          Privacy Policy
        </Link>
      </div>
    </div>
  </div>
);

const LayoutOverlay = ({
  isVisible,
  toggleOverlay,
  handleaboutnavigate,
  handlehomenavigate,
  handleFrontendpagenavigate,
  handleBackendpagenavigate,
  handleContactusnavigate,
}) => {
  const overlayRef = useRef();

  React.useEffect(() => {
    if (isVisible) {
      gsap.to(overlayRef.current, {
        duration: 0.5,
        opacity: 1,
        x: 0,
        ease: "power2.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        duration: 0.5,
        opacity: 0,
        x: "-100%",
        ease: "power2.in",
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={overlayRef}
      className="layout-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        transform: "translateX(-100%)",
        opacity: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "300px 50px",
        zIndex: 1000,
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "none",
          color: "white",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
        }}
        onClick={toggleOverlay}
      >
        ✖
      </button>
      <div className="Menu_container_contentbox">
        <div className="Menu_container_contentbox_left">
          <button
            onClick={handlehomenavigate}
            className="Menu_container_contentbox_left_link"
          >
            Home
          </button>
          <button
            onClick={handleaboutnavigate}
            className="Menu_container_contentbox_left_link"
          >
            About Us
          </button>
          <button
            onClick={handleContactusnavigate}
            className="Menu_container_contentbox_left_link"
          >
            Contact Us
          </button>
        </div>
        <div className="Menu_container_contentbox_right">
          <button
            onClick={handleFrontendpagenavigate}
            className="Menu_container_contentbox_right_link"
          >
            AI ASSISTANT FOR CUSTOMER SUPPORT
          </button>
          <button
            onClick={handleBackendpagenavigate}
            className="Menu_container_contentbox_right_link"
          >
            AI WORKFORCE FOR BACKEND OPERATIONS
          </button>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const navigate = useNavigate();
  const handlehomenavigate = () => {
    navigate("/");
  };

  const handleaboutnavigate = () => {
    navigate("/Aboutus");
  };

  const handleFrontendpagenavigate = () => {
    navigate("/Frontend_AI");
  };

  const handleBackendpagenavigate = () => {
    navigate("/Frontend_AI");
  };

  const handleContactusnavigate = () => {
    navigate("/ContactUs");
  };

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  return (
    <Scroll html>
      <div className="Main_Layout_Container">
        <div className="Layout_section">
          <HerosectionFirst />
        </div>
        <div className="Layout_section">
          <HerosectionSecond />
        </div>
        <div className="Layout_section">
          <HerosectionThird />
        </div>
        <div className="Layout_section">
          {/* <HerosectionFourth /> */}
        </div>
        <div className="Layout_section">
          {/* <HerosectionFifth /> */}
        </div>
        <div className="Layout_section">
          <Herosectionsixth />
        </div>
        <div className="Layout_section">
          <Herosectionseventh />
        </div>
        {/* <AIFooter /> */}
        <LayoutOverlay
          isVisible={isOverlayVisible}
          toggleOverlay={toggleOverlay}
          handlehomenavigate={handlehomenavigate}
          handleaboutnavigate={handleaboutnavigate}
          handleFrontendpagenavigate={handleFrontendpagenavigate}
          handleBackendpagenavigate={handleBackendpagenavigate}
          handleContactusnavigate={handleContactusnavigate}
        />
        <button
          onClick={toggleOverlay}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: 900,
            background:
              "linear-gradient(131.19deg, #1c1c1c 1.42%, #292929 100.93%)",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          <i class="bi bi-menu-button-fill"></i>
        </button>
      </div>
    </Scroll>
  );
};

export default HeroSection;
