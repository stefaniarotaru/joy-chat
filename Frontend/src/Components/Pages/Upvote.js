import React, {useState, useEffect} from 'react'
import heart from '../../Icons/heart.png';
import '../../Home.css';
import axios from 'axios';


const Upvote = (props) => {
    const [upvote, setUpvote] = useState(props.upvotes);

    const postsUrl = "http://localhost:8080/joy/api/v1/post/";
    const postId = props.postId;
    const upvotePost = () => {
        axios.put(postsUrl + postId)
            .then(res => setUpvote(res.data));
    }
    
    return (
        <div className="UpvoteContainer">
            <div className="PostHeartCounter">{upvote}</div>
            <div className="PostHeart" onClick={upvotePost}>
                <img src={heart} alt="Heart" title="Heart it!"/>
            </div>
            
        </div>
    )
}

export default Upvote;
