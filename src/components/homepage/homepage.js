import React from 'react'
import Login from '../login/login'
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className='homepage' >
            <h1>Hello  Homepage</h1>
            <div className='button' onClick={()=> setLoginUser({})} >Log Out </div>
        </div>
    )
}

export default Homepage