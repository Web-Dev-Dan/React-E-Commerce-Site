import React from 'react';
import './Navbar.css'
import UserOptions from './UserOptions';

export default function Navbar() {
    let loggedIn = true;

    return (
        <nav className="nav">
            <img className="nav__logo" src="../imgs/logo.png"></img>
            <UserOptions />
        </nav>
    )
}