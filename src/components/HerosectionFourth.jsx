import React from 'react';
import '../styles/FourthSection.scss';

const HerosectionFourth = () => {
  return (
    <div className="fourth-section-container">
      <div className="fourth-hero-content">
        <h1 className="fourth-hero-title">Create Stunning Websites in VS Code</h1>
        <p className="fourth-hero-subtitle">
          Transform your development workflow with our powerful website builder extension. 
          Drag and drop components, use your favorite frameworks, and build faster than ever before.
        </p>
        <button className="fourth-cta-button">Install Extension</button>
      </div>
            
      <div className="fourth-editor-window">
        <div className="fourth-window-header">
          <div className="fourth-window-controls">
            <div className="fourth-control fourth-control-red"></div>
            <div className="fourth-control fourth-control-yellow"></div>
            <div className="fourth-control fourth-control-green"></div>
          </div>
          <div className="fourth-window-title">webistica</div>
        </div>
                
        <div className="fourth-editor-content">
          <div className="fourth-sidebar">
            <div className="fourth-icon fourth-active"></div>
            <div className="fourth-icon"></div>
            <div className="fourth-icon"></div>
            <div className="fourth-icon"></div>
          </div>
                    
          <div className="fourth-preview-area">
            <div className="fourth-component">Button</div>
            <div className="fourth-component">Card</div>
            <div className="fourth-component">Hero</div>
            <div className="fourth-component">Nav</div>
            <div className="fourth-component">Footer</div>
            <div className="fourth-component">Grid</div>
          </div>
        </div>
      </div>
            
      <div className="fourth-glow fourth-glow-1"></div>
      <div className="fourth-glow fourth-glow-2"></div>
    </div>
  );
};

export default HerosectionFourth;