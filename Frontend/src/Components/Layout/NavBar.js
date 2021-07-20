import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import home from '../../Icons/home.png';
import profile from '../../Icons/profile.png';
import store from '../../Icons/store.png';
import achievement from '../../Icons/achievement.png';
import settings from '../../Icons/settings.png';
import logo from '../../Icons/logo.png';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';


export default function NavBar() {
    const[loginModalIsOpen, setLoginModalIsOpen] = useState(false)
    const[registerModalIsOpen, setRegisterModalIsOpen] = useState(false)
    
    return (
        <header className="App-header">


        <div className="loginBar">
            <LoginModal/>
            <RegisterModal/>
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
