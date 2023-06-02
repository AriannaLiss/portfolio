import React from 'react';
import './Presentation.css';
import Ava from '../../ui/ava/Ava';

const Presentation = () => {
    return (
        <section id='home'>
            <div className="presentation">
                <p>Hi, I am <a href="#">Lidia Kalakutska</a> 👋</p>
                <h1>Front-end developer</h1>
                <p>I love develop beautiful apps and resolve interesting tasks.</p>
                <div className="home__ava"><Ava/></div>
            </div>
        </section>
    );
};

export default Presentation;