import React from 'react';
import HireMe from '../../ui/hire-me/HireMe';
import './About.css';
import photo from '../../img/me.png'
import Text from '../../ui/text/Text';

const About = () => {
    const text = {
        title: 'who am i',
        subtitle: 'about me',
        text: [
            'Hi! I’m Lidia Kalakutska - front-end developer from Ukraine who has passion for building nice applications with intuitive functionality.',
            'Last year I worked as a Java developer in the largest outsourcing company in Ukraine, I developed features for simplifying managing financial operations for medical corporations.',
            'I’m always curious about learning new skills, tools, and concepts. And I believe that every person should do what she/he likes and find use for her/his talents.',
            'Now I am living in Czech Republic, doing front-end course and looking for my dream job.',
            'I would be happy if we match with each other.'
        ]
    }
    return (
        <section id='about'>
        <div className="about">
            <div className="content">
                <div className="about__foto"><img src={photo} alt="photo"/></div>
                <Text className="about__text" {...text}/>
                <div className='about__hire right'><HireMe/></div>
            </div>
        </div>
    </section>
    );
};

export default About;