// компонент страницы с сохранёнными карточками фильмов
import { useEffect, useState, React } from 'react';

import SearchForm from '../search-form/search-form';
import MoviesCardList from '../movies-card-list/movies-card-list';
import Footer from '../../footer/footer';
import {cards} from '../../../utils/constants';
import Header from '../../header/header';

function SavedMovies()
{
  useEffect(() => {
    const origBodyStyle = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "rgb(32, 32, 32)";
    return () => document.body.style.backgroundColor = origBodyStyle;
  }, []);
  
  return (
    <main>
      <Header />
      <SearchForm />
      <MoviesCardList 
        cards={cards}
      />
      <Footer />
    </main>
  );
}

export default SavedMovies;