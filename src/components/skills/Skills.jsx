import React from 'react';
import './Skills.css';
import jsSkill from '../../img/skills/js.svg'
import sassSkill from '../../img/skills/sass.svg'
import gitSkill from '../../img/skills/git.svg'
import reactSkill from '../../img/skills/react.svg'
import htmlSkill from '../../img/skills/html.svg'
import cssSkill from '../../img/skills/css.svg'
import figmaSkill from '../../img/skills/figma.svg'
import HireMe from '../../ui/hire-me/HireMe';
import Text from '../../ui/text/Text';

const Skills = () => {
    const skills = [
        {alt: 'react', src: reactSkill},
        {alt: 'js', src: jsSkill},
        {alt: 'html5', src: htmlSkill},
        {alt: 'css3', src: cssSkill},
        {alt: 'sass', src: sassSkill},
        {alt: 'git', src: gitSkill},
        {alt: 'figma', src: figmaSkill},
    ]
    const text = {
        title:'my skills',
        subtitle: 'What My Programming Skills Included?',
        text: ['I can reslove your tasks and create responsive user interface with these technologies']
    }
    return (
        <section id='skills' className="skills">
            <div className="content"> 
                <Text {...text}/>  
                <HireMe/> 
            </div>
            <div className="skills__icons">
                {skills.map(skill => 
                    <div className="skill" title={skill.alt.toUpperCase()}>
                        <img {...skill}/>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;