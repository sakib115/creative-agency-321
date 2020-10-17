/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
//fireBase import
import * as firebase from "firebase/app";
import "firebase/auth";
const privateRoute = ({children, ...rest }) => {
    const [userData, setUserData] = useState(localStorage.getItem('myData'))
    return (
            <Route
                {...rest}
                render={({ location }) => userData ?
                    (children) :
                    ( <Redirect to={{ pathname: "/login", state: { from: location }}}/> )
                }
            />
    );
};

export default privateRoute;