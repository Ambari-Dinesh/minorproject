import React from 'react';
import './styles.css'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Make sure to install @fortawesome/react-fontawesome and @fortawesome/fontawesome-svg-core

const Footer = () => {
  return (
    <footer>
      <div className="footer-col">
        <h4>BOTS</h4>
        <ul>
          <li><a href="">Text-to-speech</a></li>
          <li><a href="#">Text-classification</a></li>
          <li><a href="#">Image-detection</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>network</h4>
        <ul>
          <li><a href="#">technology</a></li>
          <li><a href="#">business</a></li>
          <li><a href="#">professional</a></li>
          <li><a href="#">API</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>company</h4>
        <ul>
          <li><a href="#">about</a></li>
          <li><a href="#">legal</a></li>
          <li><a href="#">contact us</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Creators</h4>
        <ul className="run">
          <div className="container1">
            <li><a href="">A.Dinesh</a></li>
            <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          </div>
          <div className="container1">
            <li><a href="#">A.Anil</a></li>
            <a href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          </div>
          <div className="container1">
            <li><a href="#">Bobby</a></li>
            <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          </div>
          <div className="container1">
            <li><a href="#">samarth</a></li>
            <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          </div>
          <div className="container1">
            <li><a href="#">Ajay</a></li>
            <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
