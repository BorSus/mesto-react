import React from 'react';
function PopupWithForm({ namePopup, popupTitle, textSubmitButton, isOpen, onClose, children }) {
  return (
    <>
      <div
        className={`popup popup_type_${namePopup} 
      ${isOpen ? `popup_opened` : ''}`}
        id={namePopup}
      >
        <div className="popup__container">
          <h2 className="popup__title">{popupTitle}</h2>
          <button
            className="popup__close"
            aria-label="Закрыть"
            type="button"
            onClick={onClose}
          ></button>
          <form className="popup__form" name={namePopup}>
            {children}
            <button className="popup__save" type="submit">
              {textSubmitButton}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default PopupWithForm;
