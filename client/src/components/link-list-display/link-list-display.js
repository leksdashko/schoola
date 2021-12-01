import React from 'react';
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './link-list-display.css';

const LinkListDisplay = () => {
    return (
        <div className="link-list-display theme-bg with-brand">
            <Container>
                <h3 className="title-font color-white">Популярні предмети:</h3>
                <div className="list">
                    <Link to="#" className="name-font color-white hover-theme-light-cl">Англійська мова</Link>
                    <Link to="#" className="name-font color-white hover-theme-light-cl">Математика</Link>
                    <Link to="#" className="name-font color-white hover-theme-light-cl">Українська мова</Link>
                    <Link to="#" className="name-font color-white hover-theme-light-cl">Фізика</Link>
                    <Link to="#" className="name-font color-white hover-theme-light-cl">Англійська мова</Link>
                    <Link to="#" className="name-font color-white hover-theme-light-cl">Українська мова</Link>
                    <Link to="#" className="name-font color-white hover-theme-light-cl">Фізика</Link>
                    <Link to="#" className="name-font color-white hover-theme-light-cl">Математика</Link>
                </div>
            </Container>
        </div>
    );
};

export default LinkListDisplay;