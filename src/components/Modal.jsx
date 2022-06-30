
import { useState, useEffect } from 'react';
import './Modal.css';
import Loader from './Loader';

const Modal = ({ closeModalClicked, id }) => {
    const [isLoading, setIsLoading] = useState(true);
    // const [item, setItem] = useState();
    const [imgSrc, setImgSrc] = useState();
    const [category, setCategory] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [rating, setRating] = useState();
    const [ratingNumber, setRatingNumber] = useState();
    const [price, setPrice] = useState();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);

                console.log(data[id - 1]);
                setImgSrc(data[id - 1].image);
                setCategory(data[id - 1].category);
                setTitle(data[id - 1].title);
                setDescription(data[id - 1].description);
                setRating(data[id - 1].rating.rate);
                setRatingNumber(data[id - 1].rating.count);
                setPrice(data[id - 1].price);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <div className="modal-background"></div>
            <div className="modal-inner">
                <div className="modal">
                    {/* Close Button */}
                    <button onClick={closeModalClicked} className="modal__close-button btn-primary">
                        <i className="modal__close-button--icon fa-solid fa-xmark"></i>
                    </button>

                    {/* Loader */}
                    {isLoading &&
                        <div className="loader-container">
                            <Loader />
                        </div>
                    }

                    {/* Details */}
                    {!isLoading &&
                        <div className="modal-container">
                            <div className="modal-container__left">
                                <img className="modal__image" src={imgSrc} alt="" />
                            </div>
                            <div className="modal-container__right">
                                <p className="modal__category">{category}</p>
                                <h3 className="modal__title">{title}</h3>
                                <p className="modal__description">{description}</p>
                                {/* <p>{rating} ({ratingNumber})</p> */}
                                <div className="modal__rating-container">
                                    <p className="rating-container__rate">{rating}</p>
                                    <div className="rating-container__star-container">
                                        <i class="star-container__star fa-solid fa-star"></i>
                                        <i class="star-container__star fa-solid fa-star"></i>
                                        <i class="star-container__star fa-solid fa-star"></i>
                                        <i class="star-container__star fa-solid fa-star"></i>
                                        <i class="star-container__star fa-solid fa-star-half"></i>
                                    </div>
                                    <p className="rating-container__count">({ratingNumber} ratings)</p>
                                </div>
                                <div className="modal__buttons">
                                    <p className="modal__price">${price}</p>
                                    <button onClick={() => console.log(`Add to basket clicked (Product: ${title})`)} className="modal__button btn-primary">
                                        <i className="modal__button--icon fa-solid fa-cart-plus"></i>
                                        <p className="modal__button--text">Add to Basket</p>
                                    </button>
                                </div>
                            </div>

                            {/* <h1>{id}</h1> */}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Modal;