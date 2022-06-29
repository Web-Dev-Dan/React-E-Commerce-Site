
import './Modal.css';

const Modal = () => {
    return (
        <>
            <div className="modal-background"></div>
            <div className="modal-inner">
                <div className="modal">
                    <button className="modal__close-button btn-primary">
                        <i class="modal__close-button--icon fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Modal;