/* eslint-disable react-hooks/rules-of-hooks */
//react import
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
//css import
import './login.css'
//firebase imports
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig'

var provider = new firebase.auth.GoogleAuthProvider();
firebase.initializeApp(firebaseConfig);

const login = () => {
    
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const [adminData, setAdminData] = useState([])
    useEffect(() => {
        fetch('https://evening-fortress-71039.herokuapp.com/admins')
            .then(res => res.json())
            .then(data => setAdminData(data))
    }, [])
    const [massage, setMassage] = useState('')
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            localStorage.setItem('myData', JSON.stringify(result.additionalUserInfo.profile));
            for (let i = 0; i < adminData.length; i++) {
                const element = adminData[i];
                if (element.email === result.additionalUserInfo.profile.email) {
                    console.log(element)
                    localStorage.setItem('linkName', 'admin');
                    break
                } 
                else {localStorage.setItem('linkName', 'user');}
            }
            history.replace(from);
        }).catch(function (error) {
            setMassage(error.message)
        });
    }
    return (
        <div className='login-main-div'>
            <div className="d-flex justify-content-center">
                <img className='nav-logo mt-5' src={require('./logo.png')} alt=""/>
            </div>
            <div className="login-form mt-5">
                <h1 className='mt-3'>Login</h1>
                <button className="btn mt-5" onClick={handleGoogleSignIn}>
                    <div className="google-login">
                        <img src={require('./google.png')} className='google-logo' alt="" />
                        <h4>Continue With Google</h4>
                    </div>
                </button>
                <small className="text-danger">{massage}</small>
            </div>
        </div>
    );
};

export default login;