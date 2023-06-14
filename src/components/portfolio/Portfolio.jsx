import React, { useEffect, useState } from 'react';
import './Portfolio.css'
import dapperBully from '../../img/sites/markup/dapperBully.png'
import hotel from '../../img/sites/markup/hotel.png'
import todo from '../../img/sites/react/todo.png'
import comments from '../../img/sites/react/comments.png'
import pacman from '../../img/sites/js/pacman.png'
import timer from '../../img/sites/js/timer.png'
import calc from '../../img/sites/js/calc.png'
import PortfolioCategories from '../portfolio-categories/PortfolioCategories';
import PortfolioSites from '../portfolio-sites/PortfolioSites';
import { _BOOTSTRAP, _CSS, _HTML, _JS, _REACT, _RESPONSIVE_DESIGN, _SCSS, _GIT, _FIGMA } from '../../utils/const';

const Portfolio = ({selectedSkill, resetSkill}) => {
    const ALL = 'All'
    const REACT = 'React'
    const JS = 'JS'
    const MARKUP = 'Markup (HTML+CSS)'

    const standardCategories = [ALL, REACT, JS, MARKUP]
    
    const sites = [
        {alt:'Barber shop site', href:'http://lia.infinityfreeapp.com/hw8/', git:'https://github.com/AriannaLiss/htmlCSS/tree/master/hw8', src: dapperBully, categories:[MARKUP], skills:[_BOOTSTRAP,_RESPONSIVE_DESIGN]},
        {alt:'Todo', href:'https://ariannaliss.github.io/mood-adviser/', git:'https://github.com/AriannaLiss/mood-adviser', src: todo, categories:[REACT], skills:[_REACT,_JS]}, 
        {alt:'Pacman', href:'http://ariannaliss.github.io/pacman/', git:'https://github.com/AriannaLiss/pacman', src: pacman, categories:[JS], skills:[_JS,_HTML,_CSS]},
        {alt:'Comments', href:'https://ariannaliss.github.io/ReactAPIComments/', git:'https://github.com/AriannaLiss/ReactAPIComments', src: comments, categories:[REACT], skills:[_REACT,_JS]}, 
        {alt:'Timer', href:'http://ariannaliss.github.io/timer/', git:'https://github.com/AriannaLiss/timer', src: timer, categories:[JS], skills:[_JS]},
        {alt:'Hotel', href:'https://ariannaliss.github.io/hotel/', git:'https://github.com/AriannaLiss/hotel', src: hotel, categories:[MARKUP], skills:[_HTML,_SCSS]},
        {alt:'Calculator', href:'http://ariannaliss.github.io/calc/', git:'https://github.com/AriannaLiss/calc', src: calc, categories:[JS], skills:[_JS]},
    ]
    
    const [categories, setCategories] = useState(standardCategories);
    const [selectedCategory, setSelectedCategory] = useState(ALL);
    const [selectedSites, setSelectedSites] = useState(sites);

    const filter = () => {
        selectedCategory === ALL
            ? setSelectedSites(sites)
            : setSelectedSites(sites.filter(site => (site.categories && site.categories.includes(selectedCategory))|| (site.skills&&site.skills.includes(selectedCategory))));
    }

    const changeCategory = (category) => {
        if (category == selectedSkill) return;
        setSelectedCategory(category);
        setCategories(standardCategories);
        resetSkill();
    }

    const getNewCategory = () => {
        if (!selectedSkill){
            return;
        }
        if (selectedSkill == _GIT) {
            setSelectedCategory(ALL);
            return;
        }
        if (selectedSkill == REACT || selectedSkill == JS) {
            setSelectedCategory(selectedSkill);
            return;
        }
        if ([_HTML, _CSS, _FIGMA].includes(selectedSkill)){
            setSelectedCategory(MARKUP);
            return;
        }
        setSelectedCategory(selectedSkill);
        return selectedSkill
    }

    useEffect(()=>{
        filter()
    },[selectedCategory])

    useEffect(()=>{
        const category = getNewCategory();
        setCategories(category?[...standardCategories,category]: [...standardCategories]);
    },[selectedSkill])

    return (
        <section id='portfolio'>
            <PortfolioCategories
                categories={categories}
                selectedCategory = {selectedCategory}
                setSelectedCategory={changeCategory}
            />
            <PortfolioSites 
                sites={selectedSites} 
                isReact={selectedCategory==REACT}
                isResponsive={selectedCategory==_RESPONSIVE_DESIGN}
            />
        </section>
    );
};

export default Portfolio;