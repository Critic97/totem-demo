import React from 'react';

import image1 from '../../../assets/images/totem-image-1.png';
import image2 from '../../../assets/images/totem-image-2.png';
import image3 from '../../../assets/images/totem-image-3.png';
import image4 from '../../../assets/images/totem-image-4.png';
import image5 from '../../../assets/images/totem-image-5.png';
import image6 from '../../../assets/images/totem-image-6.png';

import style from './style.module.scss'

function ImageGallery() {

    return (<>
        <h2 className={style.immersiveHeader}>Immersive and digital learning no matter what sector </h2>
        <div className={style.page}>
            <div className={style.gallery}>
                <div className={style.picture}>
                    <img src={image1}/>
                    <h2>Shell Leaders</h2>
                    <p>Shell Leaders 4.0 is a VR 360° video experience commissioned by Shell to kick off a 3 day conference in Shanghai and was shown to all conference attendees. Built for iPhone the app’s goal was to give Shell’s future leaders top line information about the future of Shell’s business.</p>
                </div>
                <div className={style.picture}>
                    <img src={image2}/>
                    <h2>Profitability</h2>
                    <p>Unlock: Profitability was a virtual pub/restaurant which acted as a hub for the wider learning and development strategy. The game was an opportunity to remind employees about Gross Profit and to give them an opportunity to demonstrate that they understand the connections between the elements of the business by making business decisions themselves.</p>
                </div>
                <div className={style.picture}>
                    <img  src={image3}/>
                    <h2>Unlock: Project Management</h2>
                    <p>Designed to encourage players to think like Project Managers using high pressure single-player scenario-based gaming whilst covering project management skills needed at Level 2 training. Deal with stakeholders, project scope, planning, issue management, risk management, reporting and balancing. The game is set on an island where you must provide low-cost sheltering for the affected population. </p>
                </div>
                <div className={style.picture}>
                    <img  src={image4}/>
                    <h2>Marine Safety Training</h2>
                    <p>Built in 3D, this game sets the learner realistic tasks and time pressures, however their life depends upon following correct safety procedures. Through experiential learning it is hoped that this game will succeed in driving home the importance of protocol where other training methods have failed.</p>
                </div>
                <div className={style.picture}>
                    <img  src={image5}/>
                    <h2>Antiviral Train</h2>
                    <p>Created in response to the Covid-19 Pandemic and developed for Angel Trains, the Antiviral Train is designed to help passengers and staff understand the practical changes to the rail system and build confidence in the measures to get Britain moving again. </p>
                </div>
                <div className={style.picture}>
                    <img  src={image6}/>
                    <h2>Smart Up</h2>
                    <p>Whether you’re a student, an entrepreneur or someone within a larger organisation, the SMARTUP Business Game allows learners to run a business from day 1 over 2 trading years and put into practice their understanding of how business variables work together during different periods of business growth. There are literally millions of scenario combinations so players are encouraged to replay and try different strategies to maximise their profitability. <br/><br/> Set up your business, create a social following, sell product and grow over 2 years. </p>
                </div>
            </div>
        </div>
        </>);
}

export default ImageGallery;
