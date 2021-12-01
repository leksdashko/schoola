import React from 'react';

import './search-bar.css';
import Container from "react-bootstrap/Container";

const SearchBar = () => {
    return (
        <div className="search-bar brands-bg">
            <div className="search-text-wrapper">
                <Container>
                    <div className="search-title">
                        <h2 className="title-font color-gray">Потрібна допомога в навчанні?</h2>
                        <h1 className="title-font color-gray">Знайди репетитора тут</h1>
                    </div>
                </Container>
            </div>
            <div className="search-form-wrapper theme-light-bg with-brand">
                <Container>
                    <div className="row">
                        <div className="col-md-10">
                            <form action="#" id="search-form">
                                <div className="search-container">
                                    <input type="text" placeholder="Введите или выберите предмет из списка" />
                                    <span className="search-select-btn"></span>
                                    <button>Знайти репетитора</button>
                                </div>
                                <div className="search-queries-wrapper">
                                    <div className="search-queries">
                                        <ul>
                                            <li>Английский язык</li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default SearchBar;