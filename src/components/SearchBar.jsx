import React from 'react';
import { useState } from 'react';

export default function SearchBar() {
    const [select, setSelect] = useState('all');
    const [inputText, setInputText] = useState('');

    const handleSelectChange = (e) => {
        setSelect(e.target.value);
    }

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }

    const handleSearchClick = () => {
        console.log(inputText);
        setInputText(''); // Not working...
    }

    return (
        <div className="search-bar">
            <select
                value={select}
                onChange={handleSelectChange}
                className={`search-bar__dropdown search-bar__dropdown--${select}`}
            >
                <option value="all">All</option>
                <option value="accessories">Accessories</option>
                <option value="clothing">Clothing</option>
                <option value="electronics">Electronics</option>
            </select>
            <input
                onChange={handleInputChange}
                className="search-bar__input"
                type="text"
                placeholder="Search..."
            />
            <button
                onClick={handleSearchClick}
                className="search-bar__button btn-primary"
            >
                <i className="search-bar__button--icon fa-solid fa-magnifying-glass"></i>
            </button>
        </div >
    )
}