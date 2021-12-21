import React from 'react';
import {Image} from "react-bootstrap";
import { Link } from 'react-router-dom';

import photo from '../../../static/card-photo.jpg';
import { DefaultCard } from '..';
import './vertical-card.css';

const VerticalCard = ({id = 1}) => {
    const itemUrl = `/teachers/${id}`;

    return (
        <div class="vertical-card">
            <Link to={itemUrl} class="img-wrapper">
                <Image src={photo} alt="Викладач Олександр"/>
            </Link>
            <DefaultCard id={id}/>
        </div>
    );
};

export default VerticalCard;