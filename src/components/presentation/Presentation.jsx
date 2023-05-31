import React from 'react';
import './Presentation.css';
import Ava from '../../ui/ava/Ava';

const Presentation = () => {
    return (
        <section id='home'>
            <div class="presentation">
                <p>Hi, I am <a href="#">Lidia Kalakutska</a> 👋</p>
                <h1>Front-end developer</h1>
                <p>I love develop beautiful apps and resolve interesting tasks.</p>
                <Ava/>
            </div>
        </section>
    );
};

export default Presentation;