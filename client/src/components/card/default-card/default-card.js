import React from 'react';
import { Link } from 'react-router-dom';

import './default-card.css';

const DefaultCard = () => {
    return (
        <div class="cover">
            <div className="d-flex justify-content-between">
                <div class="main-info">
                    <Link to="/teacher/1234591" className="name-font-small hover-theme-light-cl" title="Викладач Олександр">Олександр</Link>
                    <div className="mt-1">
                        <Link to="?cat=1" className="fw-light-bold hover-underline">Англійська мова</Link>
                    </div>
                    <div className="location mt-2">
                        <span className="fw-light-bold">Місто: </span> 
                        <Link to="#">Київ</Link>
                    </div>
                </div>
                <div className="rating">
                    <span>4.7</span>
                    <Link to="#">2 відгуки</Link>
                </div>
            </div>
            <div className="mt-3">
                <div class="d-flex justify-content-between">
                    <p class="name-font-small">700 грн/год</p>
                    <div class="like"></div>
                </div>
                <div className="text-center mt-3">
                    <button class="btn btn-theme large mb-4">Подать заявку</button>
                    <Link class="btn-more" to="/teacher/1234591">Детальніше про репетитора</Link>
                </div>
            </div>
        </div>
    );
};

export default DefaultCard;