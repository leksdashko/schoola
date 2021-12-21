import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs';
import Schedule from '../../components/schedule/schedule';

import './teacher.css';
import photo from '../../static/card-photo.jpg';

const Teacher = () => {
    return (
        <div className="teacher-page page-wrapper">
            <Container>

                <Breadcrumbs/>

                <Row>
                    <Col md={4}>
                        <div className="widget info-widget">
                            <div className="image">
                                <Image src={photo} alt="Преподаватель Иванова Анна"/>
                            </div>
                            <div className="data">
                                <p><b>Последний вход на сайт:</b> 1 час назад</p>
                                <p><b>Опыт работы:</b> 11 лет</p>
                                <p><b>Место занятий:</b> У ученика, онлайн</p>
                                <p><b>Город, район:</b> Киев, Нивки</p>
                                <p className='mb-0'><b>Возраст учеников: </b> 6-35 лет</p>
                            </div>
                        </div>
                            <div className="widget testimonials-widget">
                                <div className="top">
                                <div className="title">
                                    <h2>Отзывы (72 отзыва):</h2>
                                </div>
                                <div className="rating">
                                    <span>4.9</span>
                                </div>
                            </div>
                                <div className="testimonials">
                                    <div className="review">
                                        <div className="image">
                                            <img src="img/min-pupil-image.jpg" alt=""/>
                                        </div>
                                        <div className="data">
                                            <div className="top">
                                                <h3>Трофимов Влад</h3>
                                                <span>10.02.2020</span>
                                            </div>
                                            <p className="description" data-height="">В этом году сдаю английский на профильном уровне, поэтому без репетитора никак. Занимаюсь с методистом и репетитором, все уроки проходят легко, быстро, а самое главное насыщено! Всегда выношу для себя что-то новое. Материал подаётся разнообразно, из-за чего легче усваивать информацию.</p>
                                            <button data-replace="Свернуть отзыв">Показать весь отзыв</button>
                                        </div>
                                    </div>
                                    <div className="review">
                                        <div className="image">
                                            <img src="img/min-pupil-image.jpg" alt=""/>
                                        </div>
                                        <div className="data opened">
                                            <div className="top">
                                                <h3>Трофимов Влад</h3>
                                                <span>10.02.2020</span>
                                            </div>
                                            <p className="description">В этом году сдаю английский на профильном уровне, поэтому без репетитора никак.</p>
                                        </div>
                                    </div>
                                    <div className="review">
                                        <div className="image">
                                            <img src="img/min-pupil-image.jpg" alt=""/>
                                        </div>
                                        <div className="data">
                                            <div className="top">
                                                <h3>Трофимов Влад</h3>
                                                <span>10.02.2020</span>
                                            </div>
                                            <p className="description" data-height="">В этом году сдаю английский на профильном уровне, поэтому без репетитора никак. Занимаюсь с методистом и репетитором, все уроки проходят легко, быстро, а самое главное насыщено! Всегда выношу для себя что-то новое. Материал подаётся разнообразно, из-за чего легче усваивать информацию.</p>
                                            <button data-replace="Свернуть отзыв">Показать весь отзыв</button>
                                        </div>
                                    </div>
                                </div>
                                <Link to="#" className="theme-btn">Оставить отзыв</Link>
                                <p className="more-wrap text-center"><Link to="#" className="more-btn">Посмотреть больше отзывов</Link></p>
                            </div>
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
                            <div className="info-block">
                                <div className="title"><h4>О репетиторе:</h4></div>
                                <div className="description">
                                    <p>Английский язык - современные методы изучения, быстро, качественно, эффективно, все уровни - от начинающего до продвинутого. Индивидуальный подход - для каждого ученика составляется индивидуальная программа учитывая цели изучения (для работы, для переезда за рубеж, для общения с англоязычными партнерами, подготовки к сдачи экзаменов и т.д.). Преподаванием занимаюсь с 2009 года. Одно время проживала в США, в Нью-Йорке. Английский - это легко, полезно и просто необходимо!</p>
                                </div>
                            </div>
                            <div className="info-block">
                                <div className="title"><h4>Уровни преподавания:</h4></div>
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
                            <div className="info-block">
                                <div className="title"><h4>Образование:</h4></div>
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
                            <div className="info-block">
                                <div className="title"><h4>Расписание репетитора:</h4></div>
                                <Schedule/>
                            </div>
                            <div className="info-block">
                                <div className="title"><h4>Блог репетитора:</h4></div>
                                <ul className="articles">
                                    <li><Link to="#">7 психологических методов изучения английского языка</Link></li>
                                    <li><Link to="#">Зачем использовать черновик во время сдачи ЗНО по английскому</Link></li>
                                    <li><Link to="#">7 психологических методов изучения английского языка</Link></li>
                                </ul>
                                <Link to="#" className="theme-btn">Все блоги репетитора</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Teacher;