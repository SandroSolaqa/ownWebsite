import React from 'react';
import './Projects.css';  // Make sure to provide the correct path for the CSS file
import CE from './CE.png';
import youtube from './youtube.png';
import github from './github.png';

function Projects() {
    return (
        
    <div className="main">
      <div className="aboutContainer">
        <p className='aboutInfo'>
          Project 1 
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
                {/* <div className='connection'> 
                  <img src={sandy} alt='sandy' width="600" height="500" /> */}

                <p className='titleNew'>Energy Management Simulation Tool</p>
                <p className='bio'> Web-based energy management tool
                sponsored by SDEI. The tool mimics a household environment where users with solar panels on
                their roofs can take advantage and store excesses of energy generated from the solar into
                batteries, during times of low energy demand. This stored energy can be used when demand is
                high to power their appliances rather than pulling power from the grid in peak hours. The Tool 
                intends to point out the benefits of the mPower whose main goal is to save users
                money on their electricity bill by giving them the option to convert any current circuit breaker
                into a smart panel breaker. The money-saving aspect relies on the mPower module being able to
                automatically switch on or off circuits in the breaker box panel depending on the time of day via
                Bluetooth or automatically switch ON/OFF from a smart device. </p>
                  <a className='youtube' href='https://www.youtube.com/watch?v=xBPSyRsAqNI'> 
                  <img src={youtube} alt='github' width="40" height="90" /> 
                </a>

                <a className='titleNew' href='https://github.com/SandroSolaqa/SDEI-Simulation-Tool'> 
                  <img src={github} alt='github' width="40" height="40" /> 
                </a>
              </div>
            </div>
          </div>
          {/* <div className='gold-line'></div> */}
            </div>
        </div>
        <div className='spacer'></div>







        <div className="aboutContainer">
        <p className='aboutInfo'>
          Project 2 
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
                {/* <div className='connection'> 
                  <img src={sandy} alt='sandy' width="600" height="500" /> */}

                <p className='titleNew'>MovieMaze Web application</p>
                <p className='bio'> This project makes use of a free live API, provides a big variety of
                    movies that cater to a wide range of tastes and inclinations. The user-friendly design allows
                    viewers to easily navigate an enormous selection of films from all genres. The implementation of
                    a safe and convenient login/signup system distinguishes our website. This tool not only increases
                    user engagement but also gives a personalized experience by allowing users to establish profiles,
                    maintain watchlists, and receive personalized suggestions. As we re imagine how viewers interact
                    with movies, we remain committed to accessibility and user happiness. Join us on this cinematic
                    journey where excitement meets simplicity, and film buffs meet audiences.
                </p>

                  <a className='titleNew' href='https://www.youtube.com/watch?v=Y_spczNSci4'> 
                  <img src={youtube} alt='github' width="100" height="40" /> 
                </a>

                <a className='titleNew' href='https://github.com/SandroSolaqa'> 
                  <img src={github} alt='github' width="40" height="40" /> 
                </a>

              </div>
            </div>
          </div>
          {/* <div className='gold-line'></div> */}
            </div>
        </div>
        <div className='spacer'></div>



        <div className="aboutContainer">
        <p className='aboutInfo'>
          Project 3 
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
                {/* <div className='connection'> 
                  <img src={sandy} alt='sandy' width="600" height="500" /> */}

                <p className='titleNew'>Digital Clock Timer</p>
                <p className='bio'> Digital Clock Timer implemented in Verilog which is a Hardware Description Language (HDL). Also,
                    I am using the Basys 3 – FPGA board to display the output using the seven-segment that the board has. On
                    the board, there are multiple buttons to control the time and a reset button to reset everything to zero. There
                    will be an enable switch to start the timing when needed. A buzzer will sound when reaching certain time
                    of the dedicated time.
                    FPGA Board Figure
 </p>

                  <a className='titleNew' href='https://www.youtube.com/watch?v=m68C0nwVcnQ'> 
                  <img src={youtube} alt='github' width="100" height="40" /> 
                </a>

                {/* <a className='title' href='https://github.com/SandroSolaqa'> 
                  <img src={github} alt='github' width="40" height="40" /> 
                </a> */}

              </div>
            </div>
          </div>
          {/* <div className='gold-line'></div> */}
            </div>
        </div>
        <div className='spacer'></div>




        <div className="aboutContainer">
        <p className='aboutInfo'>
          Project 4 
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
                {/* <div className='connection'> 
                  <img src={sandy} alt='sandy' width="600" height="500" /> */}

                <p className='titleNew'>Socket Programming</p>
                <p className='bio'> A socket is a communication endpoint that can be used for sending
                 and receiving data. It provides a standard interface for network communication. 
                 Sockets are a process between the programs running in the network. In other words, a process between
                the transport layer and the application process.  </p>

                  <a className='titleNew' href='https://www.youtube.com/watch?v=A-Hui8NHdz8'> 
                  <img src={youtube} alt='github' width="100" height="40" /> 
                </a>

                {/* <a className='title' href='https://github.com/SandroSolaqa'> 
                  <img src={github} alt='github' width="40" height="40" /> 
                </a> */}

              </div>
            </div>
          </div>
          {/* <div className='gold-line'></div> */}
            </div>
        </div>
        <div className='spacer'></div>





        <div className="aboutContainer">
        <p className='aboutInfo'>
          Project 5
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
                {/* <div className='connection'> 
                  <img src={sandy} alt='sandy' width="600" height="500" /> */}

                <p className='titleNew'>Snake Game</p>
                <p className='bio'> Snake game is implemented by using stacks, pointers, 2D arrays, if-else statements and
                    functions. When you start the game, there will be a game option to select from the three options
                    given. The first option allows you to play the game and the second option will display the rules
                    and choosing the third option will exit the game. When selecting the first option, the user is
                    allowed to input two keys from the keyboard, one at each time. The diagram below shows the
                    two different 2D arrays, one for the snake body and the other for the snake field. The snake can
                    go through the walls to the other side without stopping. The only way to terminate the snake and
                    exit playing is when the snake eats its body by touching it. The program compiled into C
                    pseudocode for testing and brainstorming purposes to acquire a direction for better advice on 
                    how to build up modules, and while the pseudo version is not comprehensive, it offered a visual
                    of the program's basis. Although this source contains a large number of methods, it provides
                    specific game boundaries.
                    </p>

                  <a className='titleNew' href='https://www.youtube.com/watch?v=MXk0TQFI3jw&t=14s'> 
                  <img src={youtube} alt='github' width="100" height="40" /> 
                </a>

                <a className='titleNew' href='https://github.com/SandroSolaqa/Snake-Game'> 
                  <img src={github} alt='github' width="40" height="40" /> 
                </a>

              </div>
            </div>
          </div>
          {/* <div className='gold-line'></div> */}
            </div>
        </div>
        <div className='spacer'></div>





        <div className="aboutContainer">
        <p className='aboutInfo'>
          Project 6 
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
                {/* <div className='connection'> 
                  <img src={sandy} alt='sandy' width="600" height="500" /> */}

                <p className='titleNew'>Embedded Programming</p>
                <p className='bio'> Ckeckout my youtube channel for embedded progamming codded 
                projects in C language such as Morse Code and many others.</p>

                  <a className='titleNew' href='https://www.youtube.com/@codingforlife9604/videos'> 
                  <img src={youtube} alt='github' width="100" height="40" /> 
                </a>

                {/* <a className='title' href='https://github.com/SandroSolaqa'> 
                  <img src={github} alt='github' width="40" height="40" /> 
                </a> */}

              </div>
            </div>
          </div>
          {/* <div className='gold-line'></div> */}
            </div>
        </div>
        <div className='spacer'></div>



        <div className="aboutContainer">
        <p className='aboutInfo'>
          Volunteer Project
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
                {/* <div className='connection'> 
                  <img src={sandy} alt='sandy' width="600" height="500" /> */}

                <p className='titleNew'>Multimedia System</p>
                <p className='bio'> 
                
                live multimedia system, leveraging a combination of tools to seamlessly record and broadcast programs
                through live streaming. The system has an audio engineering techniques to manage sound 
                frequencies, utilizing decibel-reading software to maintain optimal levels and prevent ear damage or audio distortion.
                 </p>

              </div>
            </div>
          </div>
          {/* <div className='gold-line'></div> */}
            </div>
        </div>
        <div className='spacer'></div>



      </div>
    
    );
}

export default Projects;
