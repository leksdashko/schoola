import React from 'react';
import {Image, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';

import photo from '../../../static/card-photo.jpg';
import DefaultCard from '../default-card/default-card';

import './vertical-card.css';

const VerticalCard = () => {
    return (
        <div class="vertical-card">
            <Link to="/teacher/1234591" class="img-wrapper">
                <Image src={photo} alt="Викладач Олександр"/>
            </Link>
            <DefaultCard/>
        </div>
    );
};

export default VerticalCard;