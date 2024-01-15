import React, { useState, useEffect, useNavigate } from 'react';
import './Footer.css';
import emailBlack from './emailBlack.png';
import githubBlack from './githubBlack.png';
import linkedinBlack from './linkedinBlack.png';
import resume from './resume.png';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollHeight - scrollTop === clientHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  
  return (
    <div id="footer" className={`fixed-bottom ${showFooter ? 'd-block' : 'd-none'}`}>
      <div className="footerContent">
        <div className="copyWrite">
          &copy; {new Date().getFullYear()} Copyright:{'\u00A0'}
          <a> All rights reserved. Website designed by Sandy Solaqa</a>
        </div>
      </div>

      <div className="footerContent">
        <div className='socialIcons'>
          <a className='title' href='https://github.com/SandroSolaqa'>
            <img src={githubBlack} alt='github' width="40" height="40" />
          </a>

          <a className='title' href="mailto:sandysolaqa11@gmail.com">
            <img src={emailBlack} alt='gmail' width="40" height="40" />
          </a>

          <a className='title' href='https://www.linkedin.com/in/sandrosolaqa/'>
            <img src={linkedinBlack} alt='linkedin' width="40" height="40" />
          </a>

          <button className="title"  > Resume</button>

        </div>
      </div>

      <a className="returnBtn" onClick={scrollToTop}>
        <div className="arrow"></div>
      </a>
    </div>
  );
};

export default Footer;
