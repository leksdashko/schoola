import React, { useContext, useEffect, useState }  from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";

import './header.css';

const Header = () => {
    const {store} = useContext(Context);
    const [fixed, setFixed] = useState('');

    useEffect(() => {
        headerFixed();
        window.onscroll = () => {
            headerFixed();
        }
    }, []);

    function headerFixed() {
        setFixed(window.pageYOffset > 15 ? 'fixed' : '');
    }

    return (
        <Navbar className={`header ${fixed}`} collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link className="logo theme-color" to="/">Schoola</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="top-menu me-auto">
                        <Link className="active nav-link" to="/teachers">Репетитори</Link>
                        <Link className="nav-link" to="/how-it-works">Як це працює?</Link>
                        <Link className="nav-link" to="/favorites">Вибрані</Link>
                    </Nav>
                    {store.isAuth 
                    ?
                        <button onClick={() => store.logout()} className="btn-outline-theme">Вийти</button>
                    :
                        <Nav>
                            <Link className="me-3 btn-outline-theme nav-link me-3" to="/signup">Стати репетитором</Link>
                            <Link className="btn-theme nav-link" to="/login">Увійти</Link>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default observer(Header);