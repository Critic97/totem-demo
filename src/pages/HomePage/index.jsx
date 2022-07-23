import React from 'react';
import Helmet from 'react-helmet';
import { Button } from 'reactstrap';

import { NavWrapper } from '../../components/NavWrapper';

import style from './style.module.scss';

function HomePage() {
    return (
        <NavWrapper>
		    <Helmet><title>Home Page | Totem Learning</title></Helmet>

            <div className={style.bg}>
                <h1 className={style.title}><strong>The smallest door is more powerful than the longest wall</strong></h1>

                <div className={style.doorContainer}>
                    <div className={style.leftWall}/>
                    <div className={style.door}/>
                    <div className={style.rightWall}/>
                </div>

                <h1 className={style.subText}>Totem is a learning company. We blend behavioural psychology, technology and creative expertise to help companies walk through the walls that stand between them and where they want to be.</h1>


                <div className={style.buttonContainer}>
                    <Button className={style.button} color="white">Let's Walk Through Walls</Button>
                </div>
            </div>
        </NavWrapper>
    );
}

export default HomePage;
