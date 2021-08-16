import React from 'react'
import HomeProfile from './HomeProfile'
import NavBar from '../Layout/NavBar'

export default function Achievements() {
    return (
        <div>
            <NavBar/>
        <div className="Container">
            <HomeProfile/>
            <p>These are my achievements</p>
        </div>
        </div>
    )
}
