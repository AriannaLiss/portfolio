import React from 'react';
import HireMe from '../../ui/hire-me/HireMe';
import Logo from '../../ui/logo/Logo';
import './Menu.css';

const Menu = () => {
    const menu = ['home', 'about', 'skills', 'portfolio', 'contact'];
    return (
        <header>
            <div className="header">
                <Logo/>
                <div className="header__list">
                    {menu.map( item => <a className="header__item" href={"#"+item}>{item}</a>)}
                </div>
                <HireMe/>
            </div>
        </header>
    );
};

export default Menu;