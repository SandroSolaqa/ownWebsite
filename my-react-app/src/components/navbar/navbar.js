


// import React, { useEffect } from 'react';
// import './navbar.css';
// import navImg from './navImg.png';
// // import { useNavigate } from 'react-router-dom';

// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios'
// // import logo2 from './logo2.jpeg';


// function Navbar() {
//   useEffect(() => {
//     const pathname = window.location.pathname;
//     const navLinks = document.querySelectorAll('.nav-link');
//     navLinks.forEach((link) => {
//       if (link.getAttribute('href') === pathname) {
//         link.classList.add('active');
//       } else {
//         link.classList.remove('active');
//       }
//     });
//   }, []);

//   // const navigate = useNavigate();
//   // const handleLogout = async () => {
//   //   try {
//   //     const response = await axios.post('http://127.0.0.1:8000/sdei/logout/');
//   //     // Redirect or perform other actions after logout
//   //     console.log('logout success:', response.data);
//   //     navigate('/Account');
//   //   } catch (error) {
//   //     console.error('Error logging out:', error);
//   //   }
//   // };
  
//   return (
//     <nav className='navbar'>
//       <div className='navbar-container'>
//         <div className="flex-container">
//           <a className="navbar-img">
//             <img src={navImg} alt='logo' className="rounded" width="90" height="80" />
//           </a>
//           <a className="nav-link" href="/Home">Home</a>
//           <a className="nav-link" href="/About">About</a>
//           <a className="nav-link" href="/Projects">Projects</a>
//           <a className="nav-link" href="/Resume">Resume</a>
//           <a className="nav-link" href="/Contacts">Contacts</a>
          
//         </div>
//       </div>
//     </nav>
//   );
// }
// Assuming this is in /path/to/Navbar.js
// import React, { useState } from 'react';
// import './navbar.css';

// // Rename to Navbar to follow React component naming conventions
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="hamburger-navbar">
//       <button className="hamburger-icon" onClick={toggleNavbar}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </button>
//       <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
//         <a href="#home">Home</a>
//         <a href="#services">Services</a>
//         <a href="#about">About</a>
//         <a href="#contact">Contact</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// function navbar() {
//   const navLinkStyle = { color: '#ff0000', fontSize: '1.rem' }; // Custom style for navigation links

//   return (
//     <div style={{ background: 'white', padding: '20px', color: 'black' }}>
//       <Navbar bg="white" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="/home" style={{ color: '#ff0000', fontSize: '2.0rem', marginRight: 'auto' }}>
//           <img
//               src={logo}
//               alt="Logo"
//               style={{ width: '50px', height: '50px', marginRight: '10px' }} // Adjust the size as needed
//             />
//             Sandy Solaqa
//           </Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="/home" style={navLinkStyle}>
//               Home
//             </Nav.Link>
//             <Nav.Link href="/About" style={navLinkStyle}>
//               About
//             </Nav.Link>
//             <Nav.Link href="/Projects" style={navLinkStyle}>
//               Projects
//             </Nav.Link>
//             <Nav.Link href="/Resume" style={navLinkStyle}>
//               Resume
//             </Nav.Link>
//             <Nav.Link href="/Contacts" style={navLinkStyle}>
//               Contacts
//             </Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default navbar;

import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#food">Resume</a></li>
            <li><a href="#food-menu">Projects</a></li>
            {/* <li><a href="#testimonials">Testimonial</a></li> */}
            <li><a href="#contact">Contact</a></li>
          </ul>
          <h1 className="logo">SS</h1>
        </div>
      </nav>
   
  );
}

export default Navbar;
