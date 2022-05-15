
import React from 'react';
import { useState } from 'react';
import MenuButton from './MenuButton';

export default function UserOptions() {

    let [loggedIn, setLoggedIn] = useState(false);

    const logIn = () => {
        console.log('Logged In');
        setLoggedIn(true);
    }

    const logOut = () => {
        console.log('Logged Out');
        setLoggedIn(false);
    }

    return (
        <div className="nav__user-info">
            {loggedIn && <MenuButton icon="fa-basket-shopping" />}
            {loggedIn && <MenuButton icon="fa-heart" />}
            {loggedIn && <MenuButton icon="fa-user" handleClick={logOut} />}

            {!loggedIn && <MenuButton icon="fa-user" handleClick={logIn} />}
        </div>
    )
}