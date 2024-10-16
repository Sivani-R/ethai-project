
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">EthAi</div>
      <nav className="header-nav">
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href='#whyus'>Why Us</a></li>
          <li><a href="#tokenomics">Tokenomics</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <button className='login-btn'>Login</button>
        <button className="whitepaper-btn">Whitepaper</button>
      </div>
    </header>
  );
};

export default Header;
