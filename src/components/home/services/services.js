/* eslint-disable react-hooks/rules-of-hooks */
//react import
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//css import
import './services.css'
//component imports
import ServiceInfo from './serviceInfo'
const services = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('https://evening-fortress-71039.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])
    const link = localStorage.getItem('linkName')

        return (
            <div className='container service-main-div mt-5 pt-5 row'>
                {
                    serviceData.map(service => 
                        <div className='col-md-4 col-sm-12 mb-5' ><Link to={`/${link}/order/${service.name}`} className='text-dark services-link' ><ServiceInfo service={service}> </ServiceInfo></Link></div>
                    )
                }
            </div>
        );
    };
    
    export default services;