import React from 'react';

export default function SearchBar() {
    return (
        <div className="search-bar">
            <select className="search-bar__dropdown">
                <option>All</option>
                <option>Accessories</option>
                <option>Clothing</option>
                <option>Electronics</option>
            </select>
            <input className="search-bar__input" type="text" placeholder="Search..." />
            <button className="search-bar__button btn-primary">
                <i className="search-bar__button--icon fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}