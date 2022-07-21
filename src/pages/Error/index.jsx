import React from 'react';
import Helmet from 'react-helmet';

import { Link } from 'react-router-dom';

import { NavWrapper } from '../../components/NavWrapper';

import logo from '../../assets/images/totem.png';
import '../../App.scss';

function About() {

    return (
        <NavWrapper>
            <Helmet><title>Error | Totem Learning</title></Helmet>
            Sorry, cannot find that page.
        </NavWrapper>
    );
}

export default About;
