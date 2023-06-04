import React from 'react';
function ImagePopup({ card, onClose }) {
  //!!У компонента только один элемент на верхнем уровне разметки, поэтому дополнительная обертка не нужна. OK
  return (
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
  );
}
export default ImagePopup;
