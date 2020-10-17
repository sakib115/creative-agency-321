import React from 'react';
import './userNav.css'
import { Link } from 'react-router-dom';
const userNav = () => {
    return (
        <div className="userNav-main-div">
            <Link to='/'><img src={require('./logo.png')} className='userNav-logo' alt=""/></Link>
        </div>
    );
};

export default userNav;