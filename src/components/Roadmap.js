
import React from 'react';
import './Roadmap.css';

const Roadmap = () => {
  return (
    <div className="roadmap-container">
      <div className="phase1">
        <div className="text-content">
          <button className="phase-button">PHASE 1</button>
          <h2>Kicking Off</h2>
          <ul className='points'>
            <li>Launch of EthAi: Officially</li>
            <li>Development of Core AI Agents</li>
            <li>User Onboarding Campaign</li>
            <li>Community Engagement Initiatives</li>
          </ul>
        </div>
        <div className="phase-image">
          <img src="https://img.freepik.com/free-photo/landmarks-modern-city_1359-338.jpg?t=st=1729062897~exp=1729066497~hmac=07d0f71506132612209e09e1f18ef2b89c9979a910e447ade371103a1296b1d1&w=900" alt="Phase 1" />
        </div>
      </div>
      <div className="phase2">
        <div className="phase-image">
          <img src="https://img.freepik.com/free-photo/low-angle-view-skyscrapers_1359-825.jpg?t=st=1729062964~exp=1729066564~hmac=031bc3e397bc4a5447407ddbe4cb83602e46bf7013edf0c6ed6feb8e6da4e36a&w=900" alt="Phase 2" />
        </div>
        <div className="text-content">
          <button className="phase-button">PHASE 2</button>
          <h2>Bigger Insights</h2>
          <ul className='points'>
            <li>Introduction of Advanced AI Agents</li>
            <li>Strategic Partnerships</li>
            <li>User Interface Optimization</li>
            <li>Comprehensive Marketing Campaign</li>
          </ul>
        </div>
      </div>
      <div className="phase1">
        <div className="text-content">
          <button className="phase-button">PHASE 3</button>
          <h2>Full Power</h2>
          <ul className='points'>
            <li>Introduction of Enhanced Features</li>
            <li>API Integration for Data Access</li>
            <li>Launch of Community-Driven Initiatives</li>
            <li>Continuous Improvement and Update</li>
          </ul>
        </div>
        <div className="phase-image">
          <img src="https://img.freepik.com/premium-photo/blue-window-with-blue-window-that-says-windows_1277297-37025.jpg?w=740" alt="Phase 3" />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;