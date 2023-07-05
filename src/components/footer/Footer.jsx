import React from 'react';
import { MENU } from '../../utils/const';
import './Footer.css';

const Footer = () => {
    const socials = [
        {children:'linkidIn', href:'https://www.linkedin.com/in/lidiia-kalakutska-61418118b/'},
        {children:'github', href:'https://github.com/AriannaLiss'},
        {children:'telegram', href:'https://t.me/lia_light'},
        {children:'facebook', href:'https://www.facebook.com/profile.php?id=100004917217772'}, 
        {children:'CV', href:'https://www.figma.com/proto/lke6xTQfWXHCTNP9JyPgzN/CV---Lidiia-Kalakutska---FrontEnd-developer-(React)?node-id=2-20'}, 
    ]

    return (
        <footer id='contacts'>
            <div className="container footer">
                <div className="footer__column">
                    <div>
                        <a href="#"><h1 className='name'>Lidia Kalakutska</h1></a>
                        <p className="grey-text footer__profession">
                            Front-end developer
                        </p>
                    </div>
                    <div className="footer__contacts">
                        <div>tel:&nbsp;<a href="tel:+420731022655">+420&nbsp;731&nbsp;022&nbsp;655</a></div>
                        <div>email:&nbsp;<a href="mailto:lidiia.kalakutska@gmail.com">lidiia.kalakutska@gmail.com</a></div>
                    </div>
                </div>
                <div className="footer__column footer__navigation">
                    <h2 className="footer__title">Navigation</h2>
                    <ul className="footer__list">
                        {MENU.map( item => 
                        {return item!='contacts' ? 
                            <li className="footer__item" key={item}>
                                <a href={"#"+item}>{item}</a>
                            </li> : ''})}
                    </ul>
                </div>
                <div className="footer__column">
                    <h2 className="footer__title">Contacts</h2>
                    <ul className="footer__list">
                    {socials.map( item =>
                        <li className="footer__item" key={item.children}>
                            <a target='_blank' {...item}/>
                        </li> )}
                    </ul>
                </div>
            </div>
            <p className="sign">This site is developed in <a target='_blank' href='https://github.com/AriannaLiss/portfolio'>React</a> (look at <a target='_blank' href='https://github.com/AriannaLiss/portfolio'>github.com</a>)</p>
        </footer>
    );
};

export default Footer;