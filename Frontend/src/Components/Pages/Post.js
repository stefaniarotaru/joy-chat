import React from 'react'
import '../../Home.css';
import profile from '../../Icons/profile.png';
import heart from '../../Icons/heart.png';


export default function Post() {
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
        <div>Post content
            fhwfhgwjhfgwfgwgefhwehjfwhjefhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhjwefjhwefhwef
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