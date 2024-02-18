// компонент страницы с сохранёнными карточками фильмов

import React, {useEffect, useState} from 'react';

import SearchForm from '../search-form/search-form';
import MoviesCardList from '../movies-card-list/movies-card-list';
import Footer from '../../footer/footer';
import Header from '../../header/header';

function SavedMovies()
{
  const [showingCards, setShowingCards] = useState(JSON.parse(localStorage.getItem('savedMovies')));

  // Запрос фильмов от сервера
  function getMovies()
  {  
   /* setIsPreloaderShow(true);
    moviesApi.getMovies()
      .then((moviesData) =>
      {
        const filtrMovies = onSearch({
          movies: moviesData,
          request: localStorage.getItem('request'),
          isShort: JSON.parse(localStorage.getItem('isShortMovies')),
        })

        setShowingCards(filtrMovies);
      })
      .catch((err) => 
      {
        // setServerError(err.message);
      })
      .finally(() =>
      {
        setIsPreloaderShow(false);
      })   */
  }
  
  function onDislike({movie})
  {

  }

  function foundMovies({request, isShortMovies})
  {

  }

  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm onSubmit={foundMovies}/>
        <MoviesCardList
          cards={showingCards}
          onLike={onDislike} 
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;