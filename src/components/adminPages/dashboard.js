//react import
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//components import
import Sidebar from './sidebar/sidebar'
import AdminNav from './adminNav/userNav'
import Order from './order/order'
import AdminServices from './adminServices/adminServices'
import AddAdmin from './addAdmin/addAdmin'
const dashboard = () => {
    return (
        <div>
            <AdminNav></AdminNav>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 order-main-div">
                    <Route path="/admin/order/:srn" >
                        <Order></Order>
                    </Route>
                    <Route exact path="/admin/order" >
                        <Order></Order>
                    </Route>
                    <Route path="/admin/services" >
                        <AdminServices></AdminServices>
                    </Route>
                    <Route path="/admin/addAdmin">
                        <AddAdmin />
                    </Route>
                </div>
            </div>
        </div>
    );
};

export default dashboard;