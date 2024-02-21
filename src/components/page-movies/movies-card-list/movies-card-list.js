// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством

import React, {useEffect, useState} from 'react';
import MoviesCard from '../movies-card/movies-card';

function MoviesCardList({cards, countShowingCards, addMovie, deleteMovie})
{  
  if (Array.isArray(cards))
  {
    const showingCards = cards.slice(0, countShowingCards);
    return (
      <section className="section movies-card-list">
        {
          showingCards.map((item) =>
          {
            let key = 0;
            if (window.location.pathname == "/movies")
              key = item.id;
            else
              key = item.movieId;
              
            return (<MoviesCard
              card={item}
              key={key}
              addMovie={addMovie}
              deleteMovie={deleteMovie}
            />)
          })
        }
      </section>
    );
  }
}

export default MoviesCardList;