import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { NavWrapper } from '../../components/NavWrapper';

import image1 from '../../assets/images/totem-image-1.png';
import image2 from '../../assets/images/totem-image-2.png';
import image3 from '../../assets/images/totem-image-3.png';

import './stylesheet.scss';

function About() {

    return (
        <NavWrapper>
            <div className="page">
                <Container className="page-container-1">
                    <Row style={{ display: 'flex', width: '100%' }}>
                        <Col style={{ width: '50%' }} md="6">
                            <h1 className="header">
                                Digital learning to drive performance
                            </h1>
                            
                        </Col>
                        <Col style={{ width: '50%' }} md="6">
                            <h2>
                                By blending psychology, game design and creative expertise we help organisations realise the art of the possible. 
                                <br/><br/>
                                By using <b>gamification</b>, <b>VR</b>, <b>AR</b>, and <b>blended learning</b> we will help your people learn more effectively, deeply connect to content and improve performance. 
                            </h2>
                        </Col>
                    </Row>
                </Container>
                <Container className="page-container-2">
                    <Row style={{ display: 'flex', width: '100%' }}>
                        <Col style={{ width: '50%' }} md="6">
                            <h2>
                                No matter where you are in your adoption of digital we can work together to create learning that engages your audience, aligns with your brand and drives performance forward.
                                <br/><br/>
                                Team Totem can plan, develop, deploy, sustain and evaluate digital learning solutions. Take a look at some of our case studies below.  
                            </h2>
                        </Col>
                        <Col style={{ width: '50%' }} md="6">
                            <h1 className="header">
                                Making the impossible possible
                            </h1>
                        </Col>
                    </Row>
                </Container>

                <h1 style={{ fontSize: '4vh' }}>Immersive and digital learning no matter what sector</h1>
                <div className="image-container">
                    <div>
                        <img src={image2}/>
                        <p>Unlock: Profitability</p>
                        Unlock: Profitability was a virtual pub/restaurant which acted as a hub for the wider learning and development strategy. The game was an opportunity to remind employees about Gross Profit and to give them an opportunity to demonstrate that they understand the connections between the elements of the business by making business decisions themselves.
                    </div>
                    <div>
                        <img src={image1}/>
                        <p>Shell Leaders</p>
                        Shell Leaders 4.0 is a VR 360° video experience commissioned by Shell to kick off a 3 day conference in Shanghai and was shown to all conference attendees. Built for iPhone the app’s goal was to give Shell’s future leaders top line information about the future of Shell’s business.
                    </div>
                    <div>
                        <img src={image3}/>
                        <p>Unlock: Project Management</p>
                        Designed to encourage players to think like Project Managers using high pressure single-player scenario-based gaming whilst covering project management skills needed at Level 2 training. Deal with stakeholders, project scope, planning, issue management, risk management, reporting and balancing. The game is set on an island where you must provide low-cost sheltering for the affected population. 
                    </div>
                </div>
            </div>
        </NavWrapper>
    );
}

export default About;
