import React, { useContext, useState, useEffect } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Form} from "react-bootstrap";
import { Context } from '../..';
import { useInput } from '../../hooks';

import './signup.css';

const Signup = () => {
    const {store} = useContext(Context);

    const email = useInput('', {isEmail: true, isEmpty: true});
    const password = useInput('', {isEmpty: true, minLength: 8});
    const confirmPassword = useInput('', {
        isEmpty: true, 
        minLength: 8,
        compare: {
            value: password.value, 
            message: 'Паролі не співпадають'
        }
    });

    const [isFormValid, setValidForm] = useState(false);

    useEffect(() => {
        if(email.isDirty && password.isDirty && confirmPassword.isDirty){
            setValidForm(true);
        }

        if(email.errorMessage || password.errorMessage || confirmPassword.errorMessage){
            setValidForm(false);
        }

    }, [email, password, confirmPassword]);

    const validation = () => {
        store.registration(email.value,password.value,confirmPassword.value);
    }

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
                                <Form.Group className={`mb-4${email.errorMessage ? ' has-error' : ''}`}>
                                    <Form.Label className="mb-0">E-mail</Form.Label>
                                    <input 
                                        onBlur={e => email.onBlur(e)}
                                        onChange={e => email.onChange(e)}
                                        value={email.value}
                                        type="email" 
                                        name="email" 
                                        placeholder="Введіть Вашу e-mail адресу" 
                                        className="field w-100" 
                                        autoFocus
                                    />
                                    {email.errorMessage && <div className="error-text">{email.errorMessage}</div>}
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group className={`${password.errorMessage ? ' has-error' : ''}`}>
                                            <Form.Label className="mb-0">Придумайте пароль</Form.Label>
                                            <input 
                                                onBlur={e => password.onBlur(e)}
                                                onChange={e => password.onChange(e)}
                                                value={password.value}
                                                type="password" 
                                                name="password" 
                                                placeholder="********"
                                                className="field w-100" 
                                            />
                                            {password.errorMessage && <div className="error-text">{password.errorMessage}</div>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className={`${confirmPassword.errorMessage ? ' has-error' : ''}`}>
                                            <Form.Label className="mb-0">Підтвердіть пароль</Form.Label>
                                            <input 
                                                onBlur={e => confirmPassword.onBlur(e)}
                                                onChange={e => confirmPassword.onChange(e)}
                                                value={confirmPassword.value}
                                                type="password" 
                                                name="confirmPassword" 
                                                placeholder="********"
                                                className="field w-100"
                                            />
                                            {confirmPassword.errorMessage && <div className="error-text">{confirmPassword.errorMessage}</div>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                
                                <div className="text-center mt-5">
                                    <button 
                                        disabled={!isFormValid}
                                        onClick={() => validation()} 
                                        type="submit" 
                                        className="btn btn-theme large">Створити профіль</button> 
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