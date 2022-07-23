import React from 'react';
import { NavWrapper } from '../../components/NavWrapper';


import TopSection from './TopSection';
import ImageGallery from './ImageGallery';
import Subscribe from './Subscribe';
import AddressFooter from './AddressFooter';

function About() {

    return (
        <NavWrapper>
            <TopSection/>
            <ImageGallery/>
            <Subscribe/>
            <AddressFooter/>
        </NavWrapper>
    );
}

export default About;
