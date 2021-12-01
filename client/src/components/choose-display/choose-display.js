import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './choose-display.css';

const ChooseDisplay = () => {
    return (
        <div class="choose-display theme-light-bg with-brand">
            <Container>
                <Row>
                    <Col md={8}>
                        <p className="title-font color-gray">Знайди репетитора для себе або стань репетитором!</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Link to="/signup" className="name-font color-gray hover-theme-cl">Я хочу знайти репетитора</Link>
                    </Col>
                    <Col md={6}>
                        <Link to="/signup" className="name-font color-gray hover-theme-cl">Я хочу бути репетитором</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ChooseDisplay;