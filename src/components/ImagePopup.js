import React from 'react';
function ImagePopup({ card, onClose }) {
  return (
    <>
      <div className={`popup ${card.name ? `popup_opened` : ''}`} id="popupFullImg">
        <figure className="popup__frame">
          <button
            className="popup__close"
            aria-label="Закрыть"
            type="button"
            id="closeImage"
            onClick={onClose}
          ></button>
          <img src={card.link} alt={card.name} className="popup__image" />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
      </div>
    </>
  );
}
export default ImagePopup;
