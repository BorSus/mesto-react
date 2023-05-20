import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
function App() {
  //Статус ProfilePopup
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  //Статус AddPlacePopup
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  //Статус EditAvatarPopup
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  //Статус ConfirmPopup
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  function handleDeleteIconClick() {
    setIsConfirmPopupOpen(true);
  }
  //Статус selectedCard
  const [selectedCard, setSelectedCard] = React.useState({});
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  // закрытие всех попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard({});
  }
  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onIconDeleteClick={handleDeleteIconClick}
      />
      <Footer />
      {/* === Popup редактирование профиля ===*/}
      <PopupWithForm
        namePopup="popupProfile"
        popupTitle="Редактировать профиль"
        textSubmitButton="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__valid-input">
          <input
            type="text"
            className="popup__input-text"
            id="inputName"
            name="name"
            placeholder="Имя профиля"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__error" id="inputName-error">
            &nbsp
          </span>
        </div>
        <div className="popup__valid-input">
          <input
            type="text"
            className="popup__input-text"
            name="about"
            id="inputDescription"
            placeholder="Описание профиля"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__error" id="inputDescription-error">
            &nbsp
          </span>
        </div>
      </PopupWithForm>
      {/* === Popup добавление места ===*/}
      <PopupWithForm
        namePopup="popupPlace"
        popupTitle="Новое место"
        textSubmitButton="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
            required
          />
          <span className="popup__error" id="inputImageLink-error">
            &nbsp
          </span>
        </div>
      </PopupWithForm>
      {/* === Popup редактирование аватара ===*/}
      <PopupWithForm
        namePopup="popupAvatar"
        popupTitle="Обновить аватар"
        textSubmitButton="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__valid-input">
          <input
            type="url"
            className="popup__input-text"
            name="avatar"
            id="inputAvatarLink"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error" id="inputAvatarLink-error">
            &nbsp
          </span>
        </div>
      </PopupWithForm>
      {/* === Popup подтверждения ===*/}
      <PopupWithForm
        namePopup="popupConfirm"
        popupTitle="Вы уверены?"
        textSubmitButton="Да"
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
      ></PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
