/* eslint-disable react-hooks/rules-of-hooks */
//react import
import React, { useState } from 'react';
//css import
import './review.css'

const review = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('myData')))
    const [data, setData] = useState({
        name: '',
        company: '',
        description: '',
        image: `${user.picture}`,
    })
    const getName = (e) => { setData({ ...data, name: `${e.target.value}` });}
    const getCompany = (e) => { setData({ ...data, company: `${e.target.value}` });}
    const getDescription = (e) => { setData({ ...data, description: `${e.target.value}` }); }
    
    const handleSubmit= ()=> {
    return fetch('https://evening-fortress-71039.herokuapp.com/addReview', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => console.log(data)); 
    }

    return (
        <div >
            <form action="">
                <input type="text" onBlur={getName} required className="order-form-inputs mt-5" placeholder="Your name" />
                <input type="text" onBlur={getCompany} required className="order-form-inputs mt-5" placeholder="Company’s name, Designation" />
                <input type="text" onBlur={getDescription} required className="order-form-inputs mt-5" placeholder="Description" />
                <small className="text-muted mt-5 ml-5">Add two reviews to See yours one in homepage</small>
                <button onClick={handleSubmit} className="btn common-button d-block ml-5 mt-5" type="submit">Submit</button>
            </form>
            </div>
    );
};

export default review;