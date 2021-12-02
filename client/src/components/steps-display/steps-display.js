import React, { useEffect, useState }  from 'react';
import {Container, Row} from "react-bootstrap";

import './steps-display.css';

const StepsDisplay = () => {
    
    return (
        <div className="steps-display">
            <Container>
                <Row>
                    <div className="offset-md-1 col-md-5">
                        <div className="about-item">
                            <h3>Найди своего репетитора</h3>
                            <p>В нашей базе только проверенные преподаватели с реальными отзывами</p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="offset-md-6 col-md-5">
                        <div className="about-item">
                            <h3>Подай заявку на обучение с репетитором</h3>
                            <p>Твой преподаватель сразу же получит уведомление</p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="offset-md-2 col-md-5">
                        <div className="about-item">
                            <h3>Начни своё обучение</h3>
                            <p>Сразу после подтверждения преподавателем твоей заявки вы можете  начинать работу</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default StepsDisplay;