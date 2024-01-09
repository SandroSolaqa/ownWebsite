import React from 'react';
import './About.css';
import sandy from './sandy.png';
// Import other images if needed

function About() {
  return (
    <div className="main">
      <div className="aboutContainer">
        <p className='aboutInfo'>
          Our team has worked hard to develop and initialize this web application and simulation tool. Meet the team: 
        </p>
        <div className='teamSDSU'>
          <div className='gold-line'></div>
          <div className='team-member'>
            <div className='content'>
              <div className='left'>
                {/* Uncomment and import other team member images if needed */}
                {/* <img src={jacob} alt='jacob' width="175" height="175" /> */}
              </div>
              <div className='info'>
                {/* Team member details */}
                {/* Make sure to update image source, name, title, LinkedIn link, and bio for each team member */}
                {/* Example for Sandro Solaqa */}
                <img src={sandy} alt='sandy' width="175" height="175" />
                <p className='name'>Sandro Solaqa</p>
                <p className='title'>Computer Engineer</p>
                <p className='bio'> Sandy is a Computer Engineer. He has a strong grasp of programming languages
                  like C, C++, Matlab, HTML, CSS, JavaScript, Python. His expertise extends to utilizing tools like 
                  Git, Github, Jira, Docker, React, MongoDB, Django, Raspberry Pi, and
                  FPGA, enabling him to create innovative solutions and explore the
                  world of software and hardware. Eager to learn and grow, he is constantly seeking new challenges
                  to expand his knowledge and skills in the ever-evolving field of technology. </p>
              </div>
            </div>
          </div>
          <div className='gold-line'></div>
        </div>
      </div>
    </div>
  );
}

export default About;
