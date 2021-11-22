import React from 'react'
import Button from './Button'
import {ReactComponent as Logo} from '../logo.svg'
import {FaGlobe,FaAngleDown} from 'react-icons/fa'

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Logo/>
            </div>
            <div className="btns">
                <Button cls="lang-btn">
                    <FaGlobe/>
                    English
                    <FaAngleDown/>
                </Button>
                <Button cls="sign-in-btn">
                    sign in
                </Button>
            </div>
        </nav>
    )
}

export default NavBar
