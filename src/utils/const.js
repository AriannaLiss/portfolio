import jsSkill from '../img/skills/js.svg'
import sassSkill from '../img/skills/sass.svg'
import gitSkill from '../img/skills/git.svg'
import reactSkill from '../img/skills/react.svg'
import htmlSkill from '../img/skills/html.svg'
import cssSkill from '../img/skills/css.svg'
import figmaSkill from '../img/skills/figma.svg'
import responsiveSkill from '../img/skills/responsive.svg'
import mui from '../img/skills/mui.svg'

export const _REACT = 'React'
export const _JS = 'JS'
export const _RESPONSIVE_DESIGN = 'Responsive design'
export const _HTML = 'HTML5'
export const _CSS = 'CSS3'
export const _SCSS = 'ScSS'
export const _GIT = 'GIT'
export const _FIGMA = 'Figma'
export const _MUI = 'MaterialUI'

export const MENU = ['home', 'about', 'skills', 'portfolio', 'contacts'];

export const SKILLS = [
    {alt: _REACT, src: reactSkill},
    {alt: _JS, src: jsSkill},
    {alt: _RESPONSIVE_DESIGN, src: responsiveSkill},
    {alt: _MUI, src: mui},
    {alt: _HTML, src: htmlSkill},
    {alt: _CSS, src: cssSkill},
    {alt: _SCSS, src: sassSkill},
    {alt: _GIT, src: gitSkill},
    {alt: _FIGMA, src: figmaSkill},
]

export const PORTFOLIO_LINK = (label, className) => <a className={className} target='_blank' href='https://github.com/AriannaLiss/portfolio'>{label}</a>
