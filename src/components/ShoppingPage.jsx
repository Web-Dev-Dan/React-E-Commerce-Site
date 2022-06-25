import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import Loader from './Loader';
import './ShoppingPage.css';

export default function ShoppingPage({ category, closeShoppingPage }) {
    const [isLoading, setIsLoading] = useState(true);



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



    return (
        <div className="shopping-page">
            <div className="shopping-page__header">
                <button onClick={closeShoppingPage} className="shopping-page__button btn-primary">
                    <i className="shopping-page__button--icon fa-solid fa-arrow-left"></i>
                </button>
                {category ? <h2 className="shopping-page__title">{category}</h2> : <h2 className="shopping-page__title">All</h2>}
            </div>

            {isLoading && <Loader />}

            <div className="shopping-page__results">
                {/* {shoppingData()} */}
                {!isLoading && <ItemCard />}
                {/* <ItemCard
                    imgSource="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                />
                <ItemCard /> */}
            </div>
        </div >
    )
}