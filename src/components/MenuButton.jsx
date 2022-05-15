
import React from 'react';
import './MenuButton.css';

export default function MenuButton({ handleClick, icon }) {
    const buttonClass = 'nav__user-info__button--icon fa-solid';

    return (
        <button onClick={() => { handleClick() }} className="nav__user-info__button btn-primary">
            <i className={`${buttonClass} ${icon}`}></i>
        </button >
    )
}