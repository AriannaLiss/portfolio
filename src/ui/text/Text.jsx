import React from 'react';
import './Text.css'

const Text = ({className, title, subtitle, text = []}) => {
    return (
        <div className={className}>
            <div className="title">{title}</div>
            <h2 className="subtitle">{subtitle}</h2>
            <div className="text grey-text">
                { text.map((p, i) => <p key={i}>{p}</p>) }
            </div>
        </div>
    );
};

export default Text;