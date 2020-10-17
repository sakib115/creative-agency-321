//react import
import React from 'react';
//css import
import './home.css'
//component imports
import Banner from './banner/banner'
import Customer from './customers/customers'
import Services from './services/services'
import Work from './work/work'
import Comment from './comment/comment'
import ProjectForm from './projectForm/projectForm'
const home = () => {
    return (
        <div>
            <Banner></Banner>
            <Customer ></Customer>
            <Services ></Services>
            <Work></Work>
            <Comment></Comment>
            <ProjectForm></ProjectForm>
        </div>
    );
};

export default home;