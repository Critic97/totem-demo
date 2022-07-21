import React from 'react';
import Helmet from 'react-helmet';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { NavWrapper } from '../../components/NavWrapper';

import './stylesheet.scss';

function HomePage() {
    return (
        <NavWrapper>
		    <Helmet><title>Home Page | Totem Learning</title></Helmet>

            <div className="bg">
                <h1 className="title"><strong>The smallest door is more powerful than the longest wall</strong></h1>

                <div className="wall-door-container">
                    <div className="door"/>
                    <div className="right-wall"/>
                </div>

                <h1 className="subtext">Totem is a learning company. We blend behavioural psychology, technology and creative expertise to help companies walk through the walls that stand between them and where they want to be.</h1>


                <Button className="button" color="white">Let's Walk Through Walls</Button>
            </div>
        </NavWrapper>
    );
}

export default HomePage;
