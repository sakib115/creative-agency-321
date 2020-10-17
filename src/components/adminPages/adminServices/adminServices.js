/* eslint-disable react-hooks/rules-of-hooks */
//react import
import React, { useState } from 'react';
//css import
import './adminServices.css'

const adminServices = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);

        fetch('https://evening-fortress-71039.herokuapp.com/addServices', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='userServices-main-div row'>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="name" onBlur={handleBlur} required className="form-control order-form-inputs mt-5" placeholder="Service title" />
                <input type="text" name="description" onBlur={handleBlur} required className="form-control order-form-inputs mt-5" placeholder="Description" />
                <h3 className='mt-4 ml-5 mb-n4' >logo:</h3>
                <input onChange={handleFileChange} type="file" required className="form-control order-form-inputs" placeholder="Logo" />
                <button className=" btn common-button d-block ml-5 mt-5" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default adminServices;