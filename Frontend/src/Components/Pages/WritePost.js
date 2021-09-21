import React from 'react'
import '../../Home.css';
import { useState } from 'react';
import axios from 'axios';

export default function WritePost() {
    const headers = {
        'Content-Type': 'application/json'
    };
    const postUrl = "http://localhost:8080/joy/api/v1/post"
    const[post, setPost] = useState("");
    const addPost = () => {
        axios.post(postUrl,
            {
                'postContent': post
            },
            { headers: headers })
            .then((res) => console.log(res.data));
    }

    return (
        <div className="WritePostBox">
            {/* <textarea placeholder="Update your status!"/> */}
                <div>
                    {/* <label>Post</label> */}
                    <textarea placeholder="Write a post!"
                    value={post} onChange={(e) =>
                    setPost(e.target.value)}/>
                    {/* <h3>{post}</h3> */}
                </div>
                <button onClick={addPost}>Post</button>
        </div>
    )
}
