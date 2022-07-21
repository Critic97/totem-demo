import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/images/totem.png';
import '../../App.scss';
import { URLS } from '../../consts/urls';

export function NavWrapper({ children }) {
    const [nav, setNav] = React.useState(false);
    const toggleNav = () => setNav('');

    const navFunction = (array) => {
        setNav(array);
    }

    const history = useHistory();

    const solutionsOptions = [
        { label: 'Mixed Reality', link: `${URLS.MIXED_REALITY}`},
        { label: 'Metaverse', link: `${URLS.METAVERSE}`},
        { label: 'E-Learning', link: `${URLS.ELEARNING}`},
        { label: 'Serious Games', link: `${URLS.SERIOUS_GAMES}`},
        { label: 'Simulations', link: `${URLS.SIMULATIONS}`},
    ];

    const productsOptions = [
        { label: 'Unlock: Project Management', link: `${URLS.UNLOCK}`},
        { label: 'Smartup', link: `${URLS.SMARTUP}`},
        { label: 'Microlaunch Online', link: `${URLS.MICROLAUNCH}`},
        { label: 'GuideWeld VR', link: `${URLS.PRODUCTS}${URLS.GUIDEWELD}`},
    ];

    var blocker = document.getElementById('blocker');

    setTimeout(function(){
        blocker.style.display = 'none';
    }, 0);

    return (
    <>
        <div id="blocker" className="blocker"/>
        <div className="App" onMouseLeave={toggleNav}>
            <header className="App-header desktop-only">
                <Link to={URLS.ABOUT_US} onMouseEnter={toggleNav}>About</Link>
                <Link to={URLS.SOLUTIONS} onMouseEnter={() => navFunction(solutionsOptions)}>Solutions</Link>
                <img className="logo" src={logo} alt="logo" onClick={() => history.push(URLS.HOME)}/>
                <Link to={URLS.PRODUCTS} onMouseEnter={() => navFunction(productsOptions)}>Products</Link>
                <Link to={URLS.BLOG} onMouseEnter={toggleNav}>Blog</Link>
            </header>
            { nav ? <>
                <div className="navbar">
                    { nav.map((item) => (
                        <Link to={item.link}>{item.label}</Link>
                    ))}
            </div>
            <div onMouseOver={toggleNav} className="divider"></div>
            </> : null }
            {children}
        </div>

    </>
    );
}
