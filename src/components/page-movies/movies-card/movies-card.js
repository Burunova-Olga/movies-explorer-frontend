// компонент одной карточки фильма

import React, { useEffect, useState } from 'react';
import { SavedMoviesContext } from '../../../contexts/SavedMoviesContext';

function MoviesCard({ card, addMovie, deleteMovie })
{
  const savedMovies = React.useContext(SavedMoviesContext);

  const [typeBtn, setTypeBtn] = useState('card__save');
  const [linkTrailer, setLinkTrailer] = useState('');
  const [savedId, setSavedId] = useState('');

  const currentPath = window.location.pathname;
  const hours = Math.floor(card.duration / 60);
  const minutes = card.duration % 60;
  const baseUrl = 'https://api.nomoreparties.co/';

  useEffect(() =>
  {
    if (currentPath == "/movies")
    {
      setLinkTrailer(baseUrl + card.image.url);
      
      // Отметки сохранённых фильмов
      if (savedMovies != null)
      {
        const movie = savedMovies.find(item => item.movieId === card.id);
    
        // Текущий элемент есть в списке сохранённых
        if (movie != null)
        {
          setTypeBtn("card__saved");
          setSavedId(movie._id);
        }
        else 
          setTypeBtn("card__save");
      }
    }
    else 
    {
      setTypeBtn("card__delete");
      setLinkTrailer(card.image);      
      setSavedId(card._id);
    }
  }, [savedMovies])

  function handleLike()
  {
    if (currentPath == "/movies")
    {
      if (savedId != '')
        deleteMovie(savedId);
      else
        addMovie({ movie: card });
    }
    else
    {  
      if (savedId != '')
        deleteMovie(savedId);
    }
  }

  return (
    <div className="card">
      <a target="_blank" href={card.trailerLink} className="card__link">
        <img src={linkTrailer} className="card__preview" alt={card.nameRU} />
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