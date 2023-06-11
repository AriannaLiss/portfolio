import React from 'react';
import logo from '../../img/logo.png';
import './Logo.css';

const Logo = (props) => {
    return (
        <div {...props}>
            <a href="#">
                <img className='logo' src={logo} alt="logo"/>
            </a>
        </div>
    );
};

export default Logo;