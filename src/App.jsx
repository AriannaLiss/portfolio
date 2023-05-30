import React from 'react';
import './App.css'
import Menu from './components/menu/Menu';
import Presentation from './components/presentation/Presentation';

const App = () => {
    return (
        <div className='container'>
            <Menu/>
            <Presentation/>
        </div>
    );
};

export default App;