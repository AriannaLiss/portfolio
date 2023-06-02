import React from 'react';
import './PortfolioSites.css'

const PortfolioSites = ({sites, isReact}) => {
    return (
        <div className={sites.length%2==0&&sites.length%3!=0 ? 'sites pair_columns' : 'sites'}>
            {sites.length 
                ? sites.map( site => 
                    site.href 
                        ?   <a 
                                href={site.href}
                                target='_blank' 
                                title={site.skills.join(' + ')} 
                                key={site.alt} 
                                className="site" 
                            >
                                <img alt={site.alt} src={site.src}/>
                            </a>
                        :   <div 
                                onClick={site.onClick}
                                title={site.skills.join(' + ')} 
                                key={site.alt} 
                                className='site' 
                            >
                                <img alt={site.alt} src={site.src}/>
                            </div>
                ) 
                : <div className='noSites'>Here is no sites in this category yet.</div>
            }
            {isReact&&<div className='site reactSign'><p>This site is also created on React<br/>and there are few projects now in developing stage</p></div>}
        </div>
    );
};

export default PortfolioSites;