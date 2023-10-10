import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const iconsize = 30 ;
  return (
    <footer className="container-fluid p-3 bg-dark">
      <div className="footer-content">
        <div className="social-icons text-center mb-2">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='mx-3'>
            <FaFacebook size={iconsize} color='grey'/>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className='mx-3'>
            <FaTwitter size={iconsize} color='grey' />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='mx-3'>
            <FaInstagram size={iconsize} color='grey' />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className='mx-3'>
            <FaLinkedin size={iconsize} color='grey' />
          </a>
        </div>
        <p className='text-center text-light'>&copy; 2023 SHOWCASE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
