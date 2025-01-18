import React from 'react';
import '../styles/FifthSection.scss';

const HerosectionFifth = () => {
  return (
    <div className="fifth-section-container">
      <div className="footer-container">
        <div className="newsletter-section">
          <h2>/-/</h2>
          <p>STAY UP TO DATE WITH PRODUCT UPDATES, LEARNING RESOURCES, AND MORE.</p>
          <div className="email-form">
            <input type="email" placeholder="YOUR EMAIL" className="email-input" />
            <button className="subscribe-btn">[ SUBSCRIBE ]</button>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="section-title">Tools & Infrastructure</h3>
          <ul className="tree-list">
            <li className="tree-item"><a href="#" className="tree-link">Hiro Platform</a></li>
            <li className="tree-item"><a href="#" className="tree-link">Clarinet</a></li>
            <li className="tree-item"><a href="#" className="tree-link">Clarity VScode Extension</a></li>
            <li className="tree-item"><a href="#" className="tree-link">Stacks.js</a></li>
            <li className="tree-item"><a href="#" className="tree-link">Stacks Blockchain API</a></li>
            <li className="tree-item"><a href="#" className="tree-link">Token Metadata API</a></li>
            <li className="tree-item"><a href="#" className="tree-link">Ordinals API</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="section-title">Build</h3>
          <ul className="tree-list">
            <li className="tree-item"><a href="#" className="tree-link">Documentation</a></li>
            <li className="tree-item"><a href="#" className="tree-link">Guides</a></li>
            <li className="tree-item"><a href="#" className="tree-link">Clarity Playground</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="section-title">Company</h3>
          <ul className="tree-list">
            <li className="tree-item">
              <a href="#" className="tree-link">Careers</a>
              <span className="highlight"># We're hiring</span>
            </li>
            <li className="tree-item"><a href="#" className="tree-link">About us</a></li>
            <li className="tree-item"><a href="#" className="tree-link">Press</a></li>
            <li className="tree-item"><a href="#" className="tree-link">Bounty program</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="section-title">Social</h3>
          <ul className="tree-list">
            <li className="tree-item"><a href="#" className="tree-link">X</a></li>
            <li className="tree-item"><a href="#" className="tree-link">Join Discord</a></li>
            <li className="tree-item"><a href="#" className="tree-link">GitHub</a></li>
            <li className="tree-item"><a href="#" className="tree-link">YouTube</a></li>
            <li className="tree-item"><a href="#" className="tree-link">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HerosectionFifth;
