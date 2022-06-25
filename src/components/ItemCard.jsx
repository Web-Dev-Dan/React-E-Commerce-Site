
export default function ItemCard({ imgSource }) {
    return (
        <div className="item-card">
            <div className="item-card__image-container">
                <img className="image-container__image" src={imgSource}></img>
            </div>
        </div>
    )
}