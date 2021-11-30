import React from 'react';
import {Context} from '../../index';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";

import './header.css';

const Header = () => {
    return (
        <Navbar className="header" collapseOnSelect expand="lg">
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
                    <Nav>
                        <Link className="me-3 btn-outline-theme nav-link me-3" to="/signup">Стати репетитором</Link>
                        <Link eventKey={2} className="btn-theme nav-link" to="/login">Увійти</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;