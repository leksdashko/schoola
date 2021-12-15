import React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import {Container, Row, Col} from "react-bootstrap";
import VerticalCard from '../../components/card/vertical-card';
import Sorter from '../../components/sorter';
import Filter from '../../components/filter';

import './teachers.css';

const Teachers = () => {
    const items = [1,2,3,4,5,6,7];

    return (
        <div className="auth-page page-wrapper">
            <Container>
                <Breadcrumbs/>
                        
                <p className="title-font mb-0">Викладачі</p>

                <Sorter/>

                <div className="content">
                    <Row>
                        <Col md={9}>
                            <Row>
                                {items.map(() => 
                                    <Col md={5}>
                                        <VerticalCard/>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                        <Col md={3}>
                            <Filter/>
                        </Col>
                    </Row>
                </div>
            </Container>
            
        </div>
    );
};

export default Teachers;