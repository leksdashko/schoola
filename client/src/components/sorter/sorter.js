import React from 'react';
import { Container } from 'react-bootstrap';

import './sorter.css';

const Sorter = () => {

    const types = [
        'Звичайний',
        'Високий рейтинг',
        'Кількість відгуків',
        'Великий досвід',
        'Найменша ціна',
        'Найвища ціна'
    ];

    return (
        <div className="sorter">
            <Container>
                <ul>
                    {types.map((type, i) => 
                        <li className={`${i<1?' active' : ''}`}>{type}</li>
                    )}
                </ul>
            </Container>
        </div>
    );
};

export default Sorter;