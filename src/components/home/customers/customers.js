//react import
import React from 'react';
//css import
import './customers.css'
const customers = () => {
    return (
        <div className='container pt-5'>
            <div className="d-flex justify-content-around mt-5 mb-5 row">
                <div className="col-md-2 col-sm-4" ><img className='customer-logo' src={require('./google.png')} alt=""/></div>
                <div className="col-md-2 col-sm-4"><img className='customer-logo' src={require('./netflix.png')} alt=""/></div>
                <div className="col-md-2 col-sm-4"><img className='customer-logo' src={require('./slack.png')} alt=""/></div>
                <div className="col-md-2 col-sm-4"><img className='customer-logo' src={require('./airbnb.png')} alt=""/></div>
                <div className="col-md-2 col-sm-4"><img className='customer-logo' src={require('./uber.png')} alt=""/></div>
            </div>
        </div>
    );
};

export default customers;