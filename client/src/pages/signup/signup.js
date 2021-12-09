import React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { Link } from 'react-router-dom';

import './signup.css';

const Signup = () => {
    return (
        <div className="signup-page page-split">
            <div className="split-background">
                <div className="col-6 theme-light-bg with-brand"></div>
            </div>
            <div className="page-wrapper">
                <div className="container">
                    <div className="split-content row align-items-center">
                        <div className="col-md-6">
                            <Breadcrumbs/>
                            
                            <p className="title-font">Реєстрація</p>

                            <p className="fw-light-bold">Крок 1 з 2</p>

                            <button className="text name-font color-gray hover-theme-cl">Я шукаю репетитора</button>
                            <button className="text name-font color-gray hover-theme-cl">Я хочу стати репетитором</button>

                            <p className="other-option mt-3">
                                У Вас вже є профіль?  
                                <Link className="fw-light-bold underline hover-no-underline m-2" to="/login">Увійти</Link>
                            </p>
                        </div>
                        <div className="offset-md-1 col-md-5">
                            <form>                  
                                <div className="form-group">
                                    <label className="control-label" for="loginform-email">E-mail</label>
                                    <input type="email" id="loginform-email" className="field w-100" name="LoginForm[email]" placeholder="Введіть Вашу e-mail адресу" autofocus aria-required="true"/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label" for="loginform-password">Пароль</label>
                                    <input type="password" id="loginform-password" className="field w-100" name="LoginForm[password]" value="" placeholder="********" aria-required="true"/>
                                </div>
                                <div className="text-center mt-4">
                                    <button type="submit" className="btn btn-theme">Вхід вхід</button> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;