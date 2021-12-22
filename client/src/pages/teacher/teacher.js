import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs';
import Schedule from '../../components/schedule/schedule';

import './teacher.css';
import photo from '../../static/card-photo.jpg';
import WidgetTestimonial from '../../widgets/widget-testimonial/widget-testimonial';

const Teacher = () => {
    return (
        <div className="teacher-page page-wrapper">
            <Container>

                <Breadcrumbs/>

                <Row>
                    <Col md={4}>
                        <div className="widget info-widget">
                            <div className="image">
                                <Image src={photo} alt="Викладач Іванова Анна"/>
                            </div>
                            <div className="p-30">
                                <p><b>Последний вход на сайт:</b> 1 час назад</p>
                                <p><b>Опыт работы:</b> 11 лет</p>
                                <p><b>Место занятий:</b> У ученика, онлайн</p>
                                <p><b>Город, район:</b> Киев, Нивки</p>
                                <p className='mb-0'><b>Возраст учеников: </b> 6-35 лет</p>
                            </div>
                        </div>

                        <WidgetTestimonial/>
                    </Col>
                    <Col md={8}>
                        <div className="ps-3">
                            <div className="top">
                                <div className="title">
                                    <h1 className="title-font">Олександр</h1>
                                </div>
                                <div>
                                    <Link to="#" className='fw-light-bold hover-underline'>Английский язык</Link>, <Link to="#" className='fw-light-bold hover-underline'>математика</Link>
                                </div>
                                <p className="name-font mt-3">200 грн/час</p>
                                <div className="mb-4">
                                    <button className="btn btn-theme large">Подать заявку</button>
                                    <button className="btn btn-outline-theme large ms-3">Зберегти</button>
                                </div>
                            </div>
                            <div className="info-block mt-5">
                                <h4 className="name-font-small mb-3">Про викладача:</h4>
                                <p>Английский язык - современные методы изучения, быстро, качественно, эффективно, все уровни - от начинающего до продвинутого. Индивидуальный подход - для каждого ученика составляется индивидуальная программа учитывая цели изучения (для работы, для переезда за рубеж, для общения с англоязычными партнерами, подготовки к сдачи экзаменов и т.д.). Преподаванием занимаюсь с 2009 года. Одно время проживала в США, в Нью-Йорке. Английский - это легко, полезно и просто необходимо!</p>
                            </div>
                            <div className="info-block mt-5">
                                <h4 className="name-font-small mb-3">Рівні викладання:</h4>
                                <div className="levels-wrapper">
                                    <span>Подготовка к ЗНО (ВНО)</span>
                                    <span>Подготовка к ДПА (ГИА) (9 класс)</span>
                                    <span>7 - 9 классы</span>
                                    <span>Разговорный язык</span>
                                    <span>TOEFL, IELTS</span>
                                    <span>7 - 9 классы</span>
                                    <span>TOEFL, IELTS</span>
                                    <span>Подготовка к ДПА (ГИА) (9 класс)</span>
                                    <span>7 - 9 классы</span>
                                    <span>Разговорный язык</span>
                                </div>
                            </div>
                            <div className="info-block mt-5">
                                <h4 className="name-font-small mb-3">Освіта</h4>
                                <div className="education">
                                    <div className="row">
                                        <div className="col">
                                            <p><b>Учебное заведение:</b></p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p>Киевский национальный торгово-экономический университет</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p><b>Степень:</b></p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p>магистр</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p><b>Год окончания:</b></p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p>2014</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p><b>Дипломы:</b></p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p><Link to="#">Диплом магистра КНТУА</Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="education">
                                    <div className="row">
                                        <div className="col">
                                            <p><b>Учебное заведение:</b></p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p>Киевский национальный торгово-экономический университет</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p><b>Степень:</b></p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p>магистр</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p><b>Год окончания:</b></p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p>2014</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p><b>Дипломы:</b></p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p><Link to="#">Диплом магистра КНТУА</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="info-block mt-5">
                                <h4 className="name-font-small mb-4">Розклад викладача:</h4>
                                <Schedule/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Teacher;