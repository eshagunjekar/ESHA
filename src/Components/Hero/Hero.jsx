import React from 'react';
import './Hero.css';
import user from '../../assets/user.png';
import esha from '../../assets/esha.pdf';

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <div className='hero-left'>
        <img className='img' src={user} alt=""/>
      </div>
    
      <div className='hero-right'>
        <p>Hello,</p>
        <h1><span>I'm Esha Gunjekar</span><br/></h1>
        <p>A Graduate Student Pursuing Computer Science who is passionate about Software and Web Development.</p>
        <div className='hero-action'>
          {/* Corrected the link */}
          <a href={esha} className='hero-connect'>My Resume</a>
          {/* Corrected the link */}
          <a href={"https://linkedin.com/in/eshagunjekar"} className='hero-connect'>Connect with me </a>
          
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
