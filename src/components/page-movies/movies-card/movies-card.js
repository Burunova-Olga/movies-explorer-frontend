// компонент одной карточки фильма

import React, {useEffect, useState} from 'react';

function MoviesCard({ card, onLike})
{
  const [typeBtn, setTypeBtn] = useState('card__save');
  const [linkTrailer, setLinkTrailer] = useState('');

  const currentPath = window.location.pathname;
  const hours = Math.floor(card.duration/60);
  const minutes = card.duration % 60;
  const baseUrl = 'https://api.nomoreparties.co/';

  useEffect(() =>
  {
    if (currentPath == "/movies")
    {
      setTypeBtn("card__save");  
      setLinkTrailer(baseUrl + card.image.url);
    }
    else 
    {
      setTypeBtn("card__delete"); 
      setLinkTrailer(card.image);
    }
  }, [])

  function handleLike()
  {
    onLike({movie: card});
    //arr.includes(elem);
  }

  return (
  <div className="card">
    <a target="_blank" href={card.trailerLink} className="card__link">
      <img src={linkTrailer} className="card__preview" alt={card.nameRU}/>
    </a>      
    <div className="button card__button" onClick={handleLike}>
      <h2 className='card__name'>{card.nameRU}</h2>
      <div className={`card__pic ${typeBtn}`}></div>
      <p className='card__duration'>{hours}ч {minutes}мин</p>
    </div>
  </div>
  );
}

export default MoviesCard;