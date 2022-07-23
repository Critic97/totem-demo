import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import style from './style.module.scss';

function TopSection() {

    return (
        <div className={style.page}>
            <Container className={style.pageContainerLeft}>
                <Col md="9">
                    <h1 className={style.headerLeft}>
                        Digital learning to drive performance
                    </h1>
                    <h2 className={style.textLeft}>
                        By blending psychology, game design and creative expertise we help organisations realise the art of the possible. 
                        <br/><br/>
                        By using <b>gamification</b>, <b>VR</b>, <b>AR</b>, and <b>blended learning</b> we will help your people learn more effectively, deeply connect to content and improve performance. 
                    </h2>
                </Col>
            </Container>

            <div className={style.buttonContainer}>
                <Button className={style.button} color="red">Come Work With Us!</Button>
            </div>

            <Container className={style.pageContainerRight}>
                <Col md="9">
                    <h1 className={style.headerRight}>
                        Making the impossible possible
                    </h1>
                    <h2 className={style.textRight}>
                        No matter where you are in your adoption of digital we can work together to create learning that engages your audience, aligns with your brand and drives performance forward.
                        <br/><br/>
                        Team Totem can plan, develop, deploy, sustain and evaluate digital learning solutions. Take a look at some of our case studies below.  
                    </h2>
                </Col>
            </Container>
        </div>
    );
}

export default TopSection;
