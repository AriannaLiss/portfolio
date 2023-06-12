import React from 'react';
import './PortfolioCategories.css'

const PortfolioCategories = ({categories, selectedCategory, setSelectedCategory}) => {
    return (
        <div className="works">
                <div className="title"> my works </div>
                <h2 className='subtitle'>Featured Works<span className='clue'>(clickable)</span></h2>
                <div className="categories">
                    {categories.map(category => 
                        <div 
                            key={category} 
                            className={selectedCategory==category?"selected-category category":"category"} 
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </div>
                    )}
                </div>
        </div>
    );
};

export default PortfolioCategories;