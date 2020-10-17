import React from 'react';
import './projectForm.css'
const projectForm = () => {
    return (
        <>
            <div className='projectForm-main-div common-bg pt-5 mb-5'>
                <div className="container d-flex">
                    <div className="col-md-6 col-sm-12">
                        <h1 className='mb-4'>Let us handle your <br /> project, <span className="common-color">professionally.</span></h1>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <form action="">
                            <input type="email" class="form-control form-inputs mb-4 p-2 pl-4" required placeholder="Your email address"></input>
                            <input type="text" class="form-control form-inputs mb-4 p-2 pl-4" required placeholder="Your name / company’s name"></input>
                            <input type="text" class="form-control form-inputs mb-4 p-2 pl-4" required placeholder="Your message"></input>
                            <button className="btn common-button">Send</button>
                        </form>
                    </div>
                </div>
                <h6 className='mt-5 ml-5' >programming.hero.instructor@gmail.com have been added as admin</h6>
            </div>
        </>
    );
};

export default projectForm;