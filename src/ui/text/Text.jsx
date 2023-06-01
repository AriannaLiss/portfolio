import React from 'react';
import './Text.css'

const Text = ({title, subtitle, text = []}) => {
    return (
        <div>
            <div className="title">{title}</div>
            <h2 className="subtitle">{subtitle}</h2>
            <div className="text grey-text">
                { text.map(p => <p>{p}</p>) }
            </div>
        </div>
    );
};

export default Text;