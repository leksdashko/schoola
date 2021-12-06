import React, {useState, useRef} from 'react';

import { Link } from 'react-router-dom';
import {Container,Row,Col,Form} from "react-bootstrap";

import './search-display.css';

const SearchDisplay = () => {
    const queryInput = useRef(null);
    const [active, setActive] = useState(false);
    const [query, setQuery] = useState('');

    const queryHandler = (e) => {
        setActive(true);
        setQuery(e.target.value);
    }

    const blurHandler = () => {
        setActive(false);
    }

    const focusHandler = () => {
        setActive(true);
    }

    const toggleQueries = () => {
        queryInput.current.focus();
    };

    return (
        <div className="search-bar brands-bg">
            <Container>
                <h2 className="title-font color-gray">Потрібна допомога в навчанні?</h2>
                <h1 className="title-font color-gray">Знайди репетитора тут</h1>
            </Container>
            <div className={`${active?'active ':''}search-form-wrapper theme-light-bg with-brand`}>
                <Container>
                    <Row>
                        <Col md={9}>
                            <div className="search-container-wrapper">
                                <Form className="search-container">
                                    <input value={query} 
                                        onChange={e => queryHandler(e)} 
                                        onBlur={e => blurHandler(e)} 
                                        onFocus={focusHandler}
                                        ref={queryInput}
                                        autoCapitalize="off" autoComplete="off" autoCorrect="off"
                                        type="text" name="query" placeholder="Введіть або виберіть предмет зі списку" />
                                    <span className="search-select-btn" onClick={toggleQueries}></span>
                                    <button>Знайти репетитора</button>
                                </Form>
                                {active
                                &&
                                <div className="flex-column search-queries">
                                    <Link to="#" className="hover-theme-cl">Английский язык</Link>
                                    <Link to="#" className="hover-theme-cl">Английский язык</Link>
                                    <Link to="#" className="hover-theme-cl">Английский язык</Link>
                                    <Link to="#" className="hover-theme-cl">Английский язык</Link>
                                </div>}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SearchDisplay;