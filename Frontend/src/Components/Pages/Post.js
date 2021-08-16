import React from 'react'
import '../../Home.css';
import profile from '../../Icons/profile.png';
import heart from '../../Icons/heart.png';
import axios from 'axios';
import { useState } from 'react';



export default function Post() {
    const postsUrl = "http://localhost:8080/joy/api/v1/post";
    const [post, setPost] = useState([]);
    axios.get(postsUrl).then(res => {
        console.log(res.data)
        // setPost(res.data.json());
    })
return (
    <div className="Post">
        <div className="PostUserInfo">
            <div className ="PostUserImg">
                <img className= "navBarIcon" src={profile}/>
            </div>
            <div className="PostUserName">
                <h3>User Name</h3>
            </div>
        </div>
        <div>
            ...
        </div>
        <div className="PostComment">
            <div className="PostHeart">
                <span title="Heart it!"><img className="navBarIcon" src={heart}/></span>
            </div>
            <div className="PostCommentBox">
                <input type="text" placeholder="Add a comment "></input>
            </div>
        </div>
    </div>
    )
}