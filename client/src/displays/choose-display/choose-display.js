import React, { useContext } from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Context } from '../..';

import './choose-display.css';

const ChooseDisplay = () => {
    const {store} = useContext(Context);

    return (
        <div className="choose-display theme-light-bg with-brand">
            <Container>
                <Row>
                    <Col md={8}>
                        <p className="title-font color-gray">Знайди репетитора для себе або стань репетитором!</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Link to="/signup" 
                            onClick={() => store.setClient(true)} 
                            className="name-font color-gray hover-theme-cl">Я шукаю репетитора</Link>
                    </Col>
                    <Col md={6}>
                        <Link to="/signup" 
                            onClick={() => store.setClient(false)} 
                            className="name-font color-gray hover-theme-cl">Я хочу стати репетитором</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ChooseDisplay;