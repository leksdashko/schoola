import React, { useContext, useState } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Form} from "react-bootstrap";
import { Context } from '../..';

import './signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);

    return (
        <div className="signup-page page-split">
            <div className="split-background">
                <div className="col-6 theme-light-bg with-brand"></div>
            </div>
            <div className="page-wrapper">
                <Container>
                    <Row className="split-content align-items-center">
                        <Col md={6}>
                            <Breadcrumbs/>
                            
                            <p className="title-font">Реєстрація</p>

                            <div className="steps">
                                <p className="fw-light-bold">Крок 1 з 2</p>

                                <button className="text name-font color-gray hover-theme-cl">Я шукаю репетитора</button>
                                <button className="text name-font color-gray hover-theme-cl">Я хочу стати репетитором</button>
                            </div>

                            <p className="mt-3">
                                У Вас вже є профіль?  
                                <Link className="fw-light-bold underline hover-no-underline m-2" to="/login">Увійти</Link>
                            </p>
                        </Col>
                        <div className="offset-md-1 col-md-5">
                            <p className="fw-light-bold mb-4">Крок 2 з 2</p>

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
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className="mb-0">Придумайте пароль</Form.Label>
                                            <input 
                                                onChange={e => setPassword(e.target.value)}
                                                value={password}
                                                type="password" 
                                                name="password" 
                                                placeholder="********"
                                                className="field w-100" 
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className="mb-0">Підтвердіть пароль</Form.Label>
                                            <input type="password" className="field w-100" name="confirmPassword" placeholder="********"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                
                                <div className="text-center mt-5">
                                    <button onClick={() => store.registration(email,password)} type="submit" className="btn btn-theme">Створити профіль</button> 
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Signup;