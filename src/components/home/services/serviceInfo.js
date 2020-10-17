import React from 'react';

const serviceInfo = ({ service }) => {
    return (
        <div className='border border-secondary rounded p-4 text-center ml-5 '>
            <img src={`data:image/png;base64,${service.image.img}`} className='service-info-img' alt="" />
            <br />
            <br/>
            <h3>{service.name}</h3>
            <br/>
            <p>{service.description}</p>
        </div>
    );
};

export default serviceInfo;