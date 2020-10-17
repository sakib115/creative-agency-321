import React from 'react';

const commentInfo = ({comments}) => {
    return (
        <div className="border border-secondary rounded p-4 ml-5 ">
            <div className="d-flex mb-4">
                <div>
                    <img src={comments.image} className='comment-images mr-4' alt="" />
                </div>
                <div>
                    <h4>{comments.name}</h4>
                    <h4>{comments.job}</h4>
                </div>
            </div>
            <p>{comments.description}</p>
        </div>
    );
};

export default commentInfo;