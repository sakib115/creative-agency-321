//react import
import React from 'react';
//css import
import './banner.css'
//component imports
import Nav from './nav/nav'
import { Link } from 'react-router-dom';
const banner = () => {
    return (
        <div className='banner-main-div'>
            <div className="container">
                <Nav className='mt-4'></Nav>
                <div className="row d-flex align-items-center">
                    <div className="col-md-5 col-sm-12">
                        <h1>Let’s Grow Your <br />Brand To The <br />Next Level</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        <button className="common-button"> <Link className='text-white' to=''> Hire us</Link></button>
                    </div>
                    <div className="col-md-7 col-sm-12"><h1><img src={require('./Frame.png')} alt="" className="img-fluid"/></h1></div>
                </div>
            </div>
        </div>
    );
};

export default banner;