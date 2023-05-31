import React from 'react';
import HireMe from '../../ui/hire-me/HireMe';
import './About.css';
import photo from '../../img/photo.png'

const About = () => {
    return (
        <section id='about'>
        <div className="about">
            <div className="content">
                <div className="about__foto"><img src={photo} alt="photo"/></div>
                <div className="title">who am i</div>
                <h2>about me</h2>
                <div className="text grey-text">
                    <p>Hi! I’m Lidia Kalakutska - front-end developer from Ukraine who has passion for building nice applications with intuitive functionality. </p>
                    <p>Last year I worked as a Java developer in the largest outsourcing company in Ukraine, I developed features for simplifying managing financial operations for medical corporations.</p>
                    <p>I’m always curious about learning new skills, tools, and concepts. And I believe that every person should do what she/he likes and find use for her/his talents.   </p>
                    <p>So, now I am living in Czech Republic and doing front-end course and looking for my dream job.</p>
                    <p>I would be happy if we match with each other.</p>
                </div>
                <HireMe/>
            </div>
        </div>
    </section>
    );
};

export default About;