import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import linkedn from '../../assets/linkedn.png'
import git from '../../assets/git.png'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c14b194b-3ec5-4bc7-855f-8e9cd2a8f86c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>eshagunjekar2312@gmail.com</p>
                </div>
                
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Maharashtra, India</p>
                </div>
                
                <div className="contact-detail-icon">
                    <a href="https://github.com/eshagunjekar"><img  src={git} alt="" /></a>
                    <a href="https://linkedin.com/in/eshagunjekar"><img src={linkedn} alt="" /></a>
                </div>


            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="message">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
