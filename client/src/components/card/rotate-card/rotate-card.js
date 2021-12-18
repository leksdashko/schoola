import React from 'react';
import {Image} from 'react-bootstrap';

import './rotate-card.css';
import prepodImage from '../../../static/card-photo.jpg';
import DefaultCard from '../default-card/default-card';

const RotateCard = () => {
    return (
        <div className="rotate-card">
            <div className="rotate">
                <div className="overlay">
                    <div className="min-info">
                        <h4>Иванов Иван</h4>
                        <p>Английский язык, математика</p>
                    </div>
                    <div className="overlay-img-wrap">
                        <Image src={prepodImage} alt="Преподаватель Иванов Иван" />
                    </div>
                </div>
                <DefaultCard/>
            </div>
        </div>
    );
};

export default RotateCard;