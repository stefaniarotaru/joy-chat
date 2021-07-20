import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import home from '../../Icons/home.png';
import profile from '../../Icons/profile.png';
import store from '../../Icons/store.png';
import achievement from '../../Icons/achievement.png';
import settings from '../../Icons/settings.png';
import logo from '../../Icons/logo.png';

export default function LoginModal() {
    const[loginModalIsOpen, setLoginModalIsOpen] = useState(false)
    return (

        <div>
            <button className="loginButton"
            onClick={() => setLoginModalIsOpen(true)}><Link className="loginLink" to="/login">Login</Link></button>
        
    <Modal className ="modal" isOpen={loginModalIsOpen} onRequestClose = {() => setLoginModalIsOpen(false)}>
        <div className="modalImgContainer">
            <img src={logo} className="modalImg" alt="logo"/>
            <h2>Log In</h2>
        </div>

        <input className="modalInput" type="text" placeholder="username"></input>
        <br/>
        <input className="modalInput" type="password" placeholder="password"></input>
        <br/>
        <button className="modalButton" type="submit" onClick={() => setLoginModalIsOpen(false)}>Log In</button>
        </Modal>
        </div>

    )
}
