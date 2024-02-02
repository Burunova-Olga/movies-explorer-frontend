// компонент одной карточки фильма

import React from 'react';

function MoviesCard({ card })
{
  const hours = Math.floor(card.duration/60);
  const minutes = card.duration % 60;

  return (
  <div className="card">
      <a target="_blank" href={card.trailerLink} className="card__trailer-link">
        <div style={{ backgroundImage: `url(${card.image.previewUrl})` }} className="card__preview" />
      </a>
      <div className="card__caption">
        <h3 className="card__name">{card.nameRU}</h3>
        <button type="button" className={`card__save`} /*onClick={handleLike}*/ aria-label="Сохранить" />
        <p className='card__duration'>{hours}ч {minutes}мин</p>
      </div>
    </div>
  );
}


export default MoviesCard;