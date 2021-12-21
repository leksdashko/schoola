import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './default-card.css';

const DefaultCard = ({id}) => {
    const [isFavorite, setFaforite] = useState(false);
    const itemUrl = `/teachers/${id}`;

    const toggleFavorite = () => {
        setFaforite(!isFavorite);
    }

    return (
        <div className="cover">
            <div className="d-flex justify-content-between">
                <div className="main-info">
                    <Link to={itemUrl} className="name-font-small hover-theme-light-cl" title="Викладач Олександр">Олександр</Link>
                    <div className="mt-1">
                        <Link to="?cat=1" className="fw-light-bold hover-underline">Англійська мова</Link>
                    </div>
                    <div className="location mt-3">
                        <span className="fw-light-bold">Місто: </span> 
                        <Link to="#" className="hover-underline">Київ</Link>
                    </div>
                </div>
                <div className="rating">
                    <span>4.7</span>
                    <Link to="#">2 відгуки</Link>
                </div>
            </div>
            <div className="mt-3">
                <div className="d-flex justify-content-between">
                    <p className="name-font-small">700 грн/год</p>
                    <div className={`like${isFavorite?' active':''}`} onClick={() => toggleFavorite()}></div>
                </div>
                <div className="text-center mt-2">
                    <button className="btn btn-theme large mb-4 w-100">Подать заявку</button>
                    <Link className="btn-more" to={itemUrl}>Детальніше про репетитора</Link>
                </div>
            </div>
        </div>
    );
};

export default DefaultCard;