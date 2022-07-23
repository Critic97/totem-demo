import React from 'react';

import { Input, Button } from 'reactstrap';

import image1 from '../../../assets/images/totem-image-1.png';
import image2 from '../../../assets/images/totem-image-2.png';
import image3 from '../../../assets/images/totem-image-3.png';

import style from './style.module.scss'

function ImageGallery() {

    return (<>
        <div className={style.page}>
            <p className={style.subtitle}>{"Totem Learning Ltd, 3 & 4 Pegasus House, Pegasus Court, Olympus Avenue, Warwick, CV34 6LW. Registered in the UK (Company No. 08251631)"}</p>
        </div>
        </>);
}

export default ImageGallery;
