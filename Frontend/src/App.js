import './App.css';
// import React, {Component} from 'react';
import NavBar from './Components/Layout/NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Profile from './Components/Pages/Profile';
import Store from './Components/Pages/Store';
import Achievements from './Components/Pages/Achievements';
import Settings from './Components/Pages/Settings';
import Home from './Components/Pages/Home';
import HomeProfile from './Components/Pages/HomeProfile';
import Post from './Components/Pages/Post';
import WritePost from './Components/Pages/WritePost';

function App() {
  return (
    <div>
    <Router>
      
      <NavBar />

      <Route exact path="/"><Home/></Route>

      <Route path="/profile"><Profile/></Route>

      <Route path="/store"><Store/></Route>

      <Route path="/achievements"><Achievements/></Route>

      <Route path="/settings"><Settings/></Route>
      
    </Router>

    </div>
  );
}

export default App;
