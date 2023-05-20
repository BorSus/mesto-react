import React from 'react';

function Card({ card, userID, onCardClick, onIconDeleteClick }) {
  //console.log(`${userID} = ${card.owner._id}`);
  const ownerIsUser = userID === card.owner._id;
  //console.log(ownerIsUser);
  //Статус isLikedCard
  const isLikedCard = card.likes.some(like => like._id === userID);
  function handleClick() {
    // console.log(card.link, card.name, card.owner.name);
    onCardClick(card);
  }
  //console.log(isLikedCard);
  function handleIconDeleteClick() {
    onIconDeleteClick();
  }
  return (
    <>
      <article className="element">
        <button
          type="button"
          className={`element__delete ${!ownerIsUser ? `element__delete_hide` : ''}`}
          aria-label="Удалить"
          onClick={handleIconDeleteClick}
        ></button>
        <img onClick={handleClick} src={card.link} alt={card.name} className="element__img" />
        <div className="element__label">
          <h2 className="element__caption">{card.name}</h2>
          <div className="element__like-block">
            <button
              type="button"
              className={`element__like ${isLikedCard ? `element__like_active` : ''}`}
              aria-label="Нравится"
            ></button>
            <p className="element__like-score">{card.likes.length}</p>
          </div>
        </div>
      </article>
    </>
  );
}
export default Card;
