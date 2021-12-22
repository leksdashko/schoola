import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import testimonialPhoto from '../../static/testimonial-photo.jpg';

import './widget-testimonial.css';

const WidgetTestimonial = () => {
    return (
        <div className="widget testimonials-widget">
            <div className="d-flex justify-content-between">
                <h2 className="name-font-small">Відгуки (72 відгуки):</h2>
                <div className="rating">
                    <span>4.9</span>
                </div>
            </div>
            <div className="testimonials">
                <div className="item d-flex justify-content-between">
                    <div>
                        <Image src={testimonialPhoto} width="80" height="80" alt="Стасік"/>
                    </div>
                    <div className="data ps-3">
                        <div className="top mb-2 d-flex justify-content-between">
                            <h3>Трофимов Влад</h3>
                            <span>10.02.2020</span>
                        </div>
                        <p className="description" style={{height:"42px"}}>В этом году сдаю английский на профильном уровне, поэтому без репетитора никак. Занимаюсь с методистом и репетитором, все уроки проходят легко, быстро, а самое главное насыщено! Всегда выношу для себя что-то новое. Материал подаётся разнообразно, из-за чего легче усваивать информацию.</p>
                        <button data-replace="Згорнути відгук" className="btn-more">Переглянути повний відгук</button>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-theme large mb-4 w-100">Залишити відгук</button>
                <Link to="#" className="btn-more">Переглянути більше відгуків</Link>
            </div>
        </div>
    );
};

export default WidgetTestimonial;