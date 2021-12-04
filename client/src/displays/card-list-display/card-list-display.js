import React from 'react';
import {Container, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './card-list-display.css';
import prepodImage from '../../static/card-photo.jpg';

const CardListDisplay = () => {
    return (
        <div className="card-list-display theme-bg">
            <Container>
                <h3 className="title-font color-white">Популярні вчителі:</h3>
                <div className="list">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-item">
                                <div className="rotate">
                                    <div className="overlay">
                                        <div className="min-info">
                                            <h4>Иванов Иван</h4>
                                            <p>Английский язык, математика</p>
                                        </div>
                                        <div className="overlay-img-wrap">
                                            <Image src={prepodImage} alt="Преподаватель Иванов Иван" />
                                        </div>
                                    </div>
                                    <div className="card-back-info">
                                        <div className="top-card-data">
                                            <div className="main-info">
                                                <h4>Иванов Иван</h4>
                                                <p><Link to="#">Английский язык</Link>, <Link to="#">математика</Link></p>
                                            </div>
                                            <div className="rating">
                                                <span>4.9</span>
                                                <Link to="#">72 отзыва</Link>
                                            </div>
                                        </div>
                                        <div className="last-card-data">
                                            <p className="location">Город, район: <Link to="#">Киев</Link>, <Link to="#">Нивки</Link></p>
                                            <p className="price">200 грн/час</p>
                                        </div>
                                        <Link to="#" className="btn btn-theme large">Подать заявку</Link>
                                        <p className="card-more"><Link to="#" className="btn-more">Подробнее о репетиторе</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-item">
                                <div className="rotate">
                                    <div className="overlay">
                                        <div className="min-info">
                                            <h4>Иванов Иван</h4>
                                            <p>Английский язык, математика</p>
                                        </div>
                                        <div className="overlay-img-wrap">
                                            <Image src={prepodImage} alt="Преподаватель Иванов Иван"/>
                                        </div>
                                    </div>
                                    <div className="card-back-info">
                                        <div className="top-card-data">
                                            <div className="main-info">
                                                <h4>Иванов Иван</h4>
                                                <p><Link to="#">Английский язык</Link>, <Link to="#">математика</Link></p>
                                            </div>
                                            <div className="rating">
                                                <span>4.9</span>
                                                <Link to="#">72 отзыва</Link>
                                            </div>
                                        </div>
                                        <div className="last-card-data">
                                            <p className="location">Город, район: <Link to="#">Киев</Link>, <Link to="#">Нивки</Link></p>
                                            <p className="price">200 грн/час</p>
                                        </div>
                                        <Link to="#" className="btn btn-theme large">Подать заявку</Link>
                                        <p className="card-more"><Link to="#" className="btn-more">Подробнее о репетиторе</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-item">
                                <div className="rotate">
                                    <div className="overlay">
                                        <div className="min-info">
                                            <h4>Иванов Иван</h4>
                                            <p>Английский язык, математика</p>
                                        </div>
                                        <div className="overlay-img-wrap">
                                            <Image src={prepodImage} alt="Преподаватель Иванов Иван"/>
                                        </div>
                                    </div>
                                    <div className="card-back-info">
                                        <div className="top-card-data">
                                            <div className="main-info">
                                                <h4>Иванов Иван</h4>
                                                <p><Link to="#">Английский язык</Link>, <Link to="#">математика</Link></p>
                                            </div>
                                            <div className="rating">
                                                <span>4.9</span>
                                                <Link to="#">72 отзыва</Link>
                                            </div>
                                        </div>
                                        <div className="last-card-data">
                                            <p className="location">Город, район: <Link to="#">Киев</Link>, <Link to="#">Нивки</Link></p>
                                            <p className="price">200 грн/час</p>
                                        </div>
                                        <Link to="#" className="btn btn-theme large">Подать заявку</Link>
                                        <p className="card-more"><Link to="#" className="btn-more">Подробнее о репетиторе</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CardListDisplay;