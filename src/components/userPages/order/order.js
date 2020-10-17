/* eslint-disable react-hooks/rules-of-hooks */
//react import
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
//css import
import './order.css'

const order = () => {
    const { srn } = useParams();
    const [data, setData] = useState({
        orderName: '',
        email: '',
        serviceType: `${srn}`,
        description: '',
        price: '',
        action: 'pending',
    })
    const getName = (e) => { setData({ ...data, orderName: `${e.target.value}` });}
    const getEmail = (e) => { setData({ ...data, email: `${e.target.value}` });}
    const getDescription = (e) => { setData({ ...data, description: `${e.target.value}` });}
    const getPrice = (e) => { setData({ ...data, price: `${e.target.value}` });}
    console.log(data)

    const handleSubmit= ()=> {
    return fetch('https://evening-fortress-71039.herokuapp.com/addOrder', {
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
            {/* action="https://evening-fortress-71039.herokuapp.com/addService" */}
            <form >
                <input type="text" onBlur={getName} name="orderName" required className="order-form-inputs mt-5" placeholder="Your name / company’s name" />
                <input type="email" onBlur={getEmail} name="Email" required className="order-form-inputs" placeholder="Your email address" />
                <input type="text" name="serviceType" required className="order-form-inputs" value={srn} placeholder='Web Design' />
                {/* <input name="action" type="date" className='order-action-input' value="pending" /> */}
                <input type="text" onBlur={getDescription} name="description" required className="order-form-inputs" placeholder="Project Details" />
                <input type="number" onBlur={getPrice} name="price" required className="order-form-inputs order-price-input" placeholder="Price" />
                <button className="btn common-button d-block ml-5 mt-5" onClick={handleSubmit} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default order;