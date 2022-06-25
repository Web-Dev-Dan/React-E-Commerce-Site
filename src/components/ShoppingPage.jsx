import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import './ShoppingPage.css';

export default function ({ category, closeShoppingPage }) {
    const [isLoading, setIsLoading] = useState(true);

    // const shoppingData = () => {

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setIsLoading(false);
                data.map(() => {
                    return <ItemCard />
                });
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    // }

    return (
        <div className="shopping-page">
            <div className="shopping-page__header">
                <button onClick={closeShoppingPage} className="shopping-page__button btn-primary">
                    <i className="shopping-page__button--icon fa-solid fa-arrow-left"></i>
                </button>
                <h2 className="shopping-page__title">{category}</h2>
            </div>
            <div className="shopping-page__results">
                {/* {shoppingData()} */}
                {isLoading && <p>LOADING...</p>}
                {!isLoading && <ItemCard />}
                {/* <ItemCard
                    imgSource="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                />
                <ItemCard /> */}
            </div>
        </div>
    )
}