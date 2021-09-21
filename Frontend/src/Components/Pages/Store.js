import React from 'react'
import HomeProfile from './HomeProfile'
import NavBar from '../Layout/NavBar'

export default function Store() {
    return (
        <div>
            <NavBar/>
        <div className="Container">
            <HomeProfile/>
            <p>This is the store</p>
        </div>
        </div>
    )
}
