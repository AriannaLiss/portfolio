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
            'Hi! I’m Lidia Kalakutska - front-end developer from Ukraine who has passion for building nice and useful applications.',
            'Last year I worked as a Java developer in the largest outsourcing company in Ukraine, I developed features for simplifying managing financial operations for medical corporations.',
            'Also, I collaborated with third parties (payment systems), clarified interactions between international teams, contributed to code optimization, and helped new teammates get into the development.',
            'I’m always curious about learning new skills, tools, and concepts.',
            'I like visuals so I have done a front-end course, and created web-sites, programs, and games with new knowledges.',
            'This site is also one of these projects - it created on React with responsive design, you can try other my projects here, filter them by skills or categories.',
            <p>You can find my CV <a href='https://www.figma.com/proto/lke6xTQfWXHCTNP9JyPgzN/CV---Lidiia-Kalakutska---FrontEnd-developer-(React)?node-id=2-20' target='_blank'>here</a>.</p>,
            `Now I am living in Czech Republic, looking for interesting remote job, and I would be happy if we match with each other.`,
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