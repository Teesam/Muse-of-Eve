import React from 'react';
import './pagination.css';
import { Link } from 'react-router-dom';


const Pagination = () => {
    return (
        <div className = 'Pagination'>
            <div id = 'pager'>
                <Link to = '' id = 'previous'>
                    Previous
                </Link>
                <Link to = ''>
                    1
                </Link>
                <Link to = ''>
                    2
                </Link>
                <Link to = ''>
                    3
                </Link>
                <Link to = ''>
                    Next
                </Link>
            </div>
        </div>
    )
}

export default Pagination;
