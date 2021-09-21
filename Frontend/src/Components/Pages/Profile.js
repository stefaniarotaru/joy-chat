import React from 'react'
import HomeProfile from './HomeProfile'
import NavBar from '../Layout/NavBar'

export default function Profile() {
    return (
        <div>

        <NavBar/>
        <div className="Container">
            <HomeProfile/>
            <div>
            <p>This is my Profile</p>

            <input type="text" placeholder="enter a status"></input>
            </div>
        </div>
        </div>
    )
}
