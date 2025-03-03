import "../assets/styles/Modal.css";
import CloseIcon from "../assets/images/icon-close.svg";
import Rules from "../assets/images/image-rules.svg";

function Modal({ closeModal }) {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
        <h1>Rules</h1>
        <button onClick={closeModal} className="close-button">
            <img src={CloseIcon}/>
        </button>
        </div>
        <img src={Rules} className="rules-img"/>
      </div>
    </div>
  );
}

export default Modal;
