//react import
import React from 'react';
//css import
import './work.css'

const work = () => {
    return (
        <div className='work-main-div pt-5'>
            <h1 className='text-white mb-5'> Here are some of <span className='common-color' >our works</span></h1>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-around">
                            <img src={require('./carousel-1.png')} className=" w-25" alt="..."/>
                            <img src={require('./carousel-2.png')} className=" w-25" alt="..."/>
                            <img src={require('./carousel-3.png')} className=" w-25" alt="..."/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-around">
                                <img src={require('./carousel-4.png')} className=" w-25" alt="..."/>
                                <img src={require('./carousel-5.png')} className=" w-25" alt="..."/>
                                <img src={require('./carousel-3.png')} className=" w-25" alt="..."/>
                        </div>
                    </div>
                </div>
                <div className='cri'>
                    <ol className="carousel-indicators ">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default work;