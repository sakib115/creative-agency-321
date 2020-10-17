/* eslint-disable react-hooks/rules-of-hooks */
//react import
import React, { useState } from 'react';
//css import
import './addAdmin.css'

const review = () => {
    const [data, setData] = useState({
        email: ''
    })
    const getEmail = (e) => { setData({email:`${e.target.value}`});}
    const handleSubmit= ()=> {
     fetch('https://evening-fortress-71039.herokuapp.com/addAdmin', {
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
                <h4 className='mt-4 ml-5'>Add Admin:</h4>
                <input onBlur={getEmail} type="email" name="email" required className="order-form-inputs mt-5" placeholder="Email" />
                <button onClick={handleSubmit} className="btn common-button d-block ml-5 mt-5" type="submit">Add</button>
            </form>
        </div>
    );
};

export default review;