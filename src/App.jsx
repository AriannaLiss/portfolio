import React from 'react';
import './App.css'
import About from './components/about/About';
import Menu from './components/menu/Menu';
import Presentation from './components/presentation/Presentation';
import Skills from './components/skills/Skills';

const App = () => {
    return (
        <div className='container'>
            <Menu/>
            <Presentation/>
            <About/>
            <Skills/>
        </div>
    );
};

export default App;