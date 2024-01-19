import React from 'react';
import './Home.css'; 
import sdsu from './sdsu.png';  

function Home() {
    return (
        <>
            <div className="main">

                <div className='introduction'>
                    <div className='solarImage'>
                        <img src={sdsu} alt='solar' width="175%" height="60%" />
                    </div>
                    <div className='contentHome'>
                        <h1 id='title'>WELCOME</h1>
                        <p id='subTitle'>Hey, I'm Sandy Solaqa, a Computer Engineer graduate from San Diego State University.
                        </p>
                        <h2 id='titleDescription'>Unlocking Engineering Technology</h2>
                        <div className='rectangle1'>
                            <h3 id='descriptionSubTitle'>My commitment to staying abreast of the latest advancements in computer engineering
                             ensures that I can contribute effectively to projects that require a forward-thinking and adaptable approach. 
                             <br></br>
                            </h3>
                            <p className='smallHeader' id='smallHeader1'>
                                {/* mPower turns any ordinary circuit breaker panel into a smart panel */}
                            </p>
                            <div className='blueLine' id='blueLine1'></div>
                            <p className='description' id='description1'>
                            Hiring me means bringing on board a technically proficient, adaptable, and collaborative
                             professional skills with a strong educational background and a passion for innovation. I am confident in my ability to make
                             meaningful contributions to your team and drive success in your organization's technology initiatives.
                            </p>
                            <p className='smallHeader' id='smallHeader2'>
                                Why you should hire me?
                            </p>
                            <ul className='description' id='description2'>
                                <li>Project Management Skills</li>
                                <li>Strong Educational Background</li>
                                <li>Problem-Solving Skills</li>
                                <li>Collaborative Team Player</li>
                                <li>Hands-On Experience</li>
                                <li>Passion for Innovation</li>
                                <li>Commitment to Quality and Excellence</li>
                            </ul>
                            <div className='blueLine' id='blueLine2'></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
