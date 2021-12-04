import React from 'react';
import {Image} from "react-bootstrap";

import './lang-selector.css';

const LangSelector = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="lang-selector">
                <div className="lang-btn"></div>
                <p>укр</p>
                <p>рус</p>
            </div>
        </div>
    );
};

export default LangSelector;