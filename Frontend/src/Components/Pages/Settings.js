import React from 'react'
import HomeProfile from './HomeProfile'
import NavBar from '../Layout/NavBar'

export default function Settings() {
    return (
        <div>
            <NavBar/>
        <div className="Container">
            <HomeProfile/>
            <p>This is the Settings page</p>
        </div>
        </div>
    )
}
