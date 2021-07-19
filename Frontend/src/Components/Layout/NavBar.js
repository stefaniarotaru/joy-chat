import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import home from '../../Icons/home.png';
import profile from '../../Icons/profile.png';
import store from '../../Icons/store.png';
import achievement from '../../Icons/achievement.png';
import settings from '../../Icons/settings.png';
import logo from '../../Icons/logo.png';

export default function NavBar() {
    const[loginModalIsOpen, setLoginModalIsOpen] = useState(false)
    const[registerModalIsOpen, setRegisterModalIsOpen] = useState(false)
    
    return (
        <header className="App-header">


        <div className="loginBar">
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

            <button className="loginButton"
            onClick={() => setRegisterModalIsOpen(true)}><Link className="loginLink" to="/register">Register</Link></button>
            <Modal className="modal" isOpen={registerModalIsOpen} onRequestClose = {() => setRegisterModalIsOpen(false)}>

            <div className="modalImgContainer">
                <img src={logo} className="modalImg" alt="logo"/>
                <h2>Register</h2>
                </div>

                <input className="modalInput" type="text" placeholder="username"></input>
                <br/>
                <input className="modalInput" type="text" placeholder="email"></input>
                <br/>
                <input className="modalInput" type="password" placeholder="password"></input>
                <br/>
                <button className="modalButton" type="submit" onClick={() => setRegisterModalIsOpen(false)}>Register</button>
            </Modal>
        </div>
           
        <div className="navBar">
            <Link to="/"><img src={logo} className="navBarIcon" alt="home"/></Link>
            {/* <span title="Home"><Link to="/"><img src={home} className="navBarIcon" alt="home"/></Link></span> */}
            <span title="My Profile"><Link to="/profile"><img src={profile} className="navBarIcon" alt="profile"/></Link></span>
            <span title = "Store"><Link to="/store"><img src={store} className="navBarIcon" alt="store"/></Link></span>
            <span title="Achievements"><Link to="/achievements"><img src={achievement} className="navBarIcon" alt="achievements"/></Link></span>
            <span title="Settings"><Link to="/settings"><img src={settings} className="navBarIcon" alt="settings"/></Link></span>
        </div>
        </header>
    )
}
