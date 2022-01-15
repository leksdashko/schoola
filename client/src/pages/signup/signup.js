import React, { useContext, useEffect, useState } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Form} from "react-bootstrap";
import { Context } from '../..';

import './signup.css';

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        let isValid = true;

        for (const validation in validations) {
            switch(validation){
                case 'minLength':
                    isValid = value.length >= validations[validation];
                    setMinLengthError(!isValid);
                    break;
                case 'isEmpty':
                    isValid = value;
                    setEmpty(!isValid);
                    break;
                case 'isEmail':
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    isValid = re.test(String(value).toLowerCase());
                    setEmailError(!isValid);
                    break;
            }
        }
    }, [value]);

    useEffect(() => {
        if(isEmpty || minLengthError || emailError){
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [isEmpty, minLengthError, emailError]);

    return {
        isEmpty,
        minLengthError,
        emailError,
        inputValid
    }
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onBlur = (e) => {
        setDirty(true);
    }

    return {
        value,
        onChange,
        onBlur,
        ...valid,
        isDirty
    }
}

const Signup = () => {
    const {store} = useContext(Context);

    const email = useInput('', {isEmpty: true, isEmail: true});
    const password = useInput('', {isEmpty: true, minLength: 8});
    const confirmPassword = useInput('', {isEmpty: true, minLength: 8});

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
                                        onBlur={e => email.onBlur(e)}
                                        onChange={e => email.onChange(e)}
                                        value={email.value}
                                        type="email" 
                                        name="email" 
                                        placeholder="Введіть Вашу e-mail адресу" 
                                        className="field w-100" 
                                        autoFocus
                                    />
                                    {(email.isDirty && email.isEmpty) && <div class="error">Error</div>}
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group>
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
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
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
                                        </Form.Group>
                                    </Col>
                                </Row>
                                
                                <div className="text-center mt-5">
                                    <button 
                                        disabled={!email.inputValid || !password.inputValid || !confirmPassword.inputValid}
                                        onClick={() => store.registration(email,password,confirmPassword)} 
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