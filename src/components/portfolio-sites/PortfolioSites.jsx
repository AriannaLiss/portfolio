import React from 'react';
import { PORTFOLIO_LINK } from '../../utils/const';
import './PortfolioSites.css'

const PortfolioSites = ({sites, isReact, isResponsive}) => {
    return (
        <div className='sites'>
            {sites.length 
                ? sites.map( site => 
                    <div
                        title={site.skills.join(' + ')} 
                        key={site.alt} 
                        className="site" 
                    >
                        <img alt={site.alt} src={site.src}/>
                        <div className="site__hover">
                            <a  className="site__click"                         
                                href={site.href}
                                target='_blank' >try it</a>
                            <a className="site__git"
                                href={site.git}
                                target='_blank'>git</a>
                        </div>
                    </div>
                ) 
                : <div className='noSites'>Here is no sites in this category yet.</div>
            }
            {(isReact||isResponsive)&&<div className='site site-msg'>
                    <p>
                        {isResponsive
                            ?<>Resonsive design is also implemented for this portfolio.</>
                            :<>This site is also created on React<br/>and there are few projects now in developing stage</>}
                    </p>                        
                    <div className="site__hover">
                        {PORTFOLIO_LINK('git','site__git')}
                    </div>
                </div>}
        </div>
    );
};

export default PortfolioSites;