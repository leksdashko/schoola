import React from 'react';

import './breadcrumbs.css';

const Breadcrumbs = () => {
    return (
        <div className="breadcrumbs">
            <ul>
                <li><a href="/" title="Schoola - Знайди репетитора для себе">Головна</a></li>
                <li><span>Вхід</span></li>
            </ul>
        </div>
    );
};

export default Breadcrumbs;