import React from 'react';

import { Input, Button } from 'reactstrap';

import image1 from '../../../assets/images/totem-image-1.png';
import image2 from '../../../assets/images/totem-image-2.png';
import image3 from '../../../assets/images/totem-image-3.png';

import style from './style.module.scss'

function ImageGallery() {

    return (<>
        <div className={style.page}>
            <h2 className={style.title}>
                Susbcribe to our newsletter
            </h2>
            <p className={style.subtitle}>Sign up with your email address to receive news and updates. We promise we’ll keep it interesting and not spammy! </p>
            <br/>

            <div className={style.email}><Input placeholder='Email Address'/><Button color="red">Sign Up</Button></div>

            <br/>
            <p className={style.privacy}>We respect your privacy.</p>
        </div>
        </>);
}

export default ImageGallery;
