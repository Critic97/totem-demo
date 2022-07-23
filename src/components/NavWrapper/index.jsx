import React from 'react';

import { Link, useHistory, useLocation } from 'react-router-dom';

import logo from '../../assets/images/totem.png';

import hamburgerIcon from '../../assets/icons/hamburger.png';
import crossButton from '../../assets/icons/cross-button.png'

import style from './style.module.scss';

import { URLS } from '../../consts/urls';

export const linkFunction = (url, history) => {
    history.push(url);
    //window.location.reload(); //must be commented out for deployment
}

export function NavWrapper({ children }) {
    const [nav, setNav] = React.useState(false);
    const toggleNav = () => setNav('');

    const [hamburger, setHamburger] = React.useState(false);
    const eatHamburger = () => setHamburger(!hamburger);

    const navFunction = (array) => {
        toggleNav();

        if(nav) {
            if(nav[0].link == array[0].link) {
                toggleNav();
            }
            else {
                setNav(array);
            }
        }
        else {
            setNav(array);
        }
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

    const isCurrent = (url) => {
        return window.location.href.includes(url);
    }

    return (
    <>
        <div id={'blocker'} className={style.blocker}/>
        

        <div className={style.app} onMouseLeave={toggleNav}>
            <header className={style.appHeader}>
                <Link className={ isCurrent(URLS.ABOUT_US) ? style.active : style.inactive } onMouseEnter={toggleNav} onClick={() => linkFunction(URLS.ABOUT_US, history)}>About</Link>
                <Link className={ isCurrent(URLS.SOLUTIONS) ? style.active : style.inactive }  onMouseEnter={() => navFunction(solutionsOptions)} onClick={() => linkFunction(solutionsOptions[0].link, history)}>Solutions</Link>
                <img onMouseEnter={toggleNav} className={style.logo} src={logo} alt="logo" onClick={() => linkFunction(URLS.HOME, history)}/>
                <Link className={ isCurrent(URLS.PRODUCTS) ? style.active : style.inactive }  onMouseEnter={() => navFunction(productsOptions)} onClick={() => linkFunction(productsOptions[0].link, history)}>Products</Link>
                <Link className={ isCurrent(URLS.BLOG) ? style.active : style.inactive }  onMouseEnter={toggleNav} onClick={() => linkFunction(URLS.BLOG, history)}>Blog</Link>
                <img className={style.hamburger} src={!hamburger ? hamburgerIcon : crossButton} onClick={eatHamburger}/>
            </header>
            <div className={nav ? style.navbar : style.navbarFade}>
                { nav != "" ?
                    nav.map((item) => (
                        <Link className={ isCurrent(item.link) ? style.active : null }  to={item.link} onClick={() => linkFunction(item.link, history)}>{item.label}</Link>
                    ))
                : null }
            </div>

            
            
            <div className={style.children}>
                {children}
                <div className={ hamburger ? style.hamburgerMenu : style.hamburgerClosed }>
                    <Link className={ isCurrent(URLS.ABOUT_US) ? style.mobileActive : style.mobileInactive } onClick={() => linkFunction(URLS.ABOUT_US, history)}>About</Link>
                    <Link className={ isCurrent(URLS.SOLUTIONS) ? style.mobileActive : style.mobileInactive } onClick={() => navFunction(solutionsOptions, history)}>Solutions</Link>
                        { nav != "" ?
                            nav[0].link == solutionsOptions[0].link ?
                                nav.map((item) => (
                                    <Link className={ isCurrent(item.link) ? style.mobileActiveSub : style.mobileInactiveSub }  to={item.link} onClick={() => linkFunction(item.link, history)}>{item.label}</Link>
                                ))
                            : null
                        : null }

                    <Link className={ isCurrent(URLS.PRODUCTS) ? style.mobileActive : style.mobileInactive } onClick={() => navFunction(productsOptions, history)}>Products</Link>
                        { nav != "" ?
                            nav[0].link == productsOptions[0].link ?
                                nav.map((item) => (
                                    <Link className={ isCurrent(item.link) ? style.mobileActiveSub : style.mobileInactiveSub }  to={item.link} onClick={() => linkFunction(item.link, history)}>{item.label}</Link>
                                ))
                            : null
                        : null }

                    <Link className={ isCurrent(URLS.BLOG) ? style.mobileActive : style.mobileInactive } onClick={() => linkFunction(URLS.BLOG)}>Blog</Link>
                </div>
                <div onMouseOver={toggleNav} className={nav ? style.divider : style.dividerFade}></div>
            </div>
        </div>

    </>
    );
}
