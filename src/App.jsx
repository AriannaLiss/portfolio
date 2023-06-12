import React from 'react';
import { useState } from 'react';
import './App.css'
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Portfolio from './components/portfolio/Portfolio';
import Presentation from './components/presentation/Presentation';
import Skills from './components/skills/Skills';

const App = () => {
    const [selectedSkill, setSkill] = useState();
    
    const resetSkill = () => {
        setSkill(undefined);
    }

    return (
        <>
            <div className='container'>
                <Menu/>
                <Presentation/>
                <About/>
                <Skills selectedSkill={selectedSkill} setSkill={setSkill}/>
                <Portfolio selectedSkill={selectedSkill} resetSkill={resetSkill}/>
            </div>
            <Footer/>
        </>
    );
};

export default App;