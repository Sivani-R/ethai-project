
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="logo">
          <h2>EthAi</h2>
        </div>
        <div className="social-icons">
          <a href="#telegram"><img src="https://img.freepik.com/free-psd/realistic-3d-square-with-telegram-logo_125540-2646.jpg?t=st=1729075695~exp=1729079295~hmac=397f9ffca041fe87449c62134065b87d13a0b1708c809e9fa06beec0f4d8fb98&w=826" alt="Telegram" /></a>
          <a href="#instagram"><img src="https://img.freepik.com/free-psd/3d-square-with-instagram-logo_125540-1566.jpg?t=st=1729075909~exp=1729079509~hmac=c942332803977aa5f853f75f84e5576fe0be385af5ccd337adcf9dbb522744d6&w=826" alt="Instagram" /></a>
          <a href="#x"><img src="https://img.freepik.com/free-psd/black-white-diagonal-square-twitter-logo-isolated-transparent-background_125540-3686.jpg?t=st=1729075827~exp=1729079427~hmac=8a003b6f13309b4f48829cdb038dd25633b5f6a1233a3657b431d5ef8130b96e&w=826" alt="X" /></a>
          <a href="#facebook"><img src="https://img.freepik.com/free-psd/3d-square-with-facebook-logo_125540-1565.jpg?t=st=1729075573~exp=1729079173~hmac=e845a4cef42294ec6cb3d6a0e705b5c76787360b388e458cc2e2e306bd03acf8&w=826" alt="Facebook" /></a>
          <a href="#discord"><img src="https://img.freepik.com/premium-psd/glowing-discord-logo-realistic-3d-circle-png_1073073-401.jpg?w=740" alt="Discord" /></a>
        </div>
      </div>
      
      <div className="footer-right">
        <blockquote>
          “Designed for traders of today, just like you.”
        </blockquote>
        <div className="email-form">
          <input type="email" placeholder="What's your work email?" />
          <button>Get Started</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
