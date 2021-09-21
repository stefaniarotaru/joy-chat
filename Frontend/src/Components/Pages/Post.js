import React from 'react'
import '../../Home.css';
import profile from '../../Icons/profile.png';
import heart from '../../Icons/heart.png';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import { Upvote, upvote } from './Upvote';
import Upvote from './Upvote';


const Post = (props) => {

const post = props.post;

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
            {post.postContent}
        </div>
        <div className="PostComment">
    
            <Upvote upvotes = {post.upvotes} postId = {post.id}/>
               
            <div className="PostCommentBox">
                <input type="text" placeholder="Add a comment "></input>
            </div>
        </div>
    </div>
    )
}

export default Post;