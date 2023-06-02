import React, { useEffect, useState } from 'react';
import './Portfolio.css'
import dapperBully from '../../img/sites/markup/dapperBully.png'
import gta from '../../img/sites/markup/GTA.png'
import stars from '../../img/sites/markup/Stars.png'
import ukraine from '../../img/sites/markup/Ukraine.png'
import hotel from '../../img/sites/markup/hotel.png'
import todo from '../../img/sites/react/todo.png'
import pacman from '../../img/sites/js/pacman.png'
import PortfolioCategories from '../portfolio-categories/PortfolioCategories';
import PortfolioSites from '../portfolio-sites/PortfolioSites';
import { _BOOTSTRAP, _CSS, _HTML, _JS, _REACT, _RESPONSIVE_DESIGN, _SCSS } from '../../utils/const';

const Portfolio = ({openers}) => {
    const ALL = 'All'
    const REACT = 'React'
    const JS = 'JS'
    const MARKUP = 'Markup (HTML+CSS)'

    const categories = [ALL, REACT, JS, MARKUP]
    
    const sites = [
        {alt:'Barber shop site', href:'http://lia.infinityfreeapp.com/hw8/', src: dapperBully, categories:[MARKUP], skills:[_BOOTSTRAP,_RESPONSIVE_DESIGN]},
        {alt:'Pacman', href:'http://ariannaliss.github.io/pacman/', src: pacman, categories:[JS], skills:[_JS,_HTML,_CSS]},
        {alt:'Todo', onClick: openers.todo , src: todo, categories:[REACT], skills:[_REACT]},
        {alt:'Site about Ukraine', href:'http://lia.infinityfreeapp.com/hw3/', src: ukraine, categories:[MARKUP], skills:[_HTML,_CSS]},
        {alt:'Hotel', href:'https://ariannaliss.github.io/hotel/', src: hotel, categories:[MARKUP], skills:[_HTML,_SCSS]},
        {alt:'Hotel Reservation site', href:'http://lia.infinityfreeapp.com/hw5/', src: stars, categories:[MARKUP], skills:[_HTML,_CSS]},
        {alt:'Site in GTA style', href:'http://lia.infinityfreeapp.com/hw4/', src: gta, categories:[MARKUP], skills:[_HTML,_CSS]},
    ]

    const [selectedCategory, setSelectedCategory] = useState(ALL);
    const [selectedSites, setSelectedSites] = useState(sites);

    const filter = () => {
        selectedCategory === ALL
            ? setSelectedSites(sites)
            : setSelectedSites(sites.filter(site => site.categories && site.categories.includes(selectedCategory)));
    }

    useEffect(()=>{
        filter()
    },[selectedCategory])

    return (
        <section id='portfolio'>
            <PortfolioCategories
                categories={categories}
                selectedCategory = {selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <PortfolioSites sites={selectedSites} />
        </section>
    );
};

export default Portfolio;