import React from 'react';
import { Link } from 'react-router-dom';

import './pagination.css';

const Pagination = () => {
    return (
        <div className="pagination justify-content-center fw-extra-bold">
            <Link to="#" className="arrow prev"></Link>
            <Link to="#">1</Link>
            <Link to="#">2</Link>
            <span className="active">3</span>
            <Link to="#">4</Link>
            <Link to="#">5</Link>
            <span>...</span>
            <Link to="#">24</Link>
            <Link to="#">25</Link>
            <Link to="#" className="arrow next"></Link>
        </div>
    );
};

export default Pagination;