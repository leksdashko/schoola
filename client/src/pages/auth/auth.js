import React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';

import './auth.css';

const Auth = () => {
    return (
        <div className="auth-page page-wrapper">
            <div className="container">
                <Breadcrumbs/>
                        
                <p className="title-font">Вхід</p>

                <div className="row">
                    <div className="col-md-5">
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

            <div className="theme-light-bg with-brand page-floor">
                <div className="container">
                    <div className="row">
                        <div className="col-5 text-center">
                            <a className="fw-light-bold underline hover-no-underline" href="/remind">Не пам'ятаю пароль</a>
                            <p className="other-option mt-3">
                                У Вас ще немає профілю?  
                                <a className="fw-light-bold underline hover-no-underline m-2" href="/signup">Зареєструватися</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;