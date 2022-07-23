import React from 'react';

import { Link } from 'react-router-dom';

import { NavWrapper } from '../../components/NavWrapper';
import WorkInProgress from '../../components/WorkInProgress';

import logo from '../../assets/images/totem.png';

function About() {

    return (
        <NavWrapper>
            <WorkInProgress/>
        </NavWrapper>
    );
}

export default About;
