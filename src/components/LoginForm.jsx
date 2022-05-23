
import React from 'react';
import './LoginForm.css';

export default function LoginForm({ handleClose }) {
    return (
        <div className="login-form">
            <button onClick={handleClose} className="btn-primary login-form__close-button">
                <i className="login-form__close-button--icon fa-solid fa-xmark"></i>
            </button>
            <img className="login-form__logo" src="../imgs/logo.png"></img>
            <div className="login-form__inner-container">
                <div className="login-form__icon">
                    <i className="login-form__icon--icon fa-solid fa-user"></i>
                </div>
                <div className="login-form__header">
                    <hr className="login-form__header--hr" />
                    <div className="login-form__header--title">
                        <h2>Sign In</h2>
                    </div>
                </div>

                <form autoComplete="off">

                </form>


            </div>

        </div>
    )
}