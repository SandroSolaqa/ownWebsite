// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for SPA navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Select</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/resume">Resume</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contacts">Contacts</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Email Me</h4>
                        <ul>
                            <li><a href="mailto:sandysolaqa11@gmail.com">sandysolaqa11@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Call Me</h4>
                        <ul>
                            <li><a href="tel:6195589560">619 558 9560</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Me</h4>
                        <div className="social-links">
                            <a href="https://github.com/SandroSolaqa" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <a href="https://www.linkedin.com/in/sandrosolaqa/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <p>Copyright &copy;2024 - Website Designed by <span className="designer">Sandy Solaqa</span></p>
            </div>
        </footer>
    );
}

export default Footer;




// import React, { useState, useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Footer.css';
// import emailBlack from './emailBlack.png';
// import githubBlack from './githubBlack.png';
// import linkedinBlack from './linkedinBlack.png';
// import phoneBlack from './phone.png';

// const Footer = () => {
//   const [showFooter, setShowFooter] = useState(false);
//   let navigate = useNavigate();

//   useEffect(() => { 
//     const handleScroll = () => {
//       const scrollHeight = document.documentElement.scrollHeight;
//       const scrollTop = document.documentElement.scrollTop;
//       const clientHeight = document.documentElement.clientHeight;

//       if (scrollHeight - scrollTop === clientHeight) {
//         setShowFooter(true);
//       } else {
//         setShowFooter(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };


//   return (
//     <div id="footer" className={`fixed-bottom ${showFooter ? 'd-block' : 'd-none'}`}>
//       <div className="footerContent">
//         <div className="copyWrite">
//           &copy; {new Date().getFullYear()} Copyright:{'\u00A0'}
//           <a> All rights reserved. Website designed by Sandy Solaqa</a>
//         </div>
//       </div>

//       <div className="footerContent">
//         <div className='socialIcons'>

//           <a className='title' href='https://github.com/SandroSolaqa'>
//             <img src={githubBlack} alt='github' width="40" height="40" />
//           </a>

//           <a className='title' href="mailto:sandysolaqa11@gmail.com">
//             <img src={emailBlack} alt='gmail' width="40" height="40" />
//           </a>

//           <a className='title' href='https://www.linkedin.com/in/sandrosolaqa/'>
//             <img src={linkedinBlack} alt='linkedin' width="40" height="40" />
//           </a>

//           <button className="title" alt='Resume' width="40" height="40" onClick={() => {navigate("/Resume");}} > Resume </button>
//           <button className="title" alt= 'Call Me' width="45" height="40" onClick={() => {navigate("/Contacts");}} > Call Me </button>
//         </div>
//       </div>

//       <a className="returnBtn" onClick={scrollToTop}>
//         <div className="arrow"></div>
//       </a>
//     </div>
//   );
// };

// export default Footer;
