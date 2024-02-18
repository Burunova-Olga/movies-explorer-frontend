// компонент страницы с поиском по фильмам
import React, {useEffect, useState} from 'react';

import SearchForm from '../search-form/search-form';
import MoviesCardList from '../movies-card-list/movies-card-list';
import Footer from '../../footer/footer';
import More from '../more/more';
import Header from '../../header/header';
import Preloader from '../preloader/preloader';
import moviesApi from "../../../utils/MoviesApi";

function Movies({onSearch})
{
  const [isPreloaderShow, setIsPreloaderShow] = useState(false);
  const [more, setMore] = useState(<More onClick={moreClick} />);
 // const [showingCards, setShowingCards] = useState(cards.slice(0, 5));
  const [showingCards, setShowingCards] = useState([]);

  useEffect(() =>
  {
    if (localStorage.getItem('isShortMovies') != null &&
        localStorage.getItem('request') != null )
      {
        getMovies();        
      }
  }, [])

  function updateRequest({request, isShortMovies})
  {
    localStorage.setItem('isShortMovies', isShortMovies);
    localStorage.setItem('request', request);
    getMovies();
  }
  
  // Запрос фильмов от сервера
  function getMovies()
  {  
    setIsPreloaderShow(true);
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
      })   
  }

  function moreClick()
  {
    // setMore(<></>);
    // setShowingCards(cards);
  }

  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm onSubmit={updateRequest}/>
        {isPreloaderShow && <Preloader />}
        <MoviesCardList cards={showingCards} />
        {more}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
