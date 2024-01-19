import React from 'react';
import './About.css';
import sandy from './sandy.png';
import linkedin from './linkedin.png';
import github from './github.png';
import emailWhite from './emailWhite.png';
// Import other images if needed

function About() {
  return (
    <div className="main">
      <div className="aboutContainer">
        <p className='aboutInfo'>
          Sandy Solaqa 
        </p>
        <div className='teamSDSU'>
          {/* <div className='gold-line'></div> */}
          <div className='team-member'>
            <div className='content'>
              <div className='left'>
                {/* Uncomment and import other team member images if needed */}
                {/* <img src={jacob} alt='jacob' width="175" height="175" /> */}
              </div>
              <div className='info'>
               <img src={sandy} alt='sandy' width="600" height="500" />
               
              <div >
                <a className='title1' href='https://www.linkedin.com/in/sandrosolaqa/'> 
                  <img src={linkedin} alt='linkedin' width="40" height="40" /> 
                </a>

                <a className='title1' href='https://github.com/SandroSolaqa'> 
                  <img src={github} alt='github' width="40" height="40" /> 
                </a>

                <a className='title1' href="mailto:sandysolaqa11@gmail.com"> 
                  <img src={emailWhite} alt='gmail' width="40" height="40" /> 
                </a>
              </div>
                <p className='titleFade '>Computer Engineer - Full Stack - Software Engineer</p>
                <p className='bio'> A highly skilled and innovative Computer Engineer with a strong foundation
                 in hardware and software systems, I bring a comprehensive understanding of computer architecture,
                  programming languages, and system design. With a track record of successful project management 
                  and an ability to thrive in dynamic environments, I am well-equipped to contribute to the
                  advancement of cutting-edge technologies. My expertise spans from low-level hardware components
                  to high-level software applications, encompassing areas such as embedded systems, network protocols,
                  and algorithm optimization. Possessing excellent problem-solving skills, I am adept at identifying 
                  and resolving complex technical challenges. </p>
              </div>
            </div>
          </div>
          <div className='gold-line'></div>
            <div className='team-member'>
                <div className='content'>

                        <p className='bio'> Sandy has a strong grasp of programming languages
                         like C, C++, Matlab, HTML, CSS, JavaScript, Python. His expertise extends to utilizing tools like 
                         Git, Github, Jira, Docker, React, Django, Raspberry Pi, and
                         FPGA, enabling him to create innovative solutions and explore the
                         world of software and hardware. Eager to learn and grow, he is constantly seeking new challenges
                         to expand his knowledge and skills in the ever-evolving field of technology. </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='spacer'></div>
      </div>
  
  );
}

export default About;
