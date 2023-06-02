import React, { memo, useState } from 'react';
import './App.css'
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Portfolio from './components/portfolio/Portfolio';
import Presentation from './components/presentation/Presentation';
import Skills from './components/skills/Skills';
import Modal from './ui/modal/Modal';
import Todo from './components/todo/Todo'

const App = () => {
    const [showTodo, setTodo] = useState(false)
    const openers = {
        todo: () => setTodo(true)
    }
    
    return (
        <>
            <div className='container'>
                <Menu/>
                <Presentation/>
                <About/>
                <Skills/>
                <Portfolio openers={openers}/>
            </div>
            <Footer/>
            <Modal
                isShow={showTodo} 
                close={() => setTodo(false)}
                >
                <Todo/>
            </Modal>
        </>
    );
};

export default App;