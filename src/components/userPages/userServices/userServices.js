/* eslint-disable react-hooks/rules-of-hooks */
//react import
import React, { useState, useEffect } from 'react';
//css import
import './userServices.css'
//components imports
import UserServicesInfo from './userServicesInfo'

const userServices = () => {
    const [orderData, setOrderData] = useState([])
    const [userData, setUserData] = useState(localStorage.getItem('myData'))
    useEffect(() => {
        fetch('https://evening-fortress-71039.herokuapp.com/order')
            .then(res => res.json())
            .then(data => {if (data.email===userData.email) {
                setOrderData(data)
            }})
    }, [])
    return (
        <div className='userServices-main-div row'>
            {
                orderData.map(srv =>
                        <UserServicesInfo service={srv} className='' ></UserServicesInfo>
                    )
            }
        </div>
    );
};

export default userServices;