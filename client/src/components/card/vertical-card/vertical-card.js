import React from 'react';
import {Image, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';

import photo from '../../../static/card-photo.jpg';

import './vertical-card.css';

const VerticalCard = () => {
    return (
        <div class="vertical-card">
            <div class="img-wrapper">
                <Image src={photo} alt="Викладач Олександр"/>
            </div>
            <div class="cover">
                <Row>
                    <div class="main-info">
                        <Link to="/teacher/1234591" className="name-font-small" title="Викладач Олександр">Олександр</Link>
                        <div>
                            <Link to="?cat=1">Англійська мова</Link>
                        </div>
                        <div class="location">
                            Місто: <Link to="#">Київ</Link>
                        </div>
                    </div>
                    <div class="rating">
                        <span>4.7</span>
                        <a href="#">2 відгуки</a>
                    </div>
                </Row>
                <div class="goods-last-data">
                    <div class="price-like-wrap">
                        <p class="name-font-small">700 грн/год</p>
                        <a class="like active" href="/teacher/like?id=1234591" onclick="event.preventDefault(); like(1234591, this)"></a>
                    </div>
                    <div className="text-center">
                        <button class="btn btn-theme large">Подать заявку</button>
                        <Link class="btn-more" to="/teacher/1234591">Детальніше про репетитора</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerticalCard;