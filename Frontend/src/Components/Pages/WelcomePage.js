import React from 'react'
import { Router, Route } from 'react-router-dom';
import '../../Home.css';
import LoginModal from '../Layout/LoginModal';
import RegisterModal from '../Layout/RegisterModal';
import verifyUserToken from '../../Services/UserCheck';
import '../Pages/welcome.css';

export default function WelcomePage() {
    return (
        <div className="welcomePage">
            <h1>Welcome to Joy!</h1>
            <div className="loginBar">
                <LoginModal/>
                <RegisterModal/>
            </div>
            <div>
                <img src="https://cdn.discordapp.com/attachments/730458730331897949/878165670406258698/imageedit_13_3479207242.png"></img>
            </div>
        </div>
    )
}
