import React, { useState } from 'react';
import './Contacts.css';
import emailjs  from 'emailjs-com';
const publicKey = "EEwM7QhKO6mCJkI92";
const serviceID = "service_w1pja7i";
const templateID = "template_yrvv7gy";

emailjs.init(publicKey);

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!', formData);
    const inputFields = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, inputFields)
      .then(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setShowSuccessPopup(true);
      })
      .catch((error) => {
        setShowErrorPopup(true);
      });
  };

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  return (


    <div className="contact-container">
      <div className="main-content">
        <h1>Contact Me</h1>
        <h2>Please use the form to get in touch with me.</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input
              placeholder='Ex: Conor Mcgregor'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email:</label>
            <input
              placeholder='Ex: computerengineer@gmail.com'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="subject">Subject:</label>
            <input
              placeholder='Enter subject of message:'
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="message">Message:</label>
            <textarea
              placeholder='Type your message here'
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button className='submitButton' type="submit">Submit</button>
        </form>
      </div>
      <div className="side-note">
        <h2>Where to find Me</h2>
        <p className='aboutText'>
          San Diego, California
        </p>

        
        <h2>Email</h2>
        <p className='aboutText'>
        sandysolaqa11@gmail.com
        </p>

        <h2>Phone</h2>
        <p className='aboutText'>
          (619) 558 - 9560
        </p>

        <h2>Website</h2>
        <p className='sdeiLink'>
        <a href='https://www.ssolaqa.com/'>www.ssolaqa.com</a>
        </p>

        {/* <div className="company-info">
          <h3>Email</h3>
          <p>
        sandysolaqa11@gmail.com
          </p>
          <p className='sdeiLink' >
            <a href='https://www.seadragon.energy/'>www.ssolaqa.com</a>
          </p>
        </div> */}
      </div>
      {showSuccessPopup && (
        <div className="popup success-popup">
          <span className="closeButton" onClick={() => setShowSuccessPopup(false)}>
            &times;
          </span>
          <p>Your message was received. We will be contacting you shortly, thank you!</p>
          {/* <img src={logo2} alt='logo' className="rounded" width="285" height="80" /> */}
        </div>
      )}
      {showErrorPopup && (
        <div className="popup error-popup">
          <span className="closeButton" onClick={() => setShowErrorPopup(false)}>
            &times;
          </span>
          <p>Error sending email. Please try again later.</p>
        </div>
      )}
    </div>
    
    
  );
};

export default Contacts;
