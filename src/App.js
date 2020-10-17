import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//component imports
import Home from "./components/home/home"
import Login from './components/login/login'
import UserDashboard from './components/userPages/dashboard'
import AdminDashboard from './components/adminPages/dashboard'
import PrivateRoute from './components/login/privateRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/user">
            <UserDashboard />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <AdminDashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
