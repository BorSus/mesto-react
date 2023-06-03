/* === Popup добавление карточки ===*/
import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoad }) {
  //переменная состояния = cтейт, в котором содержится значение inputPlacename
  const [name, setName] = useState('');
  //переменная состояния = cтейт, в котором содержится значение inputImageLink
  const [link, setLink] = useState('');
  // Обработчик изменения инпута обновляет стейт name
  function handleChangeName(e) {
    setName(e.target.value);
  }
  // Обработчик изменения инпута обновляет стейт description
  function handleChangeLink(e) {
    setLink(e.target.value);
  }
  // Обработчик добавления новую карточку на сервер
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    onAddPlace({
      name,
      link
    });
  }
  return (
    <PopupWithForm
      namePopup="popupPlace"
      popupTitle="Новое место"
      textSubmitButton={isLoad ? 'Сохранение...' : 'Создать'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__valid-input">
        <input
          type="text"
          className="popup__input-text"
          name="name"
          id="inputPlacename"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          onChange={handleChangeName}
          required
        />
        <span className="popup__error" id="inputPlacename-error">
          &nbsp
        </span>
      </div>
      <div className="popup__valid-input">
        <input
          type="url"
          className="popup__input-text"
          name="link"
          id="inputImageLink"
          placeholder="Ссылка на картинку"
          onChange={handleChangeLink}
          required
        />
        <span className="popup__error" id="inputImageLink-error">
          &nbsp
        </span>
      </div>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
