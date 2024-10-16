
import React from 'react';
import Header from './Header';
import AboutEthAi from './AboutEthAi';
import Tokenomics from './Tokenomics';
import Roadmap from './Roadmap';
import WhyUs from './WhyUs';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <main>
       <div className="home-container">
          <h1>When Innovation Meets <span>Investment</span></h1>
          <p>Empowering Trading Through Advanced Technology</p>
       <button className="open-dapp-button">Open dApp</button>
       </div>
        <AboutEthAi />
        <Tokenomics />
        <Roadmap />
        <WhyUs />
        <Footer />
      </main>
    </>
  );
};

export default Home;
