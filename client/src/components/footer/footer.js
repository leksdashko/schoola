import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
    return (
        <footer id="footer">
            <div class="footer-wrapper">
                <Container>
                    <Row>
                        <Col md={3} class="order-lg-first">
                            <div class="footer-logo">
                                <Link to="#">Schoola</Link>
                            </div>
                            <div class="social">
                                <div class="title"><p>Свяжитесь с нами:</p></div>
                                <ul>
                                    <li><Link to="#"><img src="img/mail-ico.svg" /></Link></li>
                                    <li><Link to="#"><img src="img/mail-ico.svg" /></Link></li>
                                    <li><Link to="#"><img src="img/mail-ico.svg" /></Link></li>
                                </ul>
                            </div>
                            <Link to="/support/modal" class="theme-btn get-modal" data-modal="support-modal">Напишите нам</Link>
                            <div class="wallets-imgs">
                                <div id="vs"></div>
                                <div id="mc"></div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div class="footer-list">
                                <div class="title"><p>Полезные ссылки:</p></div>
                                <ul>
                                    <li><Link to="#">Репетиторы</Link></li>
                                    <li><Link to="#">Как это работает</Link></li>
                                    <li><Link to="#">Блог</Link></li>
                                    <li><Link to="#">Видео-уроки</Link></li>
                                    <li><Link to="#">Вопросы и ответы</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div class="footer-list">
                                <div class="title"><p>Популярные предметы:</p></div>
                                <ul>
                                    <li><Link to="#">Репетиторы</Link></li>
                                    <li><Link to="#">Как это работает</Link></li>
                                    <li><Link to="#">Блог</Link></li>
                                    <li><Link to="#">Видео-уроки</Link></li>
                                    <li><Link to="#">Вопросы и ответы</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div class="footer-list">
                                <div class="title"><p>Популярные города:</p></div>
                                <ul>
                                    <li><Link to="#">Репетиторы</Link></li>
                                    <li><Link to="#">Как это работает</Link></li>
                                    <li><Link to="#">Блог</Link></li>
                                    <li><Link to="#">Видео-уроки</Link></li>
                                    <li><Link to="#">Вопросы и ответы</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div class="footer-wrapper-bottom">
                <Container>
                    <Row>
                        <Col md={3}>
                            <p class="text">Все права защищены</p>
                        </Col>
                        <Col md={6}>
                            <div class="language-wrapper">
                                <ul id="lang-selector" class="language">
                                    <span class="lang-btn"><img src="img/chevron-bottom.svg" /></span>
                                    <li data-value="ru" class="active">рус</li>
                                    <li data-value="ua">укр</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={3}>
                            <p class="text date">2020</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;