//react import
import React from 'react';
import {
  Link
} from "react-router-dom";
//css import
import './nav.css'
const nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to='/'><img className=" nav-logo" src={require('./logo.png')} alt=""/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto justify-content-center">
                <li className="nav-item active mr-4">
                    <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-4" to=''>Our portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-4" >Services</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-4" to=''>Contact Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-4" to='login'><button className="common-button mt-n1">Login</button></Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    );
};

export default nav;