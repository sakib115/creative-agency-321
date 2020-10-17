import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConciergeBell, faShoppingCart, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

const sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/user/order" className="text-dark">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/user/services" className="text-dark">
                        <FontAwesomeIcon icon={faConciergeBell} /> <span>Service list</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/user/review" className="text-dark">
                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default sidebar;