
import React from 'react';
import './NotificationBar.css';

export default function NotificationBar({ text, handleClose }) {
    return (
        <div className="notification-bar">
            <button onClick={() => handleClose()} className="notification-bar__button btn-transparent">
                <i className="notification-bar__button--icon fa-solid fa-xmark"></i>
            </button>
            <p className="notification-bar__text">{text}</p>
        </div>
    )
}