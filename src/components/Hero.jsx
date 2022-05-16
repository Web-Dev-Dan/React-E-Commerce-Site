
import React from 'react';
import './Hero.css';

export default function Hero() {

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })

    return (
        <div className="hero">

        </div>
    )
}