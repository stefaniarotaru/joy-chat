import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import home from '../../Icons/home.png';
import profile from '../../Icons/profile.png';
import store from '../../Icons/store.png';
import achievement from '../../Icons/achievement.png';
import settings from '../../Icons/settings.png';
import logo from '../../Icons/logo.png';
import axios from 'axios';


export default function RegisterModal() {

    const registerUrl = "http://localhost:8080/joy/api/v1/registration";
    const roles= ["ROLE_USER"];
    const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
    const [repeatPassword, repeatSetPassword] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerMessage, setRegisterMessage] = useState("");

    const updateUsername = (e) => setUsername(e.target.value);
    const updateEmail = (e) => setEmail(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);

    const register =  {
        if(password == repeatPassword) {
        axios.post(registerUrl, {username, email, password,roles})
        .then(function (response) {
            alert("register succesfulss")
            window.location="/login"
    })
    } else {alert("incorect password")}
  }

    return (
        <div>
            <button className="loginButton"
            onClick={() => setRegisterModalIsOpen(true)}>
                <Link className="loginLink" >Register</Link>
                Register
            </button>
            <Modal className="modal" isOpen={registerModalIsOpen} onRequestClose = {() => setRegisterModalIsOpen(false)}>

            <div className="modalImgContainer">
                <img src={logo} className="modalImg" alt="logo"/>
                <h2>Register</h2>
                </div>

                <input value={username} onChange={updateUsername} className="modalInput" type="text" placeholder="username"></input>
                <br/>
                <input value={email} onChange={updateEmail} className="modalInput" type="text" placeholder="email"></input>
                <br/>
                <input value={password} onChange={updatePassword} className="modalInput" type="password" placeholder="password"></input>
                <br/>
                <input value={repeatPassword} onChange={repeatSetPassword} className="modalInput" type="password" placeholder="password"></input>
                <br/>
                <button className="modalButton" type="submit" onClick={() => {
                    register();
                    setRegisterModalIsOpen(false);
                    }}>Register</button>
                <p>{registerMessage}</p>
            </Modal>
        </div>
    )
}
