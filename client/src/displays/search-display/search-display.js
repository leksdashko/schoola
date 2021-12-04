import React from 'react';

import './search-display.css';
import {Container,Row,Col} from "react-bootstrap";

const SearchDisplay = () => {
    return (
        <div className="search-bar brands-bg">
            <div className="search-text-wrapper">
                <Container>
                    <div className="search-title">
                        <h2 className="title-font color-gray">Потрібна допомога в навчанні?</h2>
                        <h1 className="title-font color-gray">Знайди репетитора тут</h1>
                    </div>
                </Container>
            </div>
            <div className="search-form-wrapper theme-light-bg with-brand">
                <Container>
                    <Row>
                        <Col md={10}>
                            <div>
                                <div className="search-container">
                                    <input type="text" placeholder="Введите или выберите предмет из списка" />
                                    <span className="search-select-btn"></span>
                                    <button>Знайти репетитора</button>
                                </div>
                                <div className="search-queries-wrapper">
                                    <div className="search-queries">
                                        <ul>
                                            <li>Английский язык</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SearchDisplay;