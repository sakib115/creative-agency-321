/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';

const userServicesInfo = ({ service }) => {
    const [image, setImage] = useState('')
    useEffect(() => {
            fetch('https://evening-fortress-71039.herokuapp.com/services')
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        const element = data[i];
                        if (element.name === service.serviceType) {
                            setImage(element.image.img)
                        } 
                    }
                })
    }, [])
    
    console.log(image)
    return (
        <div className='userServicesInfo-main-div col-md-5 p-4'>
            <div className="d-flex justify-content-between">
                <div><img src={`data:image/png;base64,${image}`} className="w-25" alt=""/></div>
                <div  className={
                    service.action==='pending'?
                        'badge badge-primary h-75' :
                        service.action==='on going'?
                            'badge badge-warning h-75' :
                            'badge badge-success h-75'
                }><h4 >{service.action}</h4></div>
            </div>
            <div className="mt-5">
                <h4>{service.orderName}</h4>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default userServicesInfo;