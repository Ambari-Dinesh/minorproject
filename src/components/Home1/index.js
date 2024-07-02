import React from 'react';
import './style.css';
import LOGO from '../Assets/LOGO.png';

const SimpleWebsiteDesign = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <img src={LOGO} alt="ai-image" className='ai-logo'/>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="buttons">
          <a href="#" className="login">Log in</a>
          <a href="#" className="btn">Register</a>
        </div>
      </nav>
      <div className="content">
        <h2>Hello,<br />Welcome Explore AI Tools</h2>
        <p>
          I'm A Web Developer & Designer. I Will Make Your Project Beautiful And Attractive,<br />
          You Can Find Me On GitHub.
        </p>
      </div>
      <div className="link">
        <a href="#" className="hire">Hire Me</a>
      </div>
      
    </div>
  );
}

export default SimpleWebsiteDesign;
