import React from 'react';
import './Resume.css';

function Resume() {

  function alertMsg() {
    setTimeout(() => {
      alert('CV Downloading...');
    }, 1000);
  }

  return (
    <div id='Resume' className='resume-section'>
    <h2 className='section-heading'>Resume</h2>
      
    <div className="container">

      {/* Experience field */}
        <div className="field">
          <p> <i className="fa-solid fa-briefcase"></i> Experience</p>

          <div className="options">
            <h3 className="options-name">Endress + Hauser Flowtec (India) Pvt. Ltd. (MNC)</h3>
            <h3 className="options-year">Jul-2021 - Aug-2022</h3>
            <h3 className="options-role">Computer Assistant (Apprenticeship)</h3>
          </div>
        </div>

      {/* Skills field */}
        <div className="field">
          <p> <i className="fas fa-cogs"></i> Skills</p>

          <div className="options">
            <label className='options-name'>Languages : </label> <br />
            <h3 className="options-role">
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>JAVA (Intermediate)</li>
            </h3>
          </div>

          <div className="options">
            <label className='options-name'>Libraries & Frameworks : </label> <br />
            <h3 className="options-role">
                <li>React JS</li>
                <li>React Router</li>
                <li>Tailwind CSS</li>
            </h3>
          </div>

          <div className="options">
            <label className='options-name'>Tools & Platforms : </label> <br />
            <h3 className="options-role">
                <li>Firebase</li>
                <li>Google Cloud Console (for API)</li>
            </h3>
          </div>

          <div className="options">
            <label className='options-name'>Pre-Processors & Technologies : </label> <br />
            <h3 className="options-role">
                <li>JSX</li>
                {/* <li>SAAS</li> */}
            </h3>
          </div>

        </div>

      {/* Education field */}
        <div className="field">
          <p> <i className="fa-solid fa-graduation-cap"></i> Education</p>

          <div className="options">
            <h3 className="options-name">Bachelor of Computer Science (BCS)</h3>
            <h3 className="options-year">2022 - 2025 | Percentage: 81.2% | Grade: A++</h3>
          </div>

          <div className="options">
            <h3 className="options-name">HSC (12th)</h3>
            <h3 className="options-year">MARCH - 2022</h3>
          </div>

          <div className="options">
            <h3 className="options-name">ITI - Computer Operator and Programming Assistance (COPA)</h3>
            <h3 className="options-year">AUG - 2020</h3>
          </div>

          <div className="options">
            <h3 className="options-name">SSC (10th)</h3>
            <h3 className="options-year">MARCH - 2019</h3>
          </div>
        </div>

        <div className='cv-field'>
          <a onClick={() => alertMsg()}
            href={`${process.env.PUBLIC_URL}/assets/Deepak Maher Resume.pdf`} 
            download="Deepak Maher Resume.pdf">
            <i className="fa-regular fa-file"></i> 
              Download CV
          </a> 
        </div>
        
      </div>
    </div>
  )
}
export default Resume
