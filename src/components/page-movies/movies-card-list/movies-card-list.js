// компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством

import React from 'react';
import MoviesCard from '../movies-card/movies-card';

function MoviesCardList({cards})
{  
  if (Array.isArray(cards))
    return (
      <section className="section movies-card-list">
        {
          cards.map((item) =>
          {
            return (<MoviesCard
              card={item}
              key={item.id}
            />)
          })
        }
      </section>
    );
}

export default MoviesCardList;