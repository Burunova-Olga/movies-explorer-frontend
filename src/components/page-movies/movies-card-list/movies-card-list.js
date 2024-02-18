// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством

import React, {useEffect, useState} from 'react';
import MoviesCard from '../movies-card/movies-card';

function MoviesCardList({cards, countShowingCards, onLike})
{  
  if (Array.isArray(cards))
  {
    const showingCards = cards.slice(0, countShowingCards);
    return (
      <section className="section movies-card-list">
        {
          showingCards.map((item) =>
          {
            return (<MoviesCard
              card={item}
              key={item.id}
              onLike={onLike}
            />)
          })
        }
      </section>
    );
  }
}

export default MoviesCardList;