
import React from 'react';
import './AboutEthAi.css';

const AboutEthAi = () => {
  return (
    <div className="about-container">
      <h2>About EthAi</h2>
      <p className='about-para'>
        At EthAi, we're all about making crypto trading easier and more intuitive. 
        We provide tools that help traders keep up with all new market trends, track top traders' movements.
      </p>
      <button className="read-more-button">Read more</button>

      <div className="content-box">
       <div className='firstrow'>
        <div className="info-section">
          <h3>Stay Ahead</h3>
          <p className='para'>No more guesswork—get clear, trustable insights.</p>
        </div>
        <div className="info-section">
          <h3>Know Your Assets</h3>
          <p className='para'>Always stay on top of how your investments are performing.</p>
        </div>
       </div>
       <div className='secondrow'>
        <div className="info-section">
          <h3>Simple, Not Overwhelming</h3>
          <p className='para'>Our tools are designed to make complex market analysis easy to understand and act on.</p>
        </div>
        <div className="info-section">
          <h3>Future-Proof</h3>
          <p className='para'>We're constantly improving, adding new features to help you make informed decisions.</p>
        </div>
       </div>
      </div>
    </div>
  );
}


export default AboutEthAi;
