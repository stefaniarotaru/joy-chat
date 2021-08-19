import React from 'react'
import { Router, Route } from 'react-router-dom';
import '../../Home.css';
import LoginModal from '../Layout/LoginModal';
import RegisterModal from '../Layout/RegisterModal';
import verifyUserToken from '../../Services/UserCheck';

export default function WelcomePage() {
    return (
        <div>
            {/* <Router>
                <Route path = "/login">
            <LoginModal/>
                </Route>
                <Route path = "/register">
            <RegisterModal/>
                </Route>
            </Router> */}

            <h1>Welcome to Joy!</h1>
        <div className="loginBar">
            <LoginModal/>
            <RegisterModal/>
        </div>
        </div>
    )
}
