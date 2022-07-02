
import React from 'react';
import './Hero.css';
import HeroImage from '../imgs/hero-img.png';

export default function Hero({ openShoppingPage }) {

    // fetch('https://fakestoreapi.com/products')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     })

    return (
        <div className="hero">
            <div className="hero-div hero-div__text">
                <h2 className="hero-div__text--header">Shopping made easy</h2>
                <p className="hero-div__text--description">
                    Search our collection of original clothing, electronics and other accessories and have it delivered to you in just one click.
                </p>
                <button onClick={() => openShoppingPage('')} className="hero-div__text__button btn-primary">Start Shopping</button>
            </div>
            <div className="hero-div hero-div__image">
                <img className="hero__image" src={HeroImage} alt="A very happy shopper!" />
            </div>
        </div>
    )
}