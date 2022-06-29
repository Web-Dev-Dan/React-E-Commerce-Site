import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import Loader from './Loader';
import './ShoppingPage.css';

export default function ShoppingPage({ category, closeShoppingPage, moreDetailsClick }) {
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

                {/* {console.log(shoppingItems)} */}
                {shoppingItems.map(item => {
                    // console.log(item.title)
                    if (category === 'accessories') {
                        if (item.category === 'jewelery') {
                            return (< ItemCard
                                key={item.id}
                                id={item.id}
                                imgSource={item.image}
                                title={item.title}
                                price={item.price}
                                moreDetailsClick={moreDetailsClick}
                            />)
                        }
                    } else if (category === 'electronics') {
                        if (item.category === 'electronics') {
                            return (< ItemCard
                                key={item.id}
                                id={item.id}
                                imgSource={item.image}
                                title={item.title}
                                price={item.price}
                                moreDetailsClick={moreDetailsClick}
                            />)
                        }
                    } else if (category === 'clothing') {
                        if (item.category === "men's clothing" || item.category === "women's clothing") {
                            return (< ItemCard
                                key={item.id}
                                id={item.id}
                                imgSource={item.image}
                                title={item.title}
                                price={item.price}
                                moreDetailsClick={moreDetailsClick}
                            />)
                        }
                    } else {
                        return (< ItemCard
                            key={item.id}
                            id={item.id}
                            imgSource={item.image}
                            title={item.title}
                            price={item.price}
                            moreDetailsClick={moreDetailsClick}
                        />)
                    }
                    /* men's clothing, women's clothing, jewelery, electronics,   */

                })}




                {/* {shoppingData()} */}
                {/* <ItemCard imgSource="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" /> */}
                {/* <ItemCard /> */}



            </div>}
        </div >
    )
}