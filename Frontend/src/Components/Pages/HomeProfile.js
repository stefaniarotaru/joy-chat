import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../../Home.css';
//import logo from '../logo.svg'
import profile from '../../Icons/profile.png';
import achievements from '../../Icons/achievements.png';
import home from '../../Icons/home.png';
import store from '../../Icons/store.png';
import achievement from '../../Icons/achievement.png';
import settings from '../../Icons/settings.png';
import myPic from '../../Icons/myPic.jpg';

function HomeProfile() {

    return (
        <div className="UserProfile">
            <div className="UserDetails">
                <div className="PicBox">
                <Link to="/profile">
                <img src={myPic} className="ProfilePic" alt="profile-pic" />
                </Link>
                </div>
                <p>Jane Doe</p>
                <div className="AchievementContainer">
                    <div className="AchievementImg">
                        <img src={achievements} className="UserAchievements" alt="achievements" />
                    </div>
                    <div className="AchievementPoints">1234</div>
                </div>


                <input className="Search" type="text" placeholder="Search"></input>

                {/* <div className="UserProfileLinks">
                <Router>
                    <div className="VerticalAlign">
                        <div className="AlignIcon">
                        <span title = "Store">
                            <Link to="/store">
                                <img src={store} className="navBarIcon" alt="store"/>
                            </Link>
                        </span>
                        </div>
                        <div className="AlignText">
                        <Link className="App-link" to="/store">Store</Link>
                        </div>
                    </div>

                    <div className="VerticalAlign">
                        <div className="AlignIcon">
                        <span title="Achievements">
                            <Link to="/achievements">
                                <img src={achievement} className="navBarIcon" alt="achievements"/>
                            </Link>
                        </span>
                        </div>
                        <div className="AlignText">
                        <Link className="App-link" to="/achievements">Achievements</Link>
                        </div>
                    </div>

                    <div className="VerticalAlign">
                        <div className="AlignIcon">
                            <span title="Settings">
                                <Link to="/settings">
                                    <img src={settings} className="navBarIcon" alt="settings"/>
                                </Link>
                            </span>
                        </div>
                        <div className="AlignText">
                            <Link className="App-link" to="/settings">Settings</Link>
                        </div>
                    </div>
                </Router>
                </div> */}

                <div className="AdsContainer">
                    <h4>Ads Container</h4>
                </div>

            </div>
        </div>
    )
}

export default HomeProfile;