import React from 'react';
import './Navbar.css'
import UserOptions from './UserOptions';

export default function Navbar() {
    let loggedIn = true;

    return (
        <nav className="nav">
            <img className="nav__logo" src="../imgs/logo.png"></img>
            <UserOptions />

            {/*
            {loggedIn ?
                <div className="nav__user-info">
                    <button className="nav__user-info__button btn-primary">
                        <i class="nav__user-info__button--icon fa-solid fa-basket-shopping"></i>
                    </button>
                    <button className="nav__user-info__button btn-primary">
                        <i class="nav__user-info__button--icon fa-solid fa-heart"></i>
                    </button>
                    <button className="nav__user-info__button btn-primary">
                        <i class="nav__user-info__button--icon fa-solid fa-user"></i>
                    </button>
                </div> :
                <div className="nav__user-info">
                    <button className="nav__user-info__button btn-primary">
                        <i class="nav__user-info__button--icon fa-solid fa-user"></i>
                    </button>
                </div>
            }
            */}
        </nav>
    )
}