import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import Loader from './Loader';
import './ShoppingPage.css';

export default function ShoppingPage({ category, closeShoppingPage }) {
    const [isLoading, setIsLoading] = useState(true);
    const [shoppingItems, setShoppingItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setIsLoading(false);
                setShoppingItems(data);
                // data.map(item => {
                //     // console.log(item.title)
                //     console.log('Finished getting API data...')
                //     shoppingItems = data;
                //     // console.log(shoppingItems)
                // });
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

            {!isLoading && <div className="shopping-page__results">

                {console.log('SHOPPING ITEMS:')}
                {console.log(shoppingItems)}
                {shoppingItems.map(item => {
                    console.log(item.title)
                    return (< ItemCard
                        imgSource={item.image}
                    />)
                })}




                {/* {shoppingData()} */}
                {/* <ItemCard imgSource="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" /> */}
                {/* <ItemCard /> */}



            </div>}
        </div >
    )
}