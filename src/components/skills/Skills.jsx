import React from 'react';
import './Skills.css';
import {SKILLS as skills} from '../../utils/const.js'
import HireMe from '../../ui/hire-me/HireMe';
import Text from '../../ui/text/Text';

const Skills = () => {
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
                                <div className='skill__text' key={skill.alt}>{skill.alt}</div>
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