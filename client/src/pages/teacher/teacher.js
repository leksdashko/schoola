import React from 'react';
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../components/breadcrumbs';
import Schedule from '../../components/schedule/schedule';

import './teacher.css';

const Teacher = () => {
    return (
        <div className="teacher-page page-wrapper">
            <Container>

                <Breadcrumbs/>

                <div class="row">
                    <div class="col-md-5">
                        <div class="left-bar">
                            <div class="widget info-widget">
                                <div class="image">
                                    <img src="img/teacher-photo.jpg" alt="Преподаватель Иванова Анна"/>
                                </div>
                                <div class="data">
                                    <p><b>Последний вход на сайт:</b> 1 час назад</p>
                                    <p><b>Опыт работы:</b> 11 лет</p>
                                    <p><b>Место занятий:</b> У ученика, онлайн</p>
                                    <p><b>Город, район:</b> Киев, Нивки</p>
                                    <p><b>Возраст учеников: </b> 6-35 лет</p>
                                </div>
                            </div>
                            <div class="widget testimonials-widget">
                                <div class="top">
                                <div class="title">
                                    <h2>Отзывы (72 отзыва):</h2>
                                </div>
                                <div class="rating">
                                    <span>4.9</span>
                                </div>
                            </div>
                                <div class="testimonials">
                                    <div class="review">
                                        <div class="image">
                                            <img src="img/min-pupil-image.jpg" alt=""/>
                                        </div>
                                        <div class="data">
                                            <div class="top">
                                                <h3>Трофимов Влад</h3>
                                                <span>10.02.2020</span>
                                            </div>
                                            <p class="description" data-height="">В этом году сдаю английский на профильном уровне, поэтому без репетитора никак. Занимаюсь с методистом и репетитором, все уроки проходят легко, быстро, а самое главное насыщено! Всегда выношу для себя что-то новое. Материал подаётся разнообразно, из-за чего легче усваивать информацию.</p>
                                            <button data-replace="Свернуть отзыв">Показать весь отзыв</button>
                                        </div>
                                    </div>
                                    <div class="review">
                                        <div class="image">
                                            <img src="img/min-pupil-image.jpg" alt=""/>
                                        </div>
                                        <div class="data opened">
                                            <div class="top">
                                                <h3>Трофимов Влад</h3>
                                                <span>10.02.2020</span>
                                            </div>
                                            <p class="description">В этом году сдаю английский на профильном уровне, поэтому без репетитора никак.</p>
                                        </div>
                                    </div>
                                    <div class="review">
                                        <div class="image">
                                            <img src="img/min-pupil-image.jpg" alt=""/>
                                        </div>
                                        <div class="data">
                                            <div class="top">
                                                <h3>Трофимов Влад</h3>
                                                <span>10.02.2020</span>
                                            </div>
                                            <p class="description" data-height="">В этом году сдаю английский на профильном уровне, поэтому без репетитора никак. Занимаюсь с методистом и репетитором, все уроки проходят легко, быстро, а самое главное насыщено! Всегда выношу для себя что-то новое. Материал подаётся разнообразно, из-за чего легче усваивать информацию.</p>
                                            <button data-replace="Свернуть отзыв">Показать весь отзыв</button>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" class="theme-btn">Оставить отзыв</a>
                                <p class="more-wrap text-center"><a href="#" class="more-btn">Посмотреть больше отзывов</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="single-content">
                            <div class="top">
                                <div class="title">
                                    <h1>Иванова Анна</h1>
                                </div>
                                <p class="subjects"><a href="#">Английский язык</a>, <a href="#">математика</a></p>
                                <p class="price">200 грн/час</p>
                                <div class="btns-wrapper">
                                    <div class="btn">
                                        <a href="#" class="theme-btn">Подать заявку</a>
                                    </div>
                                    <div class="btn">
                                        <a href="#" class="transparent-btn">Добавить в избранное</a>
                                    </div>
                                </div>
                            </div>
                            <div class="info-block">
                                <div class="title"><h4>О репетиторе:</h4></div>
                                <div class="description">
                                    <p>Английский язык - современные методы изучения, быстро, качественно, эффективно, все уровни - от начинающего до продвинутого. Индивидуальный подход - для каждого ученика составляется индивидуальная программа учитывая цели изучения (для работы, для переезда за рубеж, для общения с англоязычными партнерами, подготовки к сдачи экзаменов и т.д.). Преподаванием занимаюсь с 2009 года. Одно время проживала в США, в Нью-Йорке. Английский - это легко, полезно и просто необходимо!</p>
                                </div>
                            </div>
                            <div class="info-block">
                                <div class="title"><h4>Уровни преподавания:</h4></div>
                                <div class="levels-wrapper">
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
                            <div class="info-block">
                                <div class="title"><h4>Образование:</h4></div>
                                <div class="education">
                                    <div class="row">
                                        <div class="col">
                                            <p><b>Учебное заведение:</b></p>
                                        </div>
                                        <div class="col-sm-8">
                                            <p>Киевский национальный торгово-экономический университет</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <p><b>Степень:</b></p>
                                        </div>
                                        <div class="col-sm-8">
                                            <p>магистр</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <p><b>Год окончания:</b></p>
                                        </div>
                                        <div class="col-sm-8">
                                            <p>2014</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <p><b>Дипломы:</b></p>
                                        </div>
                                        <div class="col-sm-8">
                                            <p><a href="#">Диплом магистра КНТУА</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="education">
                                    <div class="row">
                                        <div class="col">
                                            <p><b>Учебное заведение:</b></p>
                                        </div>
                                        <div class="col-sm-8">
                                            <p>Киевский национальный торгово-экономический университет</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <p><b>Степень:</b></p>
                                        </div>
                                        <div class="col-sm-8">
                                            <p>магистр</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <p><b>Год окончания:</b></p>
                                        </div>
                                        <div class="col-sm-8">
                                            <p>2014</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <p><b>Дипломы:</b></p>
                                        </div>
                                        <div class="col-sm-8">
                                            <p><a href="#">Диплом магистра КНТУА</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="info-block">
                                <div class="title"><h4>Расписание репетитора:</h4></div>
                                <Schedule/>
                            </div>
                            <div class="info-block">
                                <div class="title"><h4>Блог репетитора:</h4></div>
                                <ul class="articles">
                                    <li><a href="#">7 психологических методов изучения английского языка</a></li>
                                    <li><a href="#">Зачем использовать черновик во время сдачи ЗНО по английскому</a></li>
                                    <li><a href="#">7 психологических методов изучения английского языка</a></li>
                                </ul>
                                <a href="#" class="theme-btn">Все блоги репетитора</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Teacher;