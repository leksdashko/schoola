import React from 'react';
import { Link } from 'react-router-dom';
import LangSelector from '../lang-selector';
import {Container, Row, Col, Nav, Image} from "react-bootstrap";

import './footer.css';
import Wallets from '../wallets/wallets';

const Footer = () => {
    return (
        <footer className="footer color-white gray-bg with-brand">
            <Container>
                <Row>
                    <Col md={3}>
                        <Link to="#" className="logo theme-color">Schoola</Link>
                        <p className="fw-extra-bold my-4">Свяжитесь с нами:</p>
                        <Nav className="flex-column">
                            <Link to="#"><Image src="img/mail-ico.svg" /></Link>
                            <Link to="#"><Image src="img/mail-ico.svg" /></Link>
                            <Link to="#"><Image src="img/mail-ico.svg" /></Link>
                        </Nav>
                        <button className="btn btn-theme large">Напишить нам</button>
                        <Wallets/>
                    </Col>
                    <Col md={3}>
                        <p className="fw-extra-bold">Полезные ссылки:</p>
                        <Nav className="flex-column footer-list">
                            <Link to="#" className="color-white hover-theme-light-cl">Репетиторы</Link>
                            <Link to="#" className="color-white hover-theme-light-cl">Как это работает</Link>
                            <Link to="#" className="color-white hover-theme-light-cl">Блог</Link>
                            <Link to="#" className="color-white hover-theme-light-cl">Видео-уроки</Link>
                            <Link to="#" className="color-white hover-theme-light-cl">Вопросы и ответы</Link>
                        </Nav>
                    </Col>
                    <Col md={3}>
                        <p className="fw-extra-bold">Популярные предметы:</p>
                        <Nav className="flex-column footer-list">
                            <Link to="#" className="color-white hover-theme-light-cl">Репетиторы</Link>
                            <Link to="#" className="color-white hover-theme-light-cl">Как это работает</Link>
                            <Link to="#" className="color-white hover-theme-light-cl">Блог</Link>
                            <Link to="#" className="color-white hover-theme-light-cl">Видео-уроки</Link>
                            <Link to="#" className="color-white hover-theme-light-cl">Вопросы и ответы</Link>
                        </Nav>
                    </Col>
                    <Col md={3}>
                        <p className="fw-extra-bold">Популярные города:</p>
                        <Nav className="flex-column footer-list">
                            <Link to="#" className="color-white hover-theme-light-cl">Репетиторы</Link>
                            <Link to="#" className="color-white hover-theme-light-cl">Как это работает</Link>
                            <Link to="#" className="color-white hover-theme-light-cl">Блог</Link>
                            <Link to="#" className="color-white hover-theme-light-cl">Видео-уроки</Link>
                            <Link to="#" className="color-white hover-theme-light-cl">Вопросы и ответы</Link>
                        </Nav>
                    </Col>
                </Row>
                <Row className="footer-bottom">
                    <Col md={3}>
                        <p>Все права защищены</p>
                    </Col>
                    <Col md={6}>
                        <LangSelector/>
                    </Col>
                    <Col md={3}>
                        <p className="text-end">2020</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;