
export default function ItemCard({ imgSource, title, price }) {
    return (
        <div className="item-card">
            {/* Image */}
            <div className="item-card__image-container">
                <img className="image-container__image" src={imgSource}></img>
            </div>
            {/* Header */}
            {/* <h3 className="item-card__header">{title}</h3> */}
            {/* Price & Buy Button */}
            <div className="item-card__details">
                <p className="details__price">${price}</p>
                <button onClick={() => console.log('Item button clicked')} className="details__button btn-primary">
                    <i className="details__button--icon fa-solid fa-cart-plus"></i>
                </button>
            </div>
        </div>
    )
}