import React from 'react';
import './Skills.css';
import jsSkill from '../../img/skills/js.svg'
import sassSkill from '../../img/skills/sass.svg'
import gitSkill from '../../img/skills/git.svg'
import reactSkill from '../../img/skills/react.svg'
import htmlSkill from '../../img/skills/html.svg'
import cssSkill from '../../img/skills/css.svg'
import figmaSkill from '../../img/skills/figma.svg'
import responsiveSkill from '../../img/skills/responsive.svg'
import HireMe from '../../ui/hire-me/HireMe';
import Text from '../../ui/text/Text';

const Skills = () => {
    const skills = [
        {alt: 'React', src: reactSkill},
        {alt: 'JS', src: jsSkill},
        {alt: 'Responsive design', src: responsiveSkill},
        {alt: 'HTML5', src: htmlSkill},
        {alt: 'CSS3', src: cssSkill},
        {alt: 'ScSS', src: sassSkill},
        {alt: 'GIT', src: gitSkill},
        {alt: 'FIGMA', src: figmaSkill},
    ]
    const text = {
        title:'my skills',
        subtitle: 'What My Programming Skills Included?',
        text: [`I can reslove your tasks and create responsive user interface with these technologies:`]
    }
    return (
        <section id='skills' className="skills">
            <div className="content"> 
                <Text {...text}/>  
                <div className='skills__text'>
                    {skills.map(skill=>
                        <div className='skill__text'>{skill.alt}</div>
                    )}
                </div>
                <HireMe/> 
            </div>
            <div className="skills__icons">
                {skills.map(skill => 
                    <div className="skill" key={skill.alt} title={skill.alt}>
                        <img {...skill}/>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;