/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import './comment.css'
import CommentInfo from './commentInfo'
const comment = () => {
    const [commentData, setCommentData] = useState([])
    useEffect(() => {
        fetch('https://evening-fortress-71039.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setCommentData(data.slice(-4,-1)))
    }, [])

    return (
        <div className='pt-5'>
            <div className='text-center mt-5 mb-5'>
                <h1>Client <span className="common-color">feedback</span> </h1>
            </div>
            <div className='container justify-content-around row d-flex'>
            {commentData.map(cmd =>
                <div className='col-md-4 col-sm-6 mb-5'><CommentInfo comments={cmd} ></CommentInfo></div>
            )}
            </div>
        </div>
    );
};

export default comment;