// компонент страницы с поиском по фильмам

import { useEffect, React } from 'react';

import SearchForm from '../search-form/search-form';
import MoviesCardList from '../movies-card-list/movies-card-list';
import {cards} from '../../../utils/constants';

function Movies()
{
  useEffect(() => {
    const origFontStyle = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "rgb(32, 32, 32)";
    return () => document.body.style.backgroundColor = origFontStyle;
  }, []);

  return (
    <main>
      <SearchForm />
      <MoviesCardList 
        cards={cards}
      />
    </main>
  );
}

export default Movies;