
import './ShoppingPage.css';

export default function ({ category, closeShoppingPage }) {
    return (
        <div className="shopping-page">
            <div className="shopping-page__header">
                <button onClick={closeShoppingPage} className="shopping-page__button btn-primary">
                    <i className="shopping-page__button--icon fa-solid fa-arrow-left"></i>
                </button>
                <h2 className="shopping-page__title">{category}</h2>
            </div>
            <div className="shopping-page__results">

            </div>
        </div>
    )
}