import React from 'react';
import { MENU } from '../../utils/const';
import './Footer.css';

const Footer = () => {
    const socials = [
        {children:'linkidIn', href:'https://www.linkedin.com/in/lidiia-kalakutska-61418118b/'},
        {children:'github', href:'https://github.com/AriannaLiss'},
        {children:'telegram', href:'https://t.me/lia_light'},
        {children:'instagram', href:'https://www.instagram.com/li.de.nec/'}, 
        {children:'facebook', href:'https://www.facebook.com/profile.php?id=100004917217772'}, 
    ]

    return (
        <footer id='contacts'>
            <div className="container footer">
                <div className="footer__column">
                    <div>
                        <a href="#"><h1 className='name'>Lidia Kalakutska</h1></a>
                        <p className="grey-text">
                            Front-end developer
                        </p>
                    </div>
                    <div className="footer__contacts">
                        <div>tel: <a href="tel:+420731022655">+420 731 022 655</a></div>
                        <div>email:&nbsp;<a href="mailto:lidiia.kalakutska@gmail.com">lidiia.kalakutska@gmail.com</a></div>
                    </div>
                </div>
                <div className="footer__column">
                    <div className="footer__content"></div>
                    <h2>Navigation</h2>
                    {MENU.map( item => <a key={item} className="footer__item" href={"#"+item}>{item}</a>)}
                </div>
                <div className="footer__column">
                    <h2>Contacts</h2>
                    {socials.map( item => <a key={item.children} className="footer__item" target='_blank' {...item}/> )}
                </div>
            </div>
            <p className="sign">This site is developed in <a target='_blank' href='https://github.com/AriannaLiss/portfolio'>React</a> (look at <a target='_blank' href='https://github.com/AriannaLiss/portfolio'>github.com</a>)</p>
        </footer>
    );
};

export default Footer;