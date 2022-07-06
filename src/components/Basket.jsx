
import BasketCard from './BasketCard';
import './Basket.css';

const Basket = ({ itemsInBasket, closeBasket, numberOfItems, totalBasketPrice, removeItem }) => {
    return (
        <div className="basket">
            {/* Close Button */}
            <button onClick={() => closeBasket()} className="basket__close-button btn-primary">
                <i className="basket__close-button--icon fa-solid fa-xmark"></i>
            </button>

            <h3 className="basket__header">Shopping Cart</h3>
            <div className="basket__content">
                {itemsInBasket.map(item => <BasketCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    imgSrc={item.imgSrc}
                    price={item.price}
                    removeItem={removeItem}
                />)}
            </div>
            <div className="basket__summary">
                <div className="summary__details">
                    <p className="summary__details--text">Items: {numberOfItems.length}</p>
                    <p className="summary__details--text">Total: ${totalBasketPrice.toFixed(2)}</p>
                </div>
                <button className="summary__button btn-primary">
                    <i className="summary__button--icon fa-solid fa-credit-card"></i>
                    <p className="summary__button--text">Proceed to Checkout</p>
                </button>
            </div>
        </div>
    )
}

export default Basket;