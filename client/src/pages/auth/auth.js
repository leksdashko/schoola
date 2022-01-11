import React, { useContext, useState } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Form} from "react-bootstrap";
import { Context } from '../..';

import './auth.css';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);

    return (
        <div className="auth-page page-wrapper">
            <Container>
                <Breadcrumbs/>
                        
                <p className="title-font mb-4">Вхід</p>

                <Row>
                    <Col md={5}>
                        <div className="form">                  
                            <Form.Group className="mb-4">
                                <Form.Label className="mb-0">E-mail</Form.Label>
                                <input 
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    type="email" 
                                    name="email" 
                                    placeholder="Введіть Вашу e-mail адресу" 
                                    className="field w-100" 
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group>
                            <Form.Label className="mb-0">Пароль</Form.Label>
                                <input 
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    type="password"
                                    name="password" 
                                    placeholder="********"
                                    className="field w-100" 
                                />
                            </Form.Group>
                            <div className="text-center mt-5">
                                <button onClick={() => store.login(email,password)} type="submit" className="btn btn-theme">Увійти</button> 
                            </div>
                        </div>
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