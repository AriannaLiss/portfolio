import React from 'react';
import HireMe from '../../ui/hire-me/HireMe';
import Logo from '../../ui/logo/Logo';
import './Menu.css';

const Menu = () => {
    return (
        <header>
            <div className="header">
                <Logo/>
                <div className="header__list">
                    <div className="header__item"><a href="#">home</a></div>
                    <div className="header__item"><a href="#">about</a></div>
                    <div className="header__item"><a href="#">skills</a></div>
                    <div className="header__item"><a href="#">portfolio</a></div>
                    <div className="header__item"><a href="#">contact</a></div>
                </div>
                <HireMe/>
            </div>
        </header>
    );
};

export default Menu;