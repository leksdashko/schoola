import React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Form} from "react-bootstrap";
import Sorter from '../../components/sorter';

import './teachers.css';

const Teachers = () => {
    return (
        <div className="auth-page page-wrapper">
            <Container>
                <Breadcrumbs/>
                        
                <p className="title-font mb-1">Викладачі</p>

                <Sorter/>

                <div className="content">
                    <Row>
                        <Col md={3}>

                        </Col>
                        <Col md={9}>
                            <Row>
                                <Col md={6}>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
            
        </div>
    );
};

export default Teachers;