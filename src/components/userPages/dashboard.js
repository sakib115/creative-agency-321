//react import
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//components import
import Sidebar from './sidebar/sidebar'
import UserNav from './userNav/userNav'
import Order from './order/order'
import UserServices from './userServices/userServices'
import Review from './review/review'
const dashboard = () => {
    return (
        <div>
            <UserNav></UserNav>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 order-main-div">
                    <Route path="/user/order/:srn" >
                        <Order></Order>
                    </Route>
                    <Route exact path="/user/order" >
                        <Order></Order>
                    </Route>
                    <Route path="/user/services" >
                        <UserServices></UserServices>
                    </Route>
                    <Route path="/user/review">
                        <Review />
                    </Route>
                </div>
            </div>
        </div>
    );
};

export default dashboard;