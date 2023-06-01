import React from 'react';
import './Portfolio.css'
import dapperBully from '../../img/sites/markup/dapperBully.png'
import gta from '../../img/sites/markup/GTA.png'
import stars from '../../img/sites/markup/Stars.png'
import ukraine from '../../img/sites/markup/Ukraine.png'
import todo from '../../img/sites/react/todo.png'

const Portfolio = () => {
    const sites = [
        {alt:'Barber shop site', href:'http://lia.infinityfreeapp.com/hw8/', src: dapperBully},
        {alt:'Site in GTA style', href:'http://lia.infinityfreeapp.com/hw4/', src: gta},
        {alt:'Site about Ukraine', href:'http://lia.infinityfreeapp.com/hw3/', src: ukraine},
        {alt:'Hotel Reservation site', href:'http://lia.infinityfreeapp.com/hw5/', src: stars},
        {alt:'Todo', href:'http://lia.infinityfreeapp.com/hw5/', src: todo},
    ]

    const categories = ['All', 'React', 'JS', 'Markup (HTML+CSS)']

    return (
        <section id='portfolio'>
            <div className="works">
                <div className="title">
                    my works
                </div>
                <h2 className='subtitle'>Featured Works</h2>
                <div className="categories">
                    {categories.map(category => 
                        <div key={category} className="category">{category}</div>
                    )}
                </div>
            </div>
            <div className="sites">
                {sites.map( site => 
                    <a key={site.alt} target='_blank' className="site" href={site.href}>
                        <img alt={site.alt} src={site.src}/>
                    </a>

                )}
            </div>
        </section>
    );
};

export default Portfolio;