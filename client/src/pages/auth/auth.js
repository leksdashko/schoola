import React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Form} from "react-bootstrap";

import './auth.css';

const Auth = () => {
    return (
        <div className="auth-page page-wrapper">
            <Container>
                <Breadcrumbs/>
                        
                <p className="title-font mb-4">Вхід</p>

                <Row>
                    <Col md={5}>
                        <Form>                  
                            <Form.Group className="mb-4">
                                <Form.Label className="mb-0">E-mail</Form.Label>
                                <input type="email" className="field w-100" name="email" placeholder="Введіть Вашу e-mail адресу" autoFocus/>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label className="mb-0">Пароль</Form.Label>
                                <input type="password" className="field w-100" name="password" placeholder="********"/>
                            </Form.Group>
                            <div className="text-center mt-5">
                                <button type="submit" className="btn btn-theme">Увійти</button> 
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <div className="theme-light-bg with-brand page-floor">
                <div className="container">
                    <div className="row">
                        <div className="col-5 text-center">
                            <Link className="fw-light-bold underline hover-no-underline" to="/remind">Не пам'ятаю пароль</Link>
                            <p className="other-option mt-3">
                                У Вас ще немає профілю?  
                                <Link className="fw-light-bold underline hover-no-underline m-2" to="/signup">Зареєструватися</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;