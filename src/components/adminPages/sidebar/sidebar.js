import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/admin/order" className="text-dark">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/admin/services" className="text-dark">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/admin/addAdmin" className="text-dark">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default sidebar;