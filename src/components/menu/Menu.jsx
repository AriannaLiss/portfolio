import React from 'react';
import HireMe from '../../ui/hire-me/HireMe';
import Logo from '../../ui/logo/Logo';
import {MENU} from '../../utils/const'
import './Menu.css';

const Menu = () => {
    return (
        <header>
            <div className="header">
                <Logo/>
                <div className="header__list">
                    {MENU.map( item => <a key={item} className="header__item" href={"#"+item}>{item}</a>)}
                </div>
                <HireMe/>
            </div>
        </header>
    );
};

export default Menu;