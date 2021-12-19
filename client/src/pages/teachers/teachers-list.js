import React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import {Container, Row, Col} from "react-bootstrap";
import { VerticalCard } from '../../components/card';
import Sorter from '../../components/sorter';
import Filter from '../../components/filter';

import './teachers.css';
import Pagination from '../../components/pagination/pagination';

const Teachers = () => {
    const items = [1,2,3,4,5,6,7];

    return (
        <div className="teachers-page page-wrapper">
            <Container>
                <Breadcrumbs/>
                        
                <p className="title-font mb-0">Викладачі</p>

                <Sorter/>

                <div className="content">
                    <Row>
                        <Col md={8}>
                            <Row>
                                {items.map(() => 
                                    <Col md={6}>
                                        <VerticalCard/>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Filter/>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="theme-light-bg with-brand page-floor">
                <Container>
                    <Row>
                        <div className="col-md-8 text-center">
                            <Pagination/>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Teachers;