import React from 'react';
import {Context} from '../index';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Schoola</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Репетитори</Nav.Link>
                        <Nav.Link href="#link">Як це працює?</Nav.Link>
                        <Nav.Link href="#link">Вибрані</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="join-buttons">
                    <div className="become-teacher-btn transparent-green-btn">
                        <a href="#">Стать репетитором</a>
                    </div>
                    <div className="join-btn">
                        <a href="#">Войти</a>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;