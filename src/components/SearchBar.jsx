import React from 'react';
import { useState } from 'react';

export default function SearchBar() {
    const [select, setSelect] = useState('all');
    const [inputText, setInputText] = useState('');
    const [selectStyles, setSelectStyles] = useState({ width: '8rem' });

    const handleSelectChange = (e) => {
        setSelect(e.target.value);

        // --- One Click Behind: ----
        if (select === 'all') {
            setSelectStyles({ width: '8rem' });
        } else if (select === 'accessories' || select === 'electronics') {
            setSelectStyles({ width: '15rem' });
        } else if (select === 'clothing') {
            setSelectStyles({ width: '12rem' });
        }
        // ---------------------------
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
            <select style={selectStyles}
                value={select}
                onChange={handleSelectChange}
                className="search-bar__dropdown"
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