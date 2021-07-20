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

    const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerMessage, setRegisterMessage] = useState("");

    const updateUsername = (e) => setUsername(e.target.value);
    const updateEmail = (e) => setEmail(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);

    const register = () => {
        axios.post(registerUrl, {username, email, password}).then(() =>
            setRegisterMessage("Registered successfully")
        );
    };

    return (
        <div>
            <button className="loginButton"
            onClick={() => setRegisterModalIsOpen(true)}><Link className="loginLink" to="/register">Register</Link></button>
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
                <button className="modalButton" type="submit" onClick={() => {
                    register();
                    // setRegisterModalIsOpen(false);
                    }}>Register</button>
                <p>{registerMessage}</p>
            </Modal>
        </div>
    )
}
