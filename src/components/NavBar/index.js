import React, { Component } from 'react';
import './index.css';
//import logo from './logo.png'; // Ensure you have a logo image in the src directory

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuActive: false,
        };
    }

    toggleMenu = () => {
        this.setState((prevState) => ({
            menuActive: !prevState.menuActive,
        }));
    };

    render() {
        const { menuActive } = this.state;

        return (
            <nav className="navbar">
                <div className="logo">
                    <img src="" alt="Logo" />
                </div>
                <ul className={`nav-items ${menuActive ? 'active' : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className="login-btn">Login</button>
                <div className="menu-toggle" onClick={this.toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        );
    }
}

export default NavBar;
