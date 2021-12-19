import React from 'react';

import './pagination.css';

const Pagination = () => {
    return (
        <div className="pagination justify-content-center fw-extra-bold">
            <a href="#" className="arrow prev"></a>
            <a href="#">1</a>
            <a href="#">2</a>
            <span className="active">3</span>
            <a href="#">4</a>
            <a href="#">5</a>
            <span>...</span>
            <a href="#">24</a>
            <a href="#">25</a>
            <a href="#" className="arrow next"></a>
        </div>
    );
};

export default Pagination;