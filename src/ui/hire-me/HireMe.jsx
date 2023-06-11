import React from 'react';
import './HireMe.css'

const HireMe = ({text="Hire me", href="mailto:lidiia.kalakutska@gmail.com"}) => {
    return (
        <a href={href} className="hire" target="_blank">{text}</a>
    );
};

export default HireMe;