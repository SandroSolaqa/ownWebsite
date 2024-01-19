import React from 'react';
import resume from "../Resume/SandySolaqaResume.pdf"; 
import './Resume.css';
import resumeImage from './Resume.png';

function Resume() {
  const handleDownload = () => {
    // Create a link element
    const downloadLink = document.createElement('a');

    // Set the href attribute to the path of your resume file
    downloadLink.href = resume;

    // Set the download attribute with the desired filename for the user
    downloadLink.download = 'SandySolaqaResume.pdf';

    // Append the link to the body
    document.body.appendChild(downloadLink);

    // Trigger a click on the link to start the download
    downloadLink.click();

    // Remove the link from the body
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <div className="main">
        <div className='introduction'>
          <div className='solarImage'>
            <img src={resumeImage} alt='solar' width="128%" height="60%" />
          </div>
          <div className='contentHomeBox'>
            <h1 id='title'>My Resume</h1>
            <p 
              id='subTitle'>Please CLICK the Download button for a PDF version of my Resume.
            </p>
            <button className="btn-primary" id='subTitle' onClick={handleDownload}>
              Download Resume
            </button>
 
          {/* <div className='contentBox'> */}
            <h2 id='titleDescriptionNew'>Sandy Solaqa</h2>
            <div className='rectangleBox'>
           
              {/* <h3 id='descriptionSubTitleNew'>Optimizing the value of residential and commercial <br></br>energy
                storage for households and business and <br></br>paving the way for renewables.
              </h3> */}

              <p className='smallHeaderNew'>
              Education
              </p>
              <div className='blueLineNew' id='blueLine1New'></div>
              <p className='descriptionNew' id='description1New'>
              San Diego State University: Bachelor of Science in 
              Computer Engineering<br></br> <br></br>         
A computer engineer plays a pivotal role in advancing technology and 
shaping the digital landscape.<br></br> With expertise in both hardware and
 software systems, computer engineers design, develop, and optimize 
 computing solutions that power our modern world.<br></br> They are instrumental
  in creating innovative technologies, from embedded systems to large-scale
   networks,<br></br>  contributing to the evolution of computers and their applications.
   Computer engineers are at the forefront of technological breakthroughs, ensuring 
   the efficient integration of hardware components and software algorithms. Their work 
   extends across various industries, influencing advancements
 in artificial intelligence.
              </p>

{/*               
              <p className='smallHeader2New'>
              Relevant Coursework
              </p> */}
              {/* <div className='blueLineNew' id='blueLine2New'></div> */}
              {/* <p className='descriptionNew' id='description2New'>
              Embedded Systems - Database and WebApp - Data Structures - Microprocessors - Machine Learning<br></br>
              Windows Programming - Computer Networks - Digital Circuits<br></br>
              </p> */}

              
              {/* <p className='smallHeaderNew' id='smallHeader3New'>
              Technical Skills:
              </p>
              <div className='blueLineNew' id='blueLine3New'></div>
              <ul className='descriptionNew' id='description3New'>
                <li>Python, C, C++ HTML/CSS, JavaScript, SQL, MATLAB, MIPS Assembly<br></br></li>
                <li>VS Code, Jupyter Notebooks, Raspberry Pi, FPGA, React, Microsoft Visio<br></br></li>
                <li>Git, GitHub, Docker, Jira, Django, Postgres, NodeJS, SQLite<br></br></li>
              </ul> */}


              {/* <p className='smallHeaderNew' id='smallHeader3New'>
              Technical Skills:
              </p>
              <div className='blueLineNew' id='blueLine3New'></div>
              <ul className='descriptionNew' id='description3New'>
                <li>Python, C, C++ HTML/CSS, JavaScript, SQL, MATLAB, MIPS Assembly<br></br></li>
                <li>VS Code, Jupyter Notebooks, Raspberry Pi, FPGA, React, Microsoft Visio<br></br></li>
                <li>Git, GitHub, Docker, Jira, Django, Postgres, NodeJS, SQLite<br></br></li>
              </ul> */}
              

              {/* <p className='smallHeaderNew' id='smallHeader3New'>
              Technical Skills:
              </p>
              <div className='blueLineNew' id='blueLine4New'></div>
              <ul className='descriptionNew' id='description3New'>
                <li>Python, C, C++ HTML/CSS, JavaScript, SQL, MATLAB, MIPS Assembly<br></br></li>
                <li>VS Code, Jupyter Notebooks, Raspberry Pi, FPGA, React, Microsoft Visio<br></br></li>
                <li>Git, GitHub, Docker, Jira, Django, Postgres, NodeJS, SQLite<br></br></li>
              </ul>
               */}

              {/* <div className='blueLineNew' id='blueLineNew'></div> */}
              
            </div>
            
            </div>
          {/* </div> */}
        </div>
      </div>


    </>
  );
}

export default Resume;
