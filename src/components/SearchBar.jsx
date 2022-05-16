import React from 'react';
import { useState } from 'react';

export default function SearchBar() {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    }

    const handleSeachClick = () => {
        console.log(inputText);
        setInputText(''); // Not working...
    }

    return (
        <div className="search-bar">
            <select className="search-bar__dropdown">
                <option>All</option>
                <option>Accessories</option>
                <option>Clothing</option>
                <option>Electronics</option>
            </select>
            <input
                onChange={handleInputChange}
                className="search-bar__input"
                type="text"
                placeholder="Search..."
            />
            <button onClick={handleSeachClick} className="search-bar__button btn-primary">
                <i className="search-bar__button--icon fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}