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
            <img src={resumeImage} alt='solar' width="130%" height="60%" />
          </div>
          <div className='contentHome'>
            <h1 id='title'>My Resume</h1>
            <p 
              id='subTitle'>Please Click the Download button for a PDF version of my Resume.
            </p>
            <button className="btn-primary" id='subTitle' onClick={handleDownload}>
          Download Resume
        </button>

            <h2 id='titleDescription'>Unlocking Renewable Energy Storage</h2>
            <div className='rectangle'>
              <h3 id='descriptionSubTitle'>Optimizing the value of residential and commercial <br></br>energy
                storage for households and business and <br></br>paving the way for renewables.
              </h3>
              <p className='smallHeader' id='smallHeader1'>
                mPower turns any ordinary circuit breaker panel into a smart panel
              </p>
              <div className='blueLine' id='blueLine1'></div>
              <p className='description' id='description1'>
                mPower can be easily snapped into any existing circuit breaker panel, and the
                smart architecture allows it <br></br> to be tailored to any specific number of breakers
                at an affordable cost. <br></br><br></br>

                That’s not all – with dynamic sensoring and tracking, mPower also provides
                actionable feedback for better <br></br>energy management. When deployed at scale, it can
                provide smarter utility information to city leaders and <br></br>utilities as they seek to effectively
                employ a municipality’s energy supplies.
              </p>
              <p className='smallHeader' id='smallHeader2'>
                mPower Value Proposition
              </p>
              <ul className='description' id='description2'>
                <li>Allowing users to manage energy storage consumption efficiently and cost-effectively</li>
                <li>Delivers discretion over what circuits to use in any situation (normalized or emergency)</li>
                <li>Unlocks energy storage performance and dramatically improves its return on investment</li>
                <li>Serves as a tool to manage consumption across a community and better utilize renewable <br></br>energy resources</li>
              </ul>
              <div className='blueLine' id='blueLine2'></div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Resume;
