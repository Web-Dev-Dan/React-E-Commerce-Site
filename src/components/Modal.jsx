
import './Modal.css';

const Modal = ({ closeModalClicked, id }) => {
    return (
        <>
            <div className="modal-background"></div>
            <div className="modal-inner">
                <div className="modal">
                    <button onClick={closeModalClicked} className="modal__close-button btn-primary">
                        <i className="modal__close-button--icon fa-solid fa-xmark"></i>
                    </button>
                    <h1>{id}</h1>
                </div>
            </div>
        </>
    )
}

export default Modal;