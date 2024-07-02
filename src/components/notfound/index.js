import React from 'react';
import './index.css';
import LOGO from '../Assets/LOGO.png'
import Const from '../Assets/notfound.png'
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div>
        <nav>
        <div className="logo">
          <img src={LOGO} alt="ai-image" className='ai-logo'/>
        </div>
        
        <div className="buttons">
        <Link to="/">
          <a href="#" className="login">Back</a>
          </Link>
         
        </div>
      </nav>
    <div className="background">
       <img src={Const} alt="construction"/>
    </div>
    </div>
  );
};

export default Notfound
