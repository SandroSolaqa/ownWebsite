// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import './App.css';
// import Home from './pages/pages/Home/Home';
// // import Navbar from './components/navbar/navbar';
// import Footer from './components/footer/Footer';
// import ContactInfo from './pages/pages/Contacts/Contacts';
// import Projects from './pages/pages/Projects/Projects';
// import Resume from './pages/pages/Resume/Resume';
// import About from './pages/pages/About/About';
// // import ColorSchemesExample from './components/navbar/navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from './components/navbar/navbar';

// function App() {
//   return (
//     <div className="page-row">
//       <Nav />
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div>
//                 {/* Use the Navigate component to redirect to the Home page */}
//                 <Navigate to="/Home" replace />
//               </div>
//             }
//           />
//           <Route
//             path="/Home"
//             element={
//               <div>
//                 <Home />
//               </div>
//             }
//           />
//           <Route
//             path="/About"
//             element={
//               <div>
//                 <About />
//               </div>
//             }
//           />
//           <Route
//             path="/Projects"
//             element={
//               <div>
//                 <Projects />
//               </div>
//             }
//           />
//           <Route
//             path="/Resume"
//             element={
//               <div>
//                 <Resume />
//               </div>
//             }
//           />
//           <Route
//             path="/Contacts"
//             element={
//               <div>
//                 <ContactInfo />
//               </div>
//             }
//           />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import MenuItem from './components/MenuItem/MenuItem'; // Import the MenuItem component
import sandy from './sandy.png';
import contact from './contact.png';
import youtube from "./youtube.jpeg";
import github from "./github.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import resume from './SandroSolaqaResume.pdf';

