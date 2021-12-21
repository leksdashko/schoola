import React from 'react';
import { Link } from 'react-router-dom';

import './breadcrumbs.css';

const Breadcrumbs = () => {
    return (
        <div className="breadcrumbs">
            <ul>
                <li><Link to="/" title="Schoola - Знайди репетитора для себе">Головна</Link></li>
                <li><span>Вхід</span></li>
            </ul>
        </div>
    );
};

export default Breadcrumbs;