// компонент страницы с сохранёнными карточками фильмов

import React, {useEffect, useState} from 'react';

import { SavedMoviesContext } from '../../../contexts/SavedMoviesContext';
import SearchForm from '../search-form/search-form';
import MoviesCardList from '../movies-card-list/movies-card-list';
import Footer from '../../footer/footer';
import Header from '../../header/header';

function SavedMovies({onSearch, deleteMovie})
{  
  const savedMovies = React.useContext(SavedMoviesContext);
  const [cards, setCards] = useState([]);  

  useEffect(() =>
  {
    setCards(savedMovies);
  }, [savedMovies])

  // Запрос фильмов от сервера
  function foundMovies({request, isShortMovies})
  {
    document.querySelector('.found-error').classList.remove('error_visible');

    const filtrMovies = onSearch(
    {
      movies: savedMovies,
      request: request,
      isShort: isShortMovies,
    })

    // Если поиск не дал результатов
    if (filtrMovies.length === 0)
      document.querySelector('.found-error').classList.add('error_visible');

    setCards(filtrMovies);      
  }

  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm onSubmit={foundMovies} request={''}/>
        <p className="error found-error">Ничего не найдено</p>
        <MoviesCardList
          cards={cards}
          countShowingCards={cards.length}
          deleteMovie={deleteMovie}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;