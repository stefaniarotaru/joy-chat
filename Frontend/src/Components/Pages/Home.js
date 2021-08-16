import React from 'react'
import '../../Home.css';
import HomeProfile from './HomeProfile';
import Post from './Post';
import WritePost from './WritePost';
import NavBar from '../Layout/NavBar';
import { Redirect } from 'react-router';
import Friends from './Friends';

export default function Home({authorized}) {
  if(!authorized) {
    return <Redirect to="/welcome"/>
  }
    return (
      <div>
      <NavBar/>
        <div className="Container">
        <HomeProfile/>
        <div className="PostsContainer">
        <WritePost />
        <Post/>
        {/* <Post/>
        <Post/>
        <Post/> */}
        </div>
        <Friends/>
      </div>
        </div>
    )
}

