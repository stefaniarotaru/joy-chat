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
import { useHistory } from 'react-router';
import verifyUserToken from '../../Services/UserCheck';

export default function LoginModal() {
    const history = useHistory();

    const loginUrl = "http://localhost:8080/joy/api/v1/login";
    const[loginModalIsOpen, setLoginModalIsOpen] = useState(false)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginMessage, setLoginMessage] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const [authorized, setAuthorized] = useState(false);

    const updateUsername = (e) => setUsername(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);

    const login = () => {
        axios.post(loginUrl, {username: username, password: password}).then((response) => {
            console.log(response.data)
            setLoginMessage("Welcome " + username + " !")
            localStorage.setItem("user", JSON.stringify(response.data.username))
            localStorage.setItem("token", JSON.stringify(response.data.accessToken))
            if (response.data.message) {
                setLoginStatus(false)
            } else {
                // window.location = "/profile"
                history.push("/")
                console.log("abcd")
                
            }
        }
        );
    };
    return (

        <div>
            <button className="loginButton"
            onClick={() => setLoginModalIsOpen(true)}>
                
            {!verifyUserToken() && <Link className="loginLink" >Login</Link>}
                {/* Login */}
                </button>
        
    <Modal className ="modal" isOpen={loginModalIsOpen} onRequestClose = {() => setLoginModalIsOpen(false)}>
        <div className="modalImgContainer">
            <img src={logo} className="modalImg" alt="logo"/>
            <h2>Log In</h2>
        </div>

        <input value={username} onChange={updateUsername} className="modalInput" type="text" placeholder="username"></input>
        <br/>
        <input value={password} onChange={updatePassword} className="modalInput" type="password" placeholder="password"></input>
        <br/>
        <button className="modalButton" type="submit" onClick={login}
            >Log In</button>
            <p>{loginMessage}</p>
            
        </Modal>
        </div>

    )
    }
