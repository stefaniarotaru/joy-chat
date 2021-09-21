import React from 'react'
import '../../Home.css';
import HomeProfile from './HomeProfile';
import Post from './Post';
import WritePost from './WritePost';
import NavBar from '../Layout/NavBar';
import { Redirect } from 'react-router';
import Friends from './Friends';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { verify } from 'jsonwebtoken';



export default function Home() {

  const postsUrl = "http://localhost:8080/joy/api/v1/post";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
          axios.get(postsUrl).then(res => {
        setPosts(res.data)
        console.log(res.data)
      })
  }, [])

    return (
      <div>
        
      <NavBar/>
        <div className="Container">
        <HomeProfile/>

        <div className="PostsContainer">
        <WritePost/>
        {/* {posts.map(post => (<Post postContent={post.postContent} upvotes={post.upvotes}/>))} */}
        {posts.map(post => (<Post post={post}/>))}
        </div>

        <Friends/>
      </div>
        </div>
    )
}