function App() {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');

    // Set the href attribute to the path of your resume file
    downloadLink.href = resume;

    // Set the download attribute with the desired filename for the user
    downloadLink.download = 'SandroSolaqaResume.pdf';

    // Append the link to the body
    document.body.appendChild(downloadLink);

    // Trigger a click on the link to start the download
    downloadLink.click();

    // Remove the link from the body
    document.body.removeChild(downloadLink);
  };



  return (
    <div className="App">
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

      <section className="showcase-area" id="showcase">
      <div className="showcase-container">
        <h1 class="main-title" id="home">WELCOME </h1>
        <br />
        <p>Hi, I'm Sandro Solaqa</p>
        {/* <a href="#food" class="btn btn-primary">My Resume</a> */}
      </div>

      {/* About Section */}
      </section>
      <section id="about">
      <div class="about-wrapper container">
        <div class="about-text">
          <p class="small">About Me</p>
          <h2>Computer Engineer - Full Stack - Software Engineer</h2>
          <p className="text-align">
            A highly skilled and innovative Computer Engineer with a strong foundation
            in hardware and software systems, I bring a comprehensive understanding of 
            computer architecture, programming languages, and system design. With a track     
            record of successful project management and an ability to thrive in dynamic 
            environments, I am well-equipped to contribute to the advancement of cutting-edge 
            technologies. My expertise spans from low-level hardware components to high-level 
            software applications, encompassing areas such as embedded systems, network protocols,
            and algorithm optimization. Possessing excellent problem-solving skills, I am adept at 
            identifying and resolving complex technical challenges. 
          </p>
          <p className="text-align">
            Sandy has a strong grasp of programming languages like C, C++, Matlab, HTML, CSS, JavaScript,
            Python. His expertise extends to utilizing tools like Git, Github, Jira, Docker, React, Django,
            Raspberry Pi, and FPGA, enabling him to create innovative solutions and explore the world of 
            software and hardware. Eager to learn and grow, he is constantly seeking new challenges to
            expand his knowledge and skills in the ever-evolving field of technology.
          </p>
        </div>
        <div class="about-img">
        <img src={sandy} alt="myPicture" />
        </div>
      </div>
      </section>


      {/* Resume Section  */}
      <section id="food">
        <div className="container">
        <div className="showcase-container">
          <h2>Resume</h2>
          <p>Please CLICK the Download button for a PDF version of my Resume.</p>
          <button className="btn btn-primary" onClick={handleDownload}>
            Download Resume
          </button>
          </div>
        </div>
      </section>


      {/* --------------projects section --------------*/}
      <section id="food-menu">
      <h2 class="food-menu-heading">Projects</h2>
      <div class="food-menu-container container">

        <div class="food-menu-item">
          <div class="food-description">
            <h2 class="food-titile">Project 1 - Energy Management Simulation Tool</h2>
            <p className="text-align">
            Web-based energy management tool sponsored by SDEI.
            The tool mimics a household environment where users
              with solar panels on their roofs can take advantage
               and store excesses of energy generated from the solar 
               into batteries, during times of low energy demand.
                This stored energy can be used when demand is high 
                to power their appliances rather than pulling power
                 from the grid in peak hours. The Tool intends to 
                 point out the benefits of the mPower whose main 
                 goal is to save users money on their electricity 
                 bill by giving them the option to convert any current
                  circuit breaker into a smart panel breaker.
                   The money-saving aspect relies on the mPower
                    module being able to automatically switch on or off circuits 
                    in the breaker box panel depending on the time of day via Bluetooth 
                    or automatically switch ON/OFF from a smart device.
            </p>

          <div>
            <a className='titleNew' href='https://www.youtube.com/watch?v=xBPSyRsAqNI'> 
              <img src={youtube} alt='youtube'/> 
            </a>
            <a className='titleNew' href='https://github.com/SandroSolaqa/SDEI-Simulation-Tool'> 
              <img src={github} alt='github'/> 
            </a>
            

            

          </div>
          </div>
        </div>
        


        <div class="food-menu-item">
          <div class="food-img">
          </div>
          <div class="food-description">
          
            <h2 class="food-titile">Project 2 - MovieMaze Web application</h2>
            <p className="text-align">
            This project makes use of a free live API, provides a big variety of movies that 
            cater to a wide range of tastes and inclinations. The user-friendly design allows 
            viewers to easily navigate an enormous selection of films from all genres. The 
            implementation of a safe and convenient login/signup system distinguishes our website.
            This tool not only increases user engagement but also gives a personalized experience
            by allowing users to establish profiles, maintain watchlists, and receive personalized
            suggestions. As we re imagine how viewers interact with movies, we remain committed
            to accessibility and user happiness. Join us on this cinematic journey where excitement
            meets simplicity, and film buffs meet audiences.
            </p>

          <div>
            <a className='titleNew' href='https://www.youtube.com/watch?v=Y_spczNSci4'> 
              <img src={youtube} alt='youtube'/> 
            </a>
            <a className='titleNew' href='https://github.com/SandroSolaqa'> 
              <img src={github} alt='github'/> 
            </a>
          </div>

          </div>
        </div>

        <div class="food-menu-item">
          <div class="food-description">
            <h2 class="food-titile">Project 3 - Digital Clock Timer</h2>
            <p className="text-align">
              Digital Clock Timer implemented in Verilog which is a Hardware Description Language (HDL).
              Also, I am using the Basys 3 – FPGA board to display the output using the seven-segment 
              that the board has. On the board, there are multiple buttons to control the time and a reset
              button to reset everything to zero. There will be an enable switch to start the timing when
              needed. A buzzer will sound when reaching certain time of the dedicated time. FPGA Board Figure
            </p>
            <a className='titleNew' href='https://www.youtube.com/watch?v=Y_spczNSci4'> 
              <img src={youtube} alt='youtube'/> 
            </a>
          </div>
        </div>

        <div class="food-menu-item">
          <div class="food-description">
            <h2 class="food-titile">Project 4 - Socket Programming</h2>
            <p className="text-align">
            A socket is a communication endpoint that can be used for sending and receiving data. 
            It provides a standard interface for network communication. Sockets are a process between 
            the programs running in the network. In other words, a process between the transport layer 
            and the application process.
            </p>
            <a className='titleNew' href='https://www.youtube.com/watch?v=A-Hui8NHdz8'> 
              <img src={youtube} alt='youtube'/> 
            </a>
          </div>
        </div>

        <div class="food-menu-item">
          <div class="food-description">
            <h2 class="food-titile">Project 5 - Snake Game</h2>
            <p className="text-align">
             Snake game is implemented by using stacks, pointers, 2D arrays, if-else statements and functions. 
             When you start the game, there will be a game option to select from the three options given. The first
             option allows you to play the game and the second option will display the rules and choosing the third 
             option will exit the game. When selecting the first option, the user is allowed to input two keys from 
             the keyboard, one at each time. The diagram below shows the two different 2D arrays, one for the snake 
             body and the other for the snake field. The snake can go through the walls to the other side without 
             stopping. The only way to terminate the snake and exit playing is when the snake eats its body by touching 
             it. The program compiled into C pseudocode for testing and brainstorming purposes to acquire a direction 
             for better advice on how to build up modules, and while the pseudo version is not comprehensive, it offered 
             a visual of the program's basis. Although this source contains a large number of methods, it provides specific
             game boundaries.
            </p>

            <a className='titleNew' href='https://www.youtube.com/watch?v=MXk0TQFI3jw&t=14s'> 
              <img src={youtube} alt='youtube'/> 
            </a>
            <a className='titleNew' href='https://github.com/SandroSolaqa/Snake-Game'> 
              <img src={github} alt='github'/> 
            </a>
          </div>
        </div>

        <div class="food-menu-item">
          <div class="food-description">
            <h2 class="food-titile"> More Projects - Embedded Programming</h2>
            <p className="text-align">
            Ckeckout my youtube channel for embedded progamming codded projects in C language such as Morse Code and many others.
            </p>

            <a className='titleNew' href='https://www.youtube.com/@codingforlife9604/videos'> 
              <img src={youtube} alt='youtube'/> 
            </a>

          </div>
        </div>

        <div class="food-menu-item">
          <div class="food-description">
            <h2 class="food-titile"> Volunteer Ongoing Project - Multimedia Engineer</h2>
            <p className="text-align">
             live multimedia system, leveraging a combination of tools to seamlessly record and broadcast programs through
             live streaming. The system has an audio engineering techniques to manage sound frequencies, utilizing decibel-reading 
             software to maintain optimal levels and prevent ear damage or audio distortion.
            </p>
          </div>
        </div>

      </div>
      </section>
      {/* <section id="testimonials">
      <h2 class="testimonial-title">What Our Customers Say</h2>
      <div class="testimonial-container container">
        <div class="testimonial-box">
          <div class="customer-detail">
            <div class="customer-photo">
              <img src="https://i.postimg.cc/5Nrw360Y/male-photo1.jpg" alt="" />
              <p class="customer-name">Ross Lee</p>
            </div>
          </div>
          <div class="star-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <p class="testimonial-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            voluptas cupiditate aspernatur odit doloribus non.
          </p>
         
        </div>
        <div class="testimonial-box">
          <div class="customer-detail">
            <div class="customer-photo">
              <img
                src="https://i.postimg.cc/sxd2xCD2/female-photo1.jpg"
                alt=""
              />
              <p class="customer-name">Amelia Watson</p>
            </div>
          </div>
          <div class="star-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <p class="testimonial-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            voluptas cupiditate aspernatur odit doloribus non.
          </p>
         
        </div>
        <div class="testimonial-box">
          <div class="customer-detail">
            <div class="customer-photo">
              <img src="https://i.postimg.cc/fy90qvkV/male-photo3.jpg" alt="" />
              <p class="customer-name">Ben Roy</p>
            </div>
          </div>
          <div class="star-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <p class="testimonial-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            voluptas cupiditate aspernatur odit doloribus non.
          </p>
         
        </div>
      </div>
      </section> */}
      <section id="contact">
      <div class="contact-container container">
        <div class="contact-img">
          <img src= {contact} alt="contactIMG" />
        </div>

        <div class="form-container">
          <h2>Contact Me</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <textarea
            cols="30"
            rows="6"
            placeholder="Type Your Message"
          ></textarea>
          <a href="#" class="btn btn-primary">Submit</a>
        </div>
      </div>
      </section>


      <footer className="footer">
  <div className="container">
    <div className="row">
      {/* <!-- Company Column --> */}
      <div className="footer-col">
        <h4>Select</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#food">Resume</a></li>
          <li><a href="#food-menu">Projects</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </div>

      {/* <!-- Email Column (Updated without style) --> */}
      <div className="footer-col">
        <h4>Email Me</h4>
        <ul>
          <li><a href="mailto:sandysolaqa11@gmail.com">sandro.solaqa@gmail.com</a></li>
        </ul>
      </div>

      {/* <!-- Phone Number Column --> */}
      <div className="footer-col">
        <h4>Call Me</h4>
        <ul>
          <li><a href="tel:6195589560"><i className="fa-solid fa-phone"></i> 619 558 9560</a></li>
        </ul>
      </div>

      {/* <!-- Social Media Column --> */}
      <div className="footer-col">
        <h4>Follow Me</h4>
        <div className="social-links">
            {/* <a href="#"><FontAwesomeIcon icon={faFacebook} /></a> */}
            {/* <a href="#"><FontAwesomeIcon icon={faGithub} /></a> */}
            <a href="https://github.com/SandroSolaqa" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /> </a>
            <a href="https://www.linkedin.com/in/sandrosolaqa/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /> </a>

        </div>

      </div>
    </div>
  </div>
</footer>



        {/* footer bottom  */}
        <div>
            <div className="footerBottom">
              <p>Copyright &copy;2024 - Website Designed by <span className = "designer"> Sandro Solaqa </span></p>
            </div>
        </div>

    </div>
  );
  
}

export default App;
