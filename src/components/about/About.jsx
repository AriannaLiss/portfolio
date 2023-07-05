import React from 'react';
import HireMe from '../../ui/hire-me/HireMe';
import './About.css';
import photo from '../../img/me.png'
import Text from '../../ui/text/Text';
import { _MUI, _SCSS, _JS, _REACT, _RESPONSIVE_DESIGN, _GIT, _FIGMA } from '../../utils/const';

const About = ({setSkill}) => {

    const skillLink = (skillAlt) => (
        <a 
            onClick={()=>setSkill(skillAlt)}
            href='#portfolio'
        >{skillAlt}</a>
    )

    const createLink = (label, ancor='#portfolio') => (
        <a 
            href={ancor}
        >{label}</a>
    )

    const text = {
        title: 'who am i',
        subtitle: 'about me',
        text: [
            <>Hi! I’m Lidia Kalakutska - a <a href='#skills'>front-end developer</a> with a back-end background.</>,
            <>Last year I have done a front-end ({skillLink(_REACT)}) course. During this course, I practiced creating websites with {skillLink(_RESPONSIVE_DESIGN)} based on {skillLink(_FIGMA)} designs, working with {skillLink(_REACT)}, {skillLink(_MUI)}, {skillLink(_JS)}, {skillLink(_SCSS)}, {skillLink(_GIT)} etc.</>,
            'In 2021-2022 I worked as a Java developer in the largest outsourcing company in Ukraine. I developed new features, fixed bugs, created unit tests, and collaborated with third parties and other teams.',
            'Making full nice useful products, working with quality design, - is one of my passions and it is one of the main reasons why I am moving closer to users in my developing career.',
            <><a href='#'>This site</a> is also one of my projects - I created it on {skillLink(_REACT)} with a {skillLink(_RESPONSIVE_DESIGN)}. You can try {createLink('other my projects here')}, filter them by {createLink('skills','#skills')} or {createLink('categories')}.</>,
            <>Here you can find my <a href='https://www.figma.com/proto/lke6xTQfWXHCTNP9JyPgzN/CV---Lidiia-Kalakutska---FrontEnd-developer-(React)?node-id=2-20' target='_blank'>CV</a>.</>,
            `Now I am living in Czech Republic, looking for interesting remote job, and I would be happy if we match with each other.`,
            `Thank you for your time and wish you a great day.`
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