import React from 'react';
import HireMe from '../../ui/hire-me/HireMe';
import Logo from '../../ui/logo/Logo';
import {MENU} from '../../utils/const'
import './Menu.css';

const Menu = () => {
    return (
        <header>
            <div className="header">
                <Logo className="header__logo"/>
                <div className="header__list">
                    {MENU.slice(1).map(item => <a key={item} className="header__item" href={"#"+item}>{item}</a>)}
                </div>
                <div className='header__hire'><HireMe text="CV" href="https://www.figma.com/proto/lke6xTQfWXHCTNP9JyPgzN/CV---Lidiia-Kalakutska---FrontEnd-developer-(React)?node-id=2-20"/></div>
            </div>
        </header>
    );
};

export default Menu;