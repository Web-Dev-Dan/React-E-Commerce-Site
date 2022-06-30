import React from 'react';
import './Navbar.css'
import SearchBar from './SearchBar';
import UserOptions from './UserOptions';

export default function Navbar({ handleLogin, returnToHomePage, itemsInBasket }) {
    // let loggedIn = true;

    return (
        <nav className="nav">
            <img onClick={() => returnToHomePage} className="nav__logo" src="../imgs/logo.png"></img>
            <div className="nav__options">
                {/* <SearchBar /> */}
                <UserOptions
                    handleLogin={handleLogin}
                    itemsInBasket={itemsInBasket}
                />
            </div>
        </nav>
    )
}