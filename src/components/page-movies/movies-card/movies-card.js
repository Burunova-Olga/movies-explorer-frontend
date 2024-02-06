// компонент одной карточки фильма

import React from 'react';

function MoviesCard({ card })
{
  const currentPath = window.location.pathname;
  const hours = Math.floor(card.duration/60);
  const minutes = card.duration % 60;

  return (
  <div className="card">
    <a target="_blank" href={card.trailerLink} className="card__trailer-link">
      <img src={{ backgroundImage: `url(${card.image.previewUrl})` }} class="card__preview" alt={card.nameRU}/>
    </a>      
    <button type="button" className="button card__button" /*onClick={handleLike}*/>
      <h2 className='card__name'>{card.nameRU}</h2>
      <div className={`card__pic ${currentPath == "/movies" ? `card__save` : `card__delete`}`}></div>
      <p className='card__duration'>{hours}ч {minutes}мин</p>
    </button>
  </div>
  );
}

export default MoviesCard;