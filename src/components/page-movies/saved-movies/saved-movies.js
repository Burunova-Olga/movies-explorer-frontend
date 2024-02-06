// компонент страницы с сохранёнными карточками фильмов
import { useEffect, useState, React } from 'react';

import SearchForm from '../search-form/search-form';
import MoviesCardList from '../movies-card-list/movies-card-list';
import Footer from '../../footer/footer';
import { cards } from '../../../utils/constants';
import Header from '../../header/header';

function SavedMovies()
{
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList
          cards={cards}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;