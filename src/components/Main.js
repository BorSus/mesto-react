import React, { useEffect, useState } from 'react';
import avatar from '../images/profile_avatar.jpg';
import { api } from '../utils/Api.js';
import Card from './Card';
function Main(props) {
  //переменная состояния = имя пользователя
  const [userName, setUserName] = useState('???');
  //переменная состояния = описание пользователя
  const [userDescription, setUserDescription] = useState('???');
  //переменная состояния = аватар пользователя
  const [userAvatar, setUserAvatar] = useState(avatar);
  //переменная состояния = id пользователя
  const [userID, setUserID] = useState('???');
  //переменная состояния = id пользователя
  const [cards, setCards] = useState([]);
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setUserID(userInfo._id);
        setCards(initialCards);
      })
      .catch(error => {
        console.error(`Ошибка при добавлении данных сервера: ${error}`);
      })
      .finally(() => {
        console.info('Добавление данных с сервера-завершено');
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-edite" onClick={props.onEditAvatar}>
            <img src={userAvatar} alt="Фото профиля" className="profile__avatar" />
          </div>
          <div className="profile__edit">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edite-button"
              aria-label="Редактировать профиль"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="Добавить"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {cards.map(cardItem => (
          <Card
            card={cardItem}
            userID={userID}
            key={cardItem._id}
            onCardClick={props.onCardClick}
            onIconDeleteClick={props.onIconDeleteClick}
          />
        ))}
      </section>
    </main>
  );
}
export default Main;
