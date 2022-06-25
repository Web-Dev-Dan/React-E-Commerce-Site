import React from 'react';

const CategoriesBox = ({ id, title, openShoppingPage }) => {

    // Temporarily access API data
    // function returnData() {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }

    return (
        <div key={id} className="categories-box">
            {/* <button onClick={() => returnData()} className="btn-primary categories-box__header">{title}</button> */}
            <button onClick={() => openShoppingPage(title)} className="btn-primary categories-box__header">{title}</button>
            <div className={`categories-box-img categories-box-img-${id}`}></div>
        </div >
    )
}

export default CategoriesBox;