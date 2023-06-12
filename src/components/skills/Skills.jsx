import React from 'react';
import './Skills.css';
import {SKILLS as skills} from '../../utils/const.js'
import HireMe from '../../ui/hire-me/HireMe';
import Text from '../../ui/text/Text';

const Skills = ({selectedSkill, setSkill}) => {
    const text = {
        title:'my skills',
        subtitle: 'What My Programming Skills Included?',
        text: [`I can reslove your tasks and create responsive web applications with these technologies:`]
    }

    return (
        <section id='skills'>
            <div  className="skills">
                <div className="content"> 
                    <Text {...text}/>  
                    <div className='skills__text'>
                        {skills.map(skill=>
                            <a 
                                className={skill.alt===selectedSkill?'skill__text selected-category':'skill__text'} 
                                onClick={()=>setSkill(skill.alt)}
                                key={skill.alt} 
                                href='#portfolio'
                            >
                                {skill.alt}
                            </a>
                        )}
                    </div>
                </div>
                <div className="skills__icons">
                    {skills.map(skill => 
                        <a 
                            className={skill.alt===selectedSkill?'skill selected-category':'skill'}
                            key={skill.alt} title={skill.alt}  
                            onClick={()=>setSkill(skill.alt)}
                            href='#portfolio'
                        >
                            <img {...skill}/>
                        </a>
                    )}
                </div>
            </div>
            <HireMe/> 
        </section>
    );
};

export default Skills;