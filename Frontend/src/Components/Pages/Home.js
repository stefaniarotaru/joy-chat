import React from 'react'
import '../../Home.css';
import HomeProfile from './HomeProfile';
import Post from './Post';
import WritePost from './WritePost';

export default function Home() {
    return (
        <div className="Container">
        <HomeProfile/>
        <div className="PostsContainer">
        <WritePost/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        </div>
      </div>
        
    )
}

