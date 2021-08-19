import React from 'react'
import '../../Home.css';
import HomeProfile from './HomeProfile';
import Post from './Post';
import WritePost from './WritePost';
import NavBar from '../Layout/NavBar';
import { Redirect } from 'react-router';
import Friends from './Friends';
import { useState, useEffect } from 'react';


export default function Home({authorized}) {
  // if(!authorized) {
  //   return <Redirect to="/welcome"/>
  // }


  const postsUrl = "http://localhost:8080/joy/api/v1/post";
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
      const fetchPosts = async() => {
          const response = await fetch(postsUrl)
          const postData = await response.json();
          setPosts(postData);
          console.log(postData);
      }
      fetchPosts();
  }, []);
    return (
      <div>
      <NavBar/>
        <div className="Container">
        <HomeProfile/>


        {/* <button onClick = {() => console.log(posts)}>Show posts</button> */}
        <div className="PostsContainer">
        <WritePost/>
        {posts.map(post => (<Post postContent={post.postContent}/>))}
        </div>
        <Friends/>
      </div>
        </div>
    )
}

