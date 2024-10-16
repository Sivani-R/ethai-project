import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
   return (
     <div className='container'>
        <div className='explore-container'>
           <h1 className='heading'>Explore Our <span className='dApp-text'>dApp</span></h1>
           <p className='para'>EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions.
              By tracking smart money flows, monitoring key wallets, and providing real-time market 
              insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI 
                features for asset recommendations, market analysis, and personalized crypto Q&A,
                    making it the ultimate tool for both novice and experienced traders.  
           </p>
           <button className='button'>Open dApp</button>
        </div>
     </div>
   )
}
export default WhyUs;