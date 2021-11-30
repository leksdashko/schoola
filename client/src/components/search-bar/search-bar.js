import React from 'react';

import './search-bar.css';
import chevron from './chevron-bottom.svg';
import Container from "react-bootstrap/Container";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="search-text-wrapper">
                <Container>
                    <div className="search-title">
                        <h2>Потрібна допомога в навчанні?</h2>
                        <h1>Знайди репетитора тут</h1>
                    </div>
                </Container>
            </div>
            <div className="search-form-wrapper">
                <Container>
                    <div className="row">
                        <div className="col-md-10">
                            <form action="#" id="search-form">
                                <div className="search-container">
                                    <input type="text" autocapitalize="off" autocomplete="off" autocorrect="off" name="s" placeholder="Введите или выберите предмет из списка" />
                                    <span id="search-select-btn" className="search-select-btn"><img src={chevron} /></span>
                                    <button for="search-form">Знайти репетитора</button>
                                </div>
                                <div className="search-queries-wrapper">
                                    <div className="search-queries">
                                        <ul>
                                            <li>Английский язык</li>
                                            <li>Английский язык</li>
                                            <li>Английский язык</li>
                                            <li>Английский язык</li>
                                            <li>Английский язык</li>
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