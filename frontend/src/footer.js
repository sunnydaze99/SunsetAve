import React from 'react';
import './styles/main.scss';
import InstagramIcon from './Assets/icons8-instagram.svg';
import TikTokIcon from './Assets/icons8-tiktok.svg';
import PinterestIcon from './Assets/icons8-pinterest.svg';



function Footer() {
  return (
    <footer className="footer">
      {/* First Column */}
      <div className="footer-column">
        <h3>Flowy, Vibrant, Beautiful</h3>
        <p>Discover timeless, flowy styles that bring the magic of sunsets to life. Perfect for every chic moment.</p>
        <div className="social-media">
          <a href="#instagram" aria-label="Instagram">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a href="#tiktok" aria-label="TikTok">
            <img src={TikTokIcon} alt="TikTok" />
          </a>
          <a href="#pinterest" aria-label="Pinterest">
            <img src={PinterestIcon} alt="Pinterest" />
          </a>
        </div>
      </div>

      {/* Second Column */}
      <div className="footer-column">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#faq">Reviews</a></li>
          <li><a href="#terms">Terms & Conditions</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Third Column */}
      <div className="footer-column">
        <h3>Sign Up for Our Newsletter</h3>
        <p>Be the first to know when new styles drop and elevate your wardrobe!</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </footer> 
    );
}

export default Footer;
