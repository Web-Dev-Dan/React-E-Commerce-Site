
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
                <button onClick={() => console.log('Add to basket clicked')} className="details__button btn-primary">
                    <i className="details__button--icon fa-solid fa-cart-plus"></i>
                </button>
            </div>
            <div className="item-card__more-info">
                <i className="more-info__icon fa-solid fa-circle-info"></i>
                <a onClick={() => console.log('More info clicked')} className="more-info__text btn-text-link">More Details</a>
            </div>
        </div>
    )
}