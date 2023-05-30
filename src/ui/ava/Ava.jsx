import React from 'react';
import ava from '../../img/ava.jpeg';
import './Ava.css';

const Ava = () => {
    return (
        <div className='ava'>
            <img src={ava} alt="ava"/>
        </div>
    );
};

export default Ava;