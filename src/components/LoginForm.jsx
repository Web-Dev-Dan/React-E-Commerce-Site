
import React from 'react';
import './LoginForm.css';

export default function LoginForm({ handleClose }) {
    return (
        <div className="login-form">
            <button onClick={handleClose} className="btn-primary login-form__close-button">
                <i className="login-form__close-button--icon fa-solid fa-xmark"></i>
            </button>
            Login Form
        </div>
    )
}