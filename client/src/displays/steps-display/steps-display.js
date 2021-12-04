import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import './steps-display.css';

const StepsDisplay = () => {
    
    return (
        <div className="steps-display">
            <Container>
                <Row>
                    <Col md={4} className="offset-md-2">
                        <div className="step-item step-item-bg-1">
                            <h3 className="name-font-large">Найди своего<br/>репетитора</h3>
                            <p>В нашей базе только<br/>проверенные преподаватели<br/>с реальными отзывами</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="offset-md-6">
                        <div className="step-item step-item-bg-2">
                            <h3 className="name-font-large">Подай заявку<br/>на обучение<br/>с репетитором</h3>
                            <p>Твой преподаватель сразу же<br/>получит уведомление</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="offset-md-3">
                        <div className="step-item step-item-bg-3">
                            <h3 className="name-font-large">Начни своё обучение</h3>
                            <p>Сразу после подтверждения<br/>преподавателем твоей заявки Вы<br/>можете  начинать работу</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default StepsDisplay;