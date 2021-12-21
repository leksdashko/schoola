import React from 'react';
import {Container} from 'react-bootstrap';

import './card-list-display.css';
import { RotateCard } from '../../components/card';

const CardListDisplay = () => {
    const items = [1,2,3];

    return (
        <div className="card-list-display theme-bg">
            <Container>
                <h3 className="title-font color-white">Популярні вчителі:</h3>
                <div className="list">
                    <div className="row">
                        {items.map((id) => 
                            <div key={id} className="col-md-4">
                                <RotateCard/>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CardListDisplay;